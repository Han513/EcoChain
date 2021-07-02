import "./App.css";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { Component } from "react";
import profile from "./images/Profile.png";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  state = {};
  componentDidMount = () => {
    this.setState({
      user: localStorage.getItem("token"),
    });
  };

  render() {
    return (
      <div>
        <Navbar
          sticky="top"
          collapseOnSelect
          expand="md"
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
              <Nav.Link href="/Test1">Test</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/About">關於我們</Nav.Link>
              &nbsp;
              {this.state.user ? (
                <h2 style={{ color: "white" }}>{this.state.user}</h2>
              ) : (
                ""
              )}
              &nbsp;
              {this.state.user ? (
                <button
                  onClick={() => {
                    this.setState({ user: "" });
                    localStorage.clear();
                    alert("已登出");
                  }}
                >
                  登出
                </button>
              ) : (
                <Nav.Link href="/Login">登入</Nav.Link>
              )}
            </Nav>
            &nbsp;&nbsp;
            {this.state.user ? (
              <Link to="/Profile">
                <img src={profile} style={{ height: 30, weight: 30 }}></img>
              </Link>
            ) : (
              ""
            )}
            &nbsp;
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-info">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
