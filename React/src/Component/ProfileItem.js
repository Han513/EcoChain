import React, { Component } from "react";
import axios from "axios";
import { Container } from "@material-ui/core";
import { Row, Col } from "react-bootstrap";
import edit from "../images/edit.png";
import { Link } from "react-router-dom";
import "./eco.css";

export default class ProfileItem extends Component {
  // 初始化元件的狀態
  state = {
    data: [],
    id: 0,
    message: null,
    intervalIsSet: false,
    idToDelete: null,
    idToUpdate: null,
    objectToUpdate: null,
  };

  componentDidMount() {
    this.getDataFromDb();
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getDataFromDb, 2000);
      this.setState({ intervalIsSet: interval });
    }
  }

  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }

  //抓資料
  getDataFromDb = () => {
    fetch("http://localhost:3002/api/AllData")
      .then((data) => data.json())
      .then((res) => this.setState({ data: res.data }));
  };

  //insert資料
  putDataToDB = (message) => {
    let currentIds = this.state.data.map((data) => data.id);
    let idToBeAdded = 0;
    while (currentIds.includes(idToBeAdded)) {
      ++idToBeAdded;
    }

    axios.post("http://localhost:3002/api/InsertData", {
      id: idToBeAdded,
      message: message,
    });
  };

  deleteFromDB = (idTodelete) => {
    parseInt(idTodelete);
    let objIdToDelete = null;
    this.state.data.forEach((dat) => {
      if (dat.id === idTodelete) {
        objIdToDelete = dat._id;
      }
    });

    axios.delete("http://localhost:3002/api/DeleteData", {
      data: {
        id: objIdToDelete,
      },
    });
  };

  updateDB = (idToUpdate, updateToApply) => {
    let objIdToUpdate = null;
    parseInt(idToUpdate);
    this.state.data.forEach((dat) => {
      if (dat.id === idToUpdate) {
        objIdToUpdate = dat._id;
      }
    });

    axios.post("http://localhost:3002/api/UpdateData", {
      id: objIdToUpdate,
      update: { message: updateToApply },
    });
  };

  render() {
    const { data } = this.state;
    var user = localStorage.getItem("user");
    const datas = data.filter((dat) => {
      return dat.username === user;
    });

    return (
      <Container>
        <Row>
          <Col className="profile">
            {data.length <= 0
              ? "NO DB ENTRIES YET"
              : datas.map((dat) => (
                  <div style={{ padding: "10px" }} key={data.message}>
                    {/* <span style={{ color: "gray" }}> id: </span> {dat._id}{" "}
                    <br /> */}
                    <span style={{ color: "gray" }}> 錢包位址 : </span>
                    {dat.wallet} <br />
                    <span style={{ color: "gray" }}> 姓 : </span>
                    {dat.name1} <br />
                    <span style={{ color: "gray" }}> 名 : </span>
                    {dat.name2} <br />
                    <span style={{ color: "gray" }}> 帳號 : </span>
                    {dat.username} <br />
                    <span style={{ color: "gray" }}> E-mail : </span>
                    {dat.email} <br />
                    <span style={{ color: "gray" }}> 地址 : </span>
                    {dat.address} <br />
                    <span style={{ color: "gray" }}> 電話 : </span>
                    {dat.phone} <br />
                    <span style={{ color: "gray" }}> 生日 : </span>
                    {dat.birthday} <br />
                    <span style={{ color: "gray" }}> 性別 : </span>
                    {dat.sex} <br />
                  </div>
                ))}
          </Col>
        </Row>
        <Link to="/EditProfile">
          <img
            src={edit}
            style={{
              width: "50px",
              position: "fixed",
              bottom: "30px",
              right: "30px",
            }}
          />
        </Link>
      </Container>
    );
  }
}

/* <div style={{ padding: '10px' }}>
          <input
            type="text"
            onChange={(e) => this.setState({ message: e.target.value })}
            placeholder="add something in the database"
            style={{ width: '200px' }}
          />
          <button onClick={() => this.putDataToDB(this.state.message)}>
            ADD
          </button>
        </div>
        <div style={{ padding: '10px' }}>
          <input
            type="text"
            style={{ width: '200px' }}
            onChange={(e) => this.setState({ idToDelete: e.target.value })}
            placeholder="put id of item to delete here"
          />
          <button onClick={() => this.deleteFromDB(this.state.idToDelete)}>
            DELETE
          </button>
        </div>
        <div style={{ padding: '10px' }}>
          <input
            type="text"
            style={{ width: '200px' }}
            onChange={(e) => this.setState({ idToUpdate: e.target.value })}
            placeholder="id of item to update here"
          />
          <input
            type="text"
            style={{ width: '200px' }}
            onChange={(e) => this.setState({ updateToApply: e.target.value })}
            placeholder="put new value of the item here"
          />
          <button
            onClick={() =>
              this.updateDB(this.state.idToUpdate, this.state.updateToApply)
            }
          >
            UPDATE
          </button>
        </div> */

/* <div>
          <Box
            sx={{
              backgroundColor: "background.default",
              minHeight: "100%",
              py: 3,
            }}
          >
            <Container maxWidth={false}>
              <Grid container spacing={3}>
                <Grid item lg={3} sm={6} xl={3} xs={12}>
                  <ProfileItem />
                </Grid>
              </Grid>
            </Container>
          </Box>
        </div> */
