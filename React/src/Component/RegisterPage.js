import React, { Component } from "react";
import { Button, Form, Col, Row, InputGroup } from "react-bootstrap";
import { Box } from "@material-ui/core";
import Datepicker from "../Datepicker";
import Scroll from "../Scroll";

export default class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRegisterCorrect: false,
    };
  }
  ShowPassword() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  btclick = () => {
    const {
      setAddPassword,
      setAddEmail,
      setAddAddress,
      setAddPhone,
      setAddBirthday,
    } = this.props;
    var name1 = document.getElementById("name1").value;
    var name2 = document.getElementById("name2").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var phone = document.getElementById("phone").value;
    var birthday = document.getElementById("birthday").value;
    var radios = document.getElementsByName("radio");
    var ispassword = password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30}$/);
    var isemail = email.match(
      /^\w+((-\w+)|(\.\w+))*\@(gmail.com|yahoo.com.tw|aol.com|icloud.com|me.com|mac.com|hey.com|onmail.com|kakao.com|mail.ru|mail2world.com|my.com|memail.com|outlook.com|naver.com|mailo.com|mail.com|qq.com|vip.123.com|nkust.edu.tw|nutc.edu.tw|ntou.edu.tw|ntut.edu.tw|mail.ncku.edu.tw|fcu.edu.tw|mail.cgust.edu.tw|mail.shu.edu.tw|ntunhs.edu.tw|nkfust.edu.tw|ccu.edu.tw|nctu.edu.tw|student.nsysu.edu.tw|nccu.edu.tw)$/
    );
    var isaddress = address.match(/^([\u4E00-\u9FA5]+)(?=.*[0-9]).{9,30}$/);
    var isphone = phone.match(/^09\d{8}$/);

    var today = new Date();
    var mydate = new Date(birthday);
    var infobirthdayValidation = true;
    if (today <= mydate) {
      /*年，其實也可以不用，因為上面有判斷是否小於今天的日期了，所以一定小於2021*/
      infobirthdayValidation = false;
    }
    var issexnull;
    for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
        // do whatever you want with the checked radio
        issexnull = radios[i].value;
        // only one radio can be logically checked, don't check the rest
        break;
      }
    }
    if (
      name1 &&
      name2 &&
      username &&
      ispassword &&
      isemail &&
      isphone &&
      isaddress &&
      birthday !== "" &&
      issexnull !== undefined &&
      infobirthdayValidation === true
    ) {
      this.setState({
        isRegisterCorrect: true,
      });
    } else if (name1 === "") {
      alert("請輸入姓氏");
    } else if (name2 === "") {
      alert("請輸入名字");
    } else if (username === "") {
      alert("請輸入帳號");
    } else if (password === "") {
      alert("請輸入密碼");
    } else if (email === "") {
      alert("請輸入E-mail");
    } else if (address === "") {
      alert("請輸入地址");
    } else if (phone === "") {
      alert("請輸入電話");
    } else if (birthday === "") {
      alert("請輸入出生年月日");
    } else if (issexnull === undefined) {
      alert("請輸入性別");
    } else if (ispassword === null) {
      alert("密碼輸入有誤");
      setAddPassword("");
    } else if (isemail === null) {
      alert("Email輸入有誤");
      setAddEmail("");
    } else if (isaddress === null) {
      alert("地址輸入有誤");
      setAddAddress("");
    } else if (isphone === null) {
      alert("電話輸入有誤");
      setAddPhone("");
    } else if (infobirthdayValidation === false) {
      alert("日期必需小於今天");
      setAddBirthday("");
    }
  };
  render() {
    const {
      addName1,
      addName2,
      addUsername,
      addEmail,
      addPostal,
      addPassword,
      addAddress,
      addPhone,
      addBirthday,
      onName1Change,
      onName2Change,
      onUsernameChange,
      onPasswordChange,
      onEmailChange,
      onPostalChange,
      onLoginSubmit,
      onAddressChange,
      onPhoneChange,
      onBirthdayChange,
      onSexChange,
    } = this.props;
    const handleName1Change = (event) => {
      onName1Change(event.target.value);
    };
    const handleName2Change = (event) => {
      onName2Change(event.target.value);
    };
    const handleUsernameChange = (event) => {
      onUsernameChange(event.target.value);
    };
    const handlePasswordChange = (event) => {
      onPasswordChange(event.target.value);
    };
    const handleEmailChange = (event) => {
      onEmailChange(event.target.value);
    };
    const handlePostalChange = (event) => {
      onPostalChange(event.target.value);
    };
    const handleAddressChange = (event) => {
      onAddressChange(event.target.value);
    };
    const handlePhoneChange = (event) => {
      onPhoneChange(event.target.value);
    };
    const handleBirthdayChange = (event) => {
      onBirthdayChange(event.target.value);
    };
    const handleSexChange = () => {
      var whichsex;
      var radios = document.getElementsByName("radio");
      for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
          // do whatever you want with the checked radio
          whichsex = radios[i].value;
          // only one radio can be logically checked, don't check the rest
          break;
        }
      }
      onSexChange(whichsex);
    };
    const handleLoginSubmit = (event) => {
      event.preventDefault();
      onLoginSubmit();
    };
    const isRegisterCorrect = this.state.isRegisterCorrect;

    return (
      <Box>
        <Scroll showBelow={250} />;
        <Box component="header" style={{ textAlign: "center" }}>
          <h1>註冊頁面</h1>
        </Box>
        <Box
          component="from_1"
          style={{
            justifyContent: "center",
            display: " flex",
            margin: "0 auto",
          }}
        >
          <Row
            style={{
              justifyContent: "center",
              display: " flex",
              margin: "0 auto",
              width: "50%",
            }}
          >
            {/* <h4 style={{ marginBottom: "1rem" }}>帳單地址</h4> */}
            <Form onSubmit={isRegisterCorrect ? handleLoginSubmit : null}>
              <Row lg={8} style={{ justifyContent: "center" }}>
                <Col sm={6} lg={4}>
                  <Form.Group controlId="formBasicName1" noValidate>
                    <Form.Label>姓</Form.Label>
                    <Form.Control
                      type="text"
                      id="name1"
                      placeholder="請輸入姓氏"
                      onChange={handleName1Change}
                      value={addName1}
                      required
                    />
                  </Form.Group>
                </Col>

                <Col sm={6} lg={4}>
                  <Form.Group controlId="formBasicName2" noValidate>
                    <Form.Label>名</Form.Label>
                    <Form.Control
                      type="text"
                      id="name2"
                      placeholder="請輸入名字"
                      onChange={handleName2Change}
                      value={addName2}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col lg={8} md={6}>
                  <Form.Group controlId="formBasicUserName" srOnly>
                    <Form.Label>帳號</Form.Label>

                    <InputGroup className="mb-2 mr-sm-2">
                      <InputGroup.Prepend>
                        <InputGroup.Text>@</InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        type="text"
                        id="username"
                        placeholder="請輸入帳號"
                        onChange={handleUsernameChange}
                        value={addUsername}
                        required
                      />
                    </InputGroup>
                  </Form.Group>
                </Col>
                <Col lg={8} md={6}>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>密碼</Form.Label>
                    <Row>
                      <Col>
                        <Form.Control
                          id="password"
                          type="password"
                          onChange={handlePasswordChange}
                          placeholder="請輸入密碼"
                          value={addPassword}
                          required
                        />
                      </Col>
                      <Col>
                        <button
                          type="button"
                          class="btn btn-secondary btn-sm disabled"
                          aria-disabled="true"
                          onClick={() => this.ShowPassword()}
                        >
                          顯示密碼
                        </button>
                      </Col>
                    </Row>

                    <Form.Text className="text-muted">
                      輸入介於8-30字並且包含一個英文大寫
                    </Form.Text>
                  </Form.Group>
                </Col>
                <Col lg={8} md={6}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>E-mail</Form.Label>

                    <Form.Control
                      id="email"
                      type="text"
                      onChange={handleEmailChange}
                      value={addEmail}
                      placeholder="請輸入E-mail"
                      required
                    />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>
                </Col>
                <Col lg={8} md={4}>
                  <Form.Group controlId="formBasicAddress">
                    <Row>
                      <Col lg={3} md={2}>
                        <Form.Label>郵遞區號</Form.Label>

                        <Form.Control
                          id="postal"
                          type="text"
                          onChange={handlePostalChange}
                          value={addPostal}
                          placeholder="郵遞區號"
                          required
                        />
                        <Form.Text className="text-muted">例如: 811</Form.Text>
                      </Col>
                      <Col>
                        <Form.Label>Address</Form.Label>

                        <Form.Control
                          id="address"
                          type="text"
                          onChange={handleAddressChange}
                          value={addAddress}
                          placeholder="請輸入地址"
                          required
                        />
                      </Col>
                    </Row>
                  </Form.Group>
                </Col>
                <Col lg={5} md={4}>
                  <Form.Group controlId="formBasicPhone">
                    <Form.Label>Phone</Form.Label>

                    <Form.Control
                      id="phone"
                      type="text"
                      onChange={handlePhoneChange}
                      value={addPhone}
                      placeholder="請輸入手機號碼"
                      required
                    />

                    <Form.Text className="text-muted"></Form.Text>
                  </Form.Group>
                </Col>
                <Col lg={3} md={4}>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>出生年月日</Form.Label>
                    <Datepicker
                      addBirthday={addBirthday}
                      handleBirthdayChange={handleBirthdayChange}
                    />
                  </Form.Group>
                </Col>
                <Col md={2} lg={8}>
                  <Form.Group>
                    <Form.Label>性別</Form.Label>
                    <Row style={{ justifyContent: "start" }}>
                      <Col lg={2}>
                        <Form.Check
                          type="radio"
                          label="男"
                          name="radio"
                          id="man"
                          onChange={handleSexChange}
                          value={"男"}
                        />
                      </Col>
                      <Col lg={2}>
                        <Form.Check
                          type="radio"
                          label="女"
                          name="radio"
                          id="women"
                          onChange={handleSexChange}
                          value={"女"}
                        />
                      </Col>
                    </Row>
                  </Form.Group>
                </Col>
                <Col lg={8}>
                  <Form.Group>
                    <Button
                      variant="outline-primary"
                      type="submit"
                      onClick={() => this.btclick()}
                    >
                      註冊
                    </Button>
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Row>
        </Box>
      </Box>
    );
  }
}
