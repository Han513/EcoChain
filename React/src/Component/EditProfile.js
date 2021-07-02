import React, { Component } from "react";
import axios from "axios";
import "./EditProfile.css";
import "./EditProfileButton.scss";
import { Row, Col, Form, Container } from "react-bootstrap";

import Datepicker from "../Datepicker";

export default class EditProfile extends Component {
  // 初始化元件的狀態
  constructor() {
    super();
    this.state = {
      data: [],
      id: 0,
      message: null,
      intervalIsSet: false,
      idToDelete: null,
      idToUpdate: null,
      objectToUpdate: null,
    };
  }
  componentDidMount() {
    this.getDataFromDb();
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getDataFromDb, 200000);
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
      if (dat._id === idToUpdate) {
        objIdToUpdate = dat._id;
      }
    });
    axios.post("http://localhost:3002/api/UpdateData", {
      id: objIdToUpdate,
      update: {
        name1: Object.values(updateToApply)[0],
        name2: Object.values(updateToApply)[1],
        email: Object.values(updateToApply)[2],
        address: Object.values(updateToApply)[3],
        phone: Object.values(updateToApply)[4],
        birthday: Object.values(updateToApply)[5],
        sex: Object.values(updateToApply)[6],
      },
    });
  };

  handleSubmit = (id) => {
    var name1 = document.getElementById("name1").value;
    var name2 = document.getElementById("name2").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var phone = document.getElementById("phone").value;
    var birthday = document.getElementById("birthday").value;
    var radios = document.getElementsByName("radio");
    var whichsex;
    for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
        // do whatever you want with the checked radio
        whichsex = radios[i].value;
        // only one radio can be logically checked, don't check the rest
        break;
      }
    }
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
    if (
      name1 &&
      name2 &&
      isemail &&
      isphone &&
      isaddress &&
      infobirthdayValidation === true
    ) {
      this.updateDB(id, {
        name1: name1,
        name2: name2,
        email: email,
        address: address,
        phone: phone,
        birthday: birthday,
        sex: whichsex,
      });
    } else if (name1 === "") {
      alert("請輸入姓氏");
    } else if (name2 === "") {
      alert("請輸入名字");
    } else if (email === "") {
      alert("請輸入E-mail");
    } else if (address === "") {
      alert("請輸入地址");
    } else if (phone === "") {
      alert("請輸入電話");
    } else if (birthday === "") {
      alert("請輸入出生年月日");
    } else if (isemail === null) {
      alert("Email輸入有誤");
    } else if (isaddress === null) {
      alert("地址輸入有誤");
    } else if (isphone === null) {
      alert("電話輸入有誤");
    }
    alert("更新成功");
    window.location.href = "http://localhost:3000/Profile";
  };

  render() {
    const { data } = this.state;
    var user = localStorage.getItem("user");
    const datas = data.filter((dat) => {
      return dat.username === user;
    });
    let man = datas.map((item) => (item.sex === "男" ? true : false));
    let women = datas.map((item) => (item.sex === "女" ? true : false));

    return (
      //   <Container>
      datas.map((dat) => (
        <Container>
          <div className="title">個人資料編輯</div>
          <div
            style={{
              width: "100%",
              alignSelf: "center",
              textAlign: "center",
            }}
          >
            <form>
              {/* 姓 */}
              <div class="omrs-input-group">
                <label class="omrs-input-underlined">
                  <input
                    id="name1"
                    type="text"
                    name="name1"
                    // value={dat.name1}
                    placeholder={dat.name1}
                    required
                  />
                  <span class="omrs-input-label">姓</span>
                </label>
              </div>
              {/* 名 */}
              <div class="omrs-input-group">
                <label class="omrs-input-underlined">
                  <input
                    id="name2"
                    tpye="text"
                    name="name2"
                    // value={dat.name2}
                    placeholder={dat.name2}
                    required
                  />
                  <span class="omrs-input-label">名</span>
                </label>
              </div>
              {/* E-mail */}
              <div class="omrs-input-group">
                <label class="omrs-input-underlined">
                  <input
                    id="email"
                    name="email"
                    // value={dat.email}
                    placeholder={dat.email}
                    required
                  />
                  <span class="omrs-input-label">E-mail</span>
                </label>
              </div>
              {/* 地址 */}
              <div class="omrs-input-group">
                <label class="omrs-input-underlined">
                  <input
                    id="address"
                    name="address"
                    // value={dat.address}
                    placeholder={dat.address}
                    required
                  />
                  <span class="omrs-input-label">地址</span>
                </label>
              </div>
              {/* 電話 */}
              <div class="omrs-input-group">
                <label class="omrs-input-underlined">
                  <input
                    id="phone"
                    name="phone"
                    // value={dat.phone}
                    placeholder={dat.phone}
                    required
                  />
                  <span class="omrs-input-label">電話</span>
                </label>
              </div>
              {/* 生日 */}
              <div class="omrs-input-group">
                <label class="omrs-input-underlined">
                  <Datepicker
                    date={dat.birthday}
                    // addBirthday={addBirthday}
                    // handleBirthdayChange={handleBirthdayChange}
                  />
                  <span class="omrs-input-label">生日</span>
                </label>
              </div>
              {/* 性別 */}
              <div class="omrs-input-group">
                <label class="omrs-input-underlined">
                  <Col md={2} lg={8}>
                    <Row style={{}}>
                      <Col lg={10}>
                        <Form.Check
                          type="radio"
                          label="男"
                          name="radio"
                          id="man"
                          value={"男"}
                          defaultChecked={man[0]}
                        />
                      </Col>
                      <Col lg={2}>
                        <Form.Check
                          type="radio"
                          label="女"
                          name="radio"
                          id="women"
                          value={"女"}
                          defaultChecked={women[0]}
                        />
                      </Col>
                    </Row>
                  </Col>
                  <span class="omrs-input-label">性別</span>
                </label>
              </div>
              <button
                id="submit"
                class="button"
                onClick={() => this.handleSubmit(dat._id)}
              >
                送出
              </button>
              {/* <div id="loader" class={loader}>
                <div id="check" class={check}>
                  <span class="check-one"></span>
                  <span class="check-two"></span>
                </div>
              </div> */}
            </form>
          </div>
        </Container>
      ))
    );
  }
}

{
  /* <Row>
          <Col>
            {data.length <= 0
              ? "NO DB ENTRIES YET"
              : datas.map((dat) => (
                  <li style={{ padding: "10px" }} key={data.message}>
                    錢包位址: <input type="text" placeholder={dat.wallet} /> 
                    <br />
                    姓: <input type="text" placeholder={dat.name1} />
                    <br />
                    名: <input type="text" placeholder={dat.name2} />
                    <br />
                    帳號: <input type="text" placeholder={dat.username} />
                    <br />
                    密碼: <input type="text" placeholder={dat.password} />
                    <br />
                    E-mail: <input type="text" placeholder={dat.email} />
                    <br />
                    地址: <input type="text" placeholder={dat.address} />
                    <br />
                    電話: <input type="text" placeholder={dat.birthday} />
                    <br />
                    生日: <input type="text" placeholder={dat.name1} />
                    <br />
                    性別: <input type="text" placeholder={dat.sex} />
                    <br />
                  </li>
                ))}
          </Col>
        </Row> */
}
{
  /* </Container> */
}
