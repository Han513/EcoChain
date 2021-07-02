import React from "react";
import { Nav } from "react-bootstrap";
import { withRouter } from "react-router";
import "./Profile.css";
import PictureUpload from "./PictureUpload";

const handleFetch = () => {
  fetch("/clientlogout", {
    method: "POST",
    body: JSON.stringify({
      userID: localStorage.getItem("_id"),
    }),
  });
  localStorage.setItem("log", false);
  localStorage.clear("user");
  alert("已登出");
  window.location.href = "http://localhost:3000/HomePage";
};
const Side = (props) => {
  return (
    <Nav
      justify
      fill
      className="col-md-12 d-none d-md-block bg-light sidebar"
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <PictureUpload img={props.img} />
      <Nav.Item>
        <button
          class="btn btn-outline-dark"
          type="button"
          style={{ margin: "10px" }}
          onClick={props.clicktoprofile}
        >
          個人資料
        </button>
      </Nav.Item>
      <Nav.Item>
        <button
          class="btn btn-outline-dark"
          type="button"
          style={{ margin: "10px" }}
          onClick={props.clicktomyproject}
        >
          我的方案
        </button>
      </Nav.Item>
      <Nav.Item>
        <button
          class="btn btn-outline-dark"
          type="button"
          style={{ margin: "10px" }}
          onClick={props.clicktosearch}
        >
          購買紀錄
        </button>
      </Nav.Item>
      <Nav.Item>
        <button
          class="btn btn-outline-dark"
          type="button"
          style={{ margin: "10px" }}
          onClick={props.clicktolikeproject}
        >
          我的珍藏
        </button>
      </Nav.Item>

      <Nav.Item>
        <button
          class="btn btn-outline-secondary"
          type="button"
          style={{ marginTop: "270px" }}
          onClick={handleFetch}
        >
          登出
        </button>
      </Nav.Item>
    </Nav>
  );
};
const Sidebar = withRouter(Side);
export default Sidebar;
