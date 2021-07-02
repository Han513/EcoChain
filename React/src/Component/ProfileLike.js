import React, { Component } from "react";

import { Container } from "@material-ui/core";
import { Row, Col } from "react-bootstrap";
import "./eco.css";
import ProjectItem from "./ProjectItem";

export default class ProfileItem extends Component {
  // 初始化元件的狀態
  state = {
    project: [],
    profile: [],
    id: 0,
    message: null,
    intervalIsSet1: false,
    intervalIsSet2: false,
    idToDelete: null,
    idToUpdate: null,
    objectToUpdate: null,
  };

  componentDidMount() {
    this.getDataFromProjectDb();
    this.getDataFromProfileDb();
    if (!this.state.intervalIsSet1) {
      let interval1 = setInterval(this.getDataFromProjectDb, 2000);
      this.setState({ intervalIsSet1: interval1 });
    }
    if (!this.state.intervalIsSet2) {
      let interval2 = setInterval(this.getDataFromProfileDb, 2000);
      this.setState({ intervalIsSet2: interval2 });
    }
  }

  componentWillUnmount() {
    if (this.state.intervalIsSet1) {
      clearInterval(this.state.intervalIsSet1);
      this.setState({ intervalIsSet1: null });
    }
    if (this.state.intervalIsSet2) {
      clearInterval(this.state.intervalIsSet2);
      this.setState({ intervalIsSet2: null });
    }
  }

  getDataFromProjectDb = () => {
    fetch("http://localhost:3001/api/AllData")
      .then((data) => data.json())
      .then((res) => this.setState({ project: res.data }));
  };

  getDataFromProfileDb = () => {
    fetch("http://localhost:3002/api/AllData")
      .then((data) => data.json())
      .then((res) => this.setState({ profile: res.data }));
  };

  render() {
    const { project, profile } = this.state;
    var user = localStorage.getItem("user");
    const profiles = profile.filter((dat) => {
      return dat.username === user;
    });
    const userlike = Object.values(profiles).map((item) => item.like);
    console.log(userlike[0]);
    const likeproject = project.filter((data) =>
      userlike[0].includes(data._id)
    );
    const profileId = Object.values(profiles).map((item) => item._id);
    return (
      <Container style={{ padding: "10px" }}>
        <Row>
          <Col lg={9} md={9}>
            <h1 style={{ textAlign: "center" }}>收藏項目</h1>
            <Row className="justify-content-md-center">
              {likeproject.map((datas) => {
                return (
                  <ProjectItem
                    key={datas._id}
                    data={datas}
                    profileLike={userlike}
                    profileId={profileId[0]}
                  />
                );
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
