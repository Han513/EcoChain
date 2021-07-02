import React, { Component } from "react";
import { Button, Form, Col, Container, Row } from "react-bootstrap";
import { Box } from "@material-ui/core";

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      addUsername,
      addPassword,
      onUsernameChange,
      onPasswordChange,
      onLoginSubmit,
    } = this.props;
    const handleUsernameChange = (event) => {
      onUsernameChange(event.target.value);
    };
    const handlePasswordChange = (event) => {
      onPasswordChange(event.target.value);
    };
    const handleLoginSubmit = (event) => {
      event.preventDefault();
      onLoginSubmit();
    };
    return (
      <Box style={{ margin: "10px", marginTop: "120px" }}>
        <Container
          style={{
            padding: " 35px 70px",
            boxShadow: " 0 0 8px 0 rgb(51 61 71 / 12%)",
            width: "440px",
            margin: "0 auto 50px",
            maxWidth: "unset",
            flexGrow: "0",
          }}
        >
          <Form onSubmit={handleLoginSubmit} style={{ padding: 10 }}>
            <Col lg={12} md={7}>
              <Form.Group md="3" controlId="formBasicAccount">
                <Form.Label>帳號</Form.Label>
                <Form.Control
                  type="username"
                  onChange={handleUsernameChange}
                  value={addUsername}
                  required
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group md="3" controlId="formBasicPassword">
                <Form.Label>密碼</Form.Label>
                <Form.Control
                  type="password"
                  onChange={handlePasswordChange}
                  // placeholder="請輸入密碼"
                  value={addPassword}
                  required
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
            </Col>
            <Row>
              <Col>
                &nbsp;&nbsp;&nbsp;
                <Button variant="outline-primary" type="submit">
                  登入
                </Button>
              </Col>
              <Col style={{ paddingLeft: "0px" }}>
                &nbsp;&nbsp;&nbsp;
                <Button
                  href="/Register"
                  variant="outline-secondary"
                  type="submit"
                >
                  我要註冊
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </Box>
    );
  }
}
