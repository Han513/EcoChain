import React, { Component } from "react";
import {
  Box,
  Paper,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Input,
  InputAdornment,
} from "@material-ui/core/";
import { Row, Col, Image } from "react-bootstrap";
import ProjectItem from "./ProjectItem";
import { BsLightning } from "react-icons/bs";
import { FiSun } from "react-icons/fi";
import { IoCloudOutline } from "react-icons/io5";
import { IoWaterOutline } from "react-icons/io5";
// import { FaFire } from "react-icons/fa";
import "./Pcss.css";
import pic1 from "../images/pin2.jpg";
import Scroll from "../Scroll";

export default class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      profile: [],
      intervalIsSet1: false,
      intervalIsSet2: false,
      filters: {
        displaySun: true,
        displayWater: true,
        displayWind: true,
      },
      deCapacity: 0,
      dePing: 0,
      openDia: false,
      typebg: "white",
      search: "",
      searchList: [],
      sflag: false,
    };
  }

  //查詢
  componentDidMount() {
    const Ca = this.state.deCapacity;
    localStorage.setItem("deC", Ca);
    this.getDataFromProfileDb();
    this.getDataFromProjectDb();

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
      .then((res) =>
        this.setState({
          data: res.data,
        })
      );
  };

  getDataFromProfileDb = () => {
    fetch("http://localhost:3002/api/AllData")
      .then((data) => data.json())
      .then((res) => this.setState({ profile: res.data }));
  };

  onDisplay(type) {
    const bt = document.getElementById(type).style.backgroundColor;
    console.log("幹");

    if (bt === "white") {
      document.getElementById(type).style.backgroundColor = "	LightGray";
    } else {
      document.getElementById(type).style.backgroundColor = "white";
    }
    this.setState((state) => ({
      filters: Object.assign({}, state.filters, {
        [type]: !state.filters[type],
      }),
    }));
  }
  handleClose = () => {
    const openDia = this.state.openDia;
    this.setState((prestate) => ({
      openDia: !prestate.openDia,
    }));
  };
  handleChange = () => {
    const Ca = document.getElementById("Capacity").value;
    // const Pi = document.getElementById("Ping").value;
    if (Ca < 0) {
      return alert("只能大於0");
    } else if (Ca === "") {
      return alert("預設請給0");
    } else {
      this.setState((prestate) => ({
        openDia: !prestate.openDia,
        deCapacity: Ca,
        // dePing: Pi,
      }));
      localStorage.setItem("deC", Ca);
    }
  };

  handleSearch = (event) => {
    let search = event.target.value;
    const { searchList, data } = this.state;
    searchList.length = 0;

    data.map((datas) => {
      let regId = datas._id;
      let regPname = datas.P_Name;
      let regExp = new RegExp(search, "gmi");
      let regExp2 = new RegExp(search, "gmi");

      let temp = searchList.includes(datas);
      let regTestId = regExp.test(regId);
      let regTestPname = regExp2.test(regPname);
      if (regTestId === true || (regTestPname === true && temp !== true)) {
        searchList.push(datas);
      }
    });
    this.setState({
      search: search,
      searchList,
      sflag: true,
    });
  };

  render() {
    var user = localStorage.getItem("user");
    const { displaySun, displayWater, displayWind } = this.state.filters;

    const {
      deCapacity,
      dePing,
      openDia,
      data,
      search,
      searchList,
      sflag,
      profile,
    } = this.state;

    const profiles = profile.filter((profile) => {
      return profile.username === user;
    });
    const profileLike = Object.values(profiles).map((item) => item.like);
    const profileId = Object.values(profiles).map((item) => item._id);
    //console.log(profileLike);
    const dataT = data.filter(
      (datas) =>
        (displaySun === true && datas.type === "sun") ||
        (displayWater === true && datas.type === "water") ||
        (displayWind === true && datas.type === "wind")
    );

    const dataf = dataT.filter(
      (datas) => datas.capacity >= deCapacity && datas.ping >= dePing
    );

    const dataT2 = searchList.filter(
      (datas) =>
        (displaySun === true && datas.type === "sun") ||
        (displayWater === true && datas.type === "water") ||
        (displayWind === true && datas.type === "wind")
    );

    const dataf2 = dataT2.filter(
      (datas) => datas.capacity >= deCapacity && datas.ping >= dePing
    );
    //---------------------------------------------------------------------尚未搜尋
    console.log("profileLike[0]");
    console.log(profileLike[0]);

    if (profileLike[0] !== undefined) {
      const dataff = dataf.map((datas, index) => ({
        ...datas,
        islike: profileLike[0].includes(datas._id) ? true : false,
      }));

      console.log(dataff);
      console.log(typeof dataff);
      var dataff2 = dataff.filter(
        (datas) => datas.capacity >= deCapacity && datas.ping >= dePing
      );
    } else {
      const dataff = dataf;
      console.log("ERRdataff");
      console.log(dataff);
      var dataff2 = dataff.filter(
        (datas) => datas.capacity >= deCapacity && datas.ping >= dePing
      );
    }
    //搜尋
    if (profileLike[0] !== undefined) {
      const datasf = dataf2.map((datas, index) => ({
        ...datas,
        islike: profileLike[0].includes(datas._id) ? true : false,
      }));

      console.log(datasf);
      console.log(typeof datasf);
      var datasf2 = datasf.filter(
        (datas) => datas.capacity >= deCapacity && datas.ping >= dePing
      );
    } else {
      const datasf = dataf2;
      console.log("ERRdataff");
      console.log(datasf);
      var datasf2 = datasf.filter(
        (datas) => datas.capacity >= deCapacity && datas.ping >= dePing
      );
    }
    //---------------------------------------------------------------------
    // console.log("searchList");
    // console.log(searchList);
    return (
      <Box style={{ marginTop: "80pt" }}>
        <Scroll showBelow={250} />
        <Box component="header">
          <Row>
            <Col lg={8} md={6}>
              <h1 className="projectitle">方案</h1>

              <div className="projectitle2">
                我們為您精心挑選出了各種適合的方案供您挑選，
                <br />
                通過這種方式，您可以準確地知道能量的來源和金錢的去向。
              </div>
            </Col>
            <Col lg={4} md={2}>
              <div className="paperD">
                <Paper
                  elevation={3}
                  className="papercss"
                  style={{ padding: "10pt" }}
                >
                  <div>
                    <Image src={pic1} roundedCircle className="image"></Image>
                    如有問題請跟我們聯絡
                    <br />
                    0908-087-087
                  </div>
                </Paper>
              </div>
            </Col>
          </Row>
        </Box>

        <Box>
          <Row style={{ margin: "15px", marginBottom: "50px" }}>
            <Box
              style={{ letterSpacing: "2.5px", marginLeft: "40pt" }}
              className="ptitle"
            >
              根據使用情況(每月平均電量):
              <br />
              <BsLightning />:{deCapacity}kWh
              {/* <FaFire />:{dePing}m³ */}
              <Button
                onClick={this.handleClose}
                variant="outlined"
                style={{ marginLeft: "10pt" }}
              >
                改變
              </Button>
              <Dialog
                open={openDia}
                onClose={this.handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {"可根據使用情況調整要使用的電量"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    <BsLightning />:{" "}
                    <Input
                      id="Capacity"
                      type="number"
                      defaultValue={deCapacity}
                      endAdornment={
                        <InputAdornment position="end">kWh</InputAdornment>
                      }
                    ></Input>
                    {/* <FaFire />:{" "}
                    <Input
                      id="Ping"
                      type="number"
                      defaultValue={dePing}
                      endAdornment={
                        <InputAdornment position="end">m³</InputAdornment>
                      }
                    ></Input> */}
                  </DialogContentText>
                  <DialogContentText id="alert-dialog-description2">
                    若另一個無需求請預設0
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={this.handleClose} color="primary">
                    不同意
                  </Button>
                  <Button onClick={this.handleChange} color="primary" autoFocus>
                    同意
                  </Button>
                </DialogActions>
              </Dialog>
            </Box>
            <Box style={{ letterSpacing: "2.5px" }} className="ptitle" xs={5}>
              能源類型:
              <br />
              <Button
                onClick={() => this.onDisplay("displaySun")}
                variant="outlined"
                style={{ color: "#37434f", backgroundColor: "white" }}
                id="displaySun"
              >
                <FiSun />
              </Button>
              <Button
                onClick={() => this.onDisplay("displayWater")}
                style={{ color: "#37434f", backgroundColor: "white" }}
                variant="outlined"
                id="displayWater"
              >
                <IoWaterOutline />
              </Button>
              <Button
                onClick={() => this.onDisplay("displayWind")}
                style={{ color: "#37434f", backgroundColor: "white" }}
                variant="outlined"
                id="displayWind"
              >
                <IoCloudOutline />
              </Button>
            </Box>
            <Box style={{ letterSpacing: "2.5px" }} className="ptitle">
              Search:
              <Input
                id="search"
                type="search"
                onChange={this.handleSearch}
                value={search}
              ></Input>
              {/* ----------------------------------------------------------------------------- */}
            </Box>
          </Row>
        </Box>

        <Box component="body">
          <Row>
            <Col lg={9} md={9}>
              <Row className="justify-content-md-center">
                {sflag === false
                  ? dataff2.map((datas) => {
                      return (
                        <ProjectItem
                          key={datas._id}
                          data={datas}
                          profileLike={profileLike}
                          islike={datas.islike}
                          profileId={profileId[0]}
                          user={user}
                        />
                      );
                    })
                  : datasf2.map((datas) => {
                      return (
                        <ProjectItem
                          key={datas._id}
                          data={datas}
                          profileLike={profileLike}
                          profileId={profileId[0]}
                          user={user}
                          islike={datas.islike}
                        />
                      );
                    })}
              </Row>
            </Col>

            <Col lg={2} md={2} style={{ marginLeft: "10px" }}>
              <Card
                variant="outlined"
                style={{ padding: "10px", marginLeft: "10px" }}
              >
                <CardContent>
                  <Typography color="textSecondary" gutterBottom>
                    ADVERTISMENT
                  </Typography>
                  <Typography variant="h5" component="h2">
                    benevolent
                  </Typography>
                  <Typography color="textSecondary">廣告</Typography>
                  <Typography variant="body2" component="p">
                    刊登詳情請寫信給我們!
                    <br />
                    我們很樂意為您提供幫助!
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Col>
          </Row>
        </Box>
      </Box>
    );
  }
}
