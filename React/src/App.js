import "./App.css";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { Component } from "react";
import profile from "./images/Profile.png";
import { Link } from "react-router-dom";

export default class App extends Component {
  state = {};
  componentDidMount = () => {
    this.setState({
      user: localStorage.getItem("user"),
      userID: localStorage.getItem("_id"),
    });
  };

  handleFetch = () => {
    fetch("/clientlogout", {
      method: "POST",
      body: JSON.stringify({
        userID: this.state.userID,
      }),
    });
    this.setState({ user: "" });
    localStorage.setItem("log", false);
    localStorage.clear("user");
    alert("已登出");
    window.location.href = "http://localhost:3000/HomePage";
  };

  render() {
    return (
      <div>
        <Navbar
          fixed="top"
          sticky="top"
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
          style={{ boxShadow: "0px 3px 8px grey" }}
        >
          <Navbar.Brand style={{ fontSize: "24pt" }} href="/HomePage">
            EcoChain
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/Feature">能源介紹</Nav.Link>
              <Nav.Link href="/Project">方案</Nav.Link>
              {/* <Nav.Link href="/Test1">Test</Nav.Link> */}
            </Nav>
            <Nav style={{ marginRight: "10px" }}>
              <Nav.Link href="/About">關於我們</Nav.Link>
              &nbsp;
              {this.state.user ? (
                <h5 style={{ color: "white", marginTop: "5pt " }}>
                  {this.state.user}
                </h5>
              ) : (
                ""
              )}
              {this.state.user ? (
                <Button variant="dark" onClick={this.handleFetch}>
                  登出
                </Button>
              ) : (
                <Nav.Link href="/Login">登入</Nav.Link>
              )}
            </Nav>
            {this.state.user ? (
              <Link to="/Profile">
                <img
                  src={profile}
                  style={{ height: 30, weight: 30, marginRight: "10pt" }}
                ></img>
              </Link>
            ) : (
              ""
            )}
            &nbsp;
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
