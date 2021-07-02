//npm install axios
//npm i -S mongoose express body-parser morgan cors
//要在package.json加上 "proxy": "http://localhost:3001"
//_id wallet P_Name P_Content P_Image P_Date type capacity ping
import React, { Component } from "react";
import axios from "axios";

export default class App extends Component {
  // 初始化元件的狀態
  state = {
    data: [],
    message: null,
    idToDelete: null,
    idToUpdate: null,
    updateToApply: null,
    intervalIsSet: false,
  };

  componentDidMount() {
    this.getDataFromDb();
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getDataFromDb, 1000);
      this.setState({ intervalIsSet: interval });
    }
  }

  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }

  //查詢
  getDataFromDb = () => {
    fetch("http://localhost:3001/api/AllData")
      .then((data) => data.json())
      .then((res) => this.setState({ data: res.data }));
    console.log(this.state.data);
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
    axios.delete("http://localhost:3001/api/DeleteData", {
      data: {
        id: idTodelete,
      },
    });
  };

  updateDB = (idToUpdate, updateToApply) => {
    axios.post("http://localhost:3001/api/UpdateData", {
      id: idToUpdate,
      update: { message: updateToApply },
    });
  };

  render() {
    const { data } = this.state;
    return (
      <div>
        <ul>
          {data.length <= 0
            ? "NO DB ENTRIES YET"
            : data.map((dat) => (
                <li style={{ padding: "10px" }} key={data.message}>
                  <span style={{ color: "gray" }}> id: </span> {dat._id} <br />
                  <span style={{ color: "gray" }}> wallet: </span>
                  {dat.wallet} <br />
                  <span style={{ color: "gray" }}> P_Name: </span>
                  {dat.P_Name} <br />
                  <span style={{ color: "gray" }}> P_Content: </span>
                  {dat.P_Content} <br />
                  <span style={{ color: "gray" }}> P_Image: </span>
                  {dat.P_Image} <br />
                  <span style={{ color: "gray" }}> P_Date: </span>
                  {dat.P_Date} <br />
                  <span style={{ color: "gray" }}> type: </span>
                  {dat.type} <br />
                  <span style={{ color: "gray" }}> wallcapacityet: </span>
                  {dat.capacity} <br />
                  <span style={{ color: "gray" }}> ping: </span>
                  {dat.ping} <br />
                </li>
              ))}
        </ul>

        {/* 新增 */}
        <div style={{ padding: "10px" }}>
          <input
            type="text"
            onChange={(e) => this.setState({ message: e.target.value })}
            placeholder="add something in the database"
            style={{ width: "200px" }}
          />
          <button onClick={() => this.putDataToDB(this.state.message)}>
            ADD
          </button>
        </div>

        {/* 刪除 */}
        <div style={{ padding: "10px" }}>
          <input
            type="text"
            style={{ width: "200px" }}
            onChange={(e) => this.setState({ idToDelete: e.target.value })}
            placeholder="put id of item to delete here"
          />
          <button onClick={() => this.deleteFromDB(this.state.idToDelete)}>
            DELETE
          </button>
        </div>

        {/* 更新 */}
        <div style={{ padding: "10px" }}>
          <input
            type="text"
            style={{ width: "200px" }}
            onChange={(e) => this.setState({ idToUpdate: e.target.value })}
            placeholder="id of item to update here"
          />
          <input
            type="text"
            style={{ width: "200px" }}
            onChange={(e) => this.setState({ updateToApply: e.target.value })}
            placeholder="put new value of the item here"
          />
          <button
            onClick={() =>
              this.updateDB(this.state.idToUpdate, this.state.updateToApply)
            }
          >
            UPDATE
          </button>
        </div>
      </div>
    );
  }
}
