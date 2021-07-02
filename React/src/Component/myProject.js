import React, { Component } from "react";
import axios from "axios";
import { Container } from "@material-ui/core";
import { Row, Col } from "react-bootstrap";
import "./eco.css";
import ProjectItem from "./myProjectItem";
import ProjectInsert from "../ProjectInsert";
import { Button } from "@material-ui/core";

export default class myProject extends Component {
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
    showInsert: false,
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
  deleteFromDB = (idTodelete) => {
    parseInt(idTodelete);
    let objIdToDelete = null;
    this.state.project.forEach((dat) => {
      if (dat._id === idTodelete) {
        objIdToDelete = dat._id;
      }
    });

    axios.delete("http://localhost:3001/api/DeleteData", {
      data: {
        id: objIdToDelete,
      },
    });
  };
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
    const { project, profile, showDelete } = this.state;
    var user = localStorage.getItem("user");
    const profiles = profile.filter((dat) => {
      return dat.username === user;
    });
    const mywallet = localStorage.getItem("wallet");

    const myProject = project.filter((data) => data.wallet === mywallet);
    const profileId = Object.values(profiles).map((item) => item._id);
    return (
      <Container style={{ padding: "10px" }}>
        <Row>
          <Col lg={10} md={9}>
            <h1 style={{ textAlign: "center" }}>我的方案</h1>
            <Container>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => {
                  this.setState((prestate) => ({
                    showInsert: !prestate.showInsert,
                  }));
                }}
              >
                新增方案
              </Button>
            </Container>

            {this.state.showInsert ? (
              <Row style={{ padding: "10px" }}>
                <ProjectInsert />
              </Row>
            ) : (
              <Row style={{ padding: "10px" }}>
                {myProject.map((datas) => {
                  return (
                    <ProjectItem
                      key={datas._id}
                      data={datas}
                      profileId={profileId[0]}
                      clickDelete={this.deleteFromDB}
                    />
                  );
                })}
              </Row>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}
