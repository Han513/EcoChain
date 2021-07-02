import React, { Component } from "react";
import axios from "axios";
import { Container } from "@material-ui/core";
import "./eco.css";
import { Form, Col, Row } from "react-bootstrap";

export default class ProfileItem extends Component {
  // 初始化元件的狀態
  state = {
    data: [],
    id: 0,
    message: null,
    correctcode: false,
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

  handleSearch = () => {
    var search = document.getElementById("search").value;
    search ===
    "OFNGZHECEWTXPLTPJFGDEKHHULCVLJNSYBFD9FCKUJJA99LK9NDSTPY9CXJFPWUJQZIHTWCGZZQNJFXHB"
      ? this.setState({ correctcode: true })
      : this.setState({ correctcode: false });
    if (
      search !==
      "OFNGZHECEWTXPLTPJFGDEKHHULCVLJNSYBFD9FCKUJJA99LK9NDSTPY9CXJFPWUJQZIHTWCGZZQNJFXHB"
    ) {
      alert("查無此交易");
    }
    document.getElementById("search").value = "";
  };

  render() {
    const { data, correctcode } = this.state;
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
                  <div style={{}} key={data.message}>
                    <h1 style={{}}>搜尋交易紀錄</h1>
                    <Col>
                      <Form.Group>
                        <Row>
                          <Form.Label>請輸入搜尋碼</Form.Label>
                          <Col>
                            <Form.Control
                              id="search"
                              type="text"
                              placeholder="請輸入傳至信箱的搜尋碼"
                              required
                            />
                          </Col>
                          <Col>
                            <button
                              type="submit"
                              class="btn btn-secondary btn-sm disabled"
                              onClick={() => {
                                this.handleSearch();
                              }}
                            >
                              搜尋
                            </button>
                          </Col>
                        </Row>
                        <Row>
                          {correctcode ? (
                            <div>
                              寄件者：henry88699 收件者：wholegend12344
                              金額：6430 度數：321
                            </div>
                          ) : null}
                        </Row>
                      </Form.Group>
                    </Col>
                  </div>
                ))}
          </Col>
        </Row>
      </Container>
    );
  }
}
