//npm install axios
//npm i -S mongoose express body-parser morgan cors
//要在package.json加上 "proxy": "http://localhost:3001"
//_id wallet P_Name P_Content P_Image P_Date type capacity ping
import React, { Component } from "react";
import axios from "axios";

import ProfileItem from "./ProfileItem";
import ProfileLike from "./ProfileLike";
import ProfileSearch from "./ProfileSearch";
import "./Profile.css";
import MyProject from "./myProject";
import ProfileSidebar from "./ProfileSidebar";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

export default class Profile extends Component {
  // 初始化元件的狀態
  state = {
    data: [],
    id: 0,
    message: null,
    intervalIsSet: false,
    idToDelete: null,
    idToUpdate: null,
    objectToUpdate: null,
    isclicktoprofile: true,
    isclicktomyproject: false,
    isclicktolikeproject: false,
    isclicktosearch: false,
  };

  componentDidMount() {
    var user = localStorage.getItem("token");
    let username = { username: user };
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

    axios.post("http://localhost:3001/api/InsertData", {
      id: idToBeAdded,
      message: message,
    });
  };

  deleteFromDB = (idTodelete) => {
    parseInt(idTodelete);
    let objIdToDelete = null;
    this.state.data.forEach((dat) => {
      if (dat.id == idTodelete) {
        objIdToDelete = dat._id;
      }
    });

    axios.delete("http://localhost:3001/api/DeleteData", {
      data: {
        id: objIdToDelete,
      },
    });
  };

  updateDB = (idToUpdate, updateToApply) => {
    let objIdToUpdate = null;
    parseInt(idToUpdate);
    this.state.data.forEach((dat) => {
      if (dat.id == idToUpdate) {
        objIdToUpdate = dat._id;
      }
    });

    axios.post("http://localhost:3001/api/UpdateData", {
      id: objIdToUpdate,
      update: { message: updateToApply },
    });
  };

  render() {
    const {
      data,
      isclicktoprofile,
      isclicktolikeproject,
      isclicktosearch,
      isclicktomyproject,
    } = this.state;
    const clicktoprofile = () => {
      this.setState({ isclicktoprofile: true });
      this.setState({ isclicktomyproject: false });
      this.setState({ isclicktolikeproject: false });
      this.setState({ isclicktosearch: false });
    };
    const clicktomyproject = () => {
      this.setState({ isclicktoprofile: false });
      this.setState({ isclicktomyproject: true });
      this.setState({ isclicktolikeproject: false });
      this.setState({ isclicktosearch: false });
    };
    const clicktolikeproject = () => {
      this.setState({ isclicktoprofile: false });
      this.setState({ isclicktomyproject: false });
      this.setState({ isclicktolikeproject: true });
      this.setState({ isclicktosearch: false });
    };
    const clicktosearch = () => {
      this.setState({ isclicktoprofile: false });
      this.setState({ isclicktomyproject: false });
      this.setState({ isclicktolikeproject: false });
      this.setState({ isclicktosearch: true });
    };
    var user = localStorage.getItem("user");

    const datas = data.filter((dat) => {
      return dat.username === user;
    });
    const userimg = Object.values(datas).map((item) => item.img);
    localStorage.setItem("img", userimg);
    return (
      <>
        <Container fluid>
          <Row>
            <Col xs={2} style={{ textAlign: "center" }}>
              <ProfileSidebar
                clicktoprofile={clicktoprofile}
                clicktomyproject={clicktomyproject}
                clicktolikeproject={clicktolikeproject}
                clicktosearch={clicktosearch}
                img={userimg}
              />
            </Col>
            <Col xs={10} id="page-content-wrapper">
              {isclicktoprofile ? <ProfileItem key={datas._id} /> : null}
              {isclicktomyproject ? <MyProject key={datas._id} /> : null}
              {isclicktolikeproject ? <ProfileLike key={datas._id} /> : null}
              {isclicktosearch ? <ProfileSearch key={datas._id} /> : null}
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
