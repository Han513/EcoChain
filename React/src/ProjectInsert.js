import React, { useState } from "react";
import ProjectInsertPage from "./Component/ProjectInsertPage";

function ProjectInsert() {
  const [addP_Name, setAddP_Name] = useState("");
  const [addP_Content1, setAddP_Content1] = useState("");
  const [addP_Content2, setAddP_Content2] = useState("");
  const [addP_Image, setAddP_Image] = useState("");
  const [addP_ContentImage, setAddP_ContentImage] = useState("");
  const [addP_Address, setAddP_Address] = useState("");
  const [addType, setAddType] = useState("");
  const [addCapacity, setAddCapacity] = useState("");
  const [addPrice, setAddPrice] = useState("");
  const [addPostal, setAddPostal] = useState("");

  const handleNameChange = (inputValue) => {
    setAddP_Name(inputValue);
  };
  const handleP_Content1Change = (inputValue) => {
    setAddP_Content1(inputValue);
  };
  const handleP_Content2Change = (inputValue) => {
    setAddP_Content2(inputValue);
  };
  const handleP_ImageChange = (inputValue) => {
    setAddP_Image(inputValue);
  };
  const handleP_ContentImageChange = (inputValue) => {
    setAddP_ContentImage(inputValue);
  };
  const handleP_AddressChange = (inputValue) => {
    setAddP_Address(inputValue);
  };
  const handleTypeChange = (inputValue) => {
    setAddType(inputValue);
  };
  const handleCapacityChange = (inputValue) => {
    setAddCapacity(inputValue);
  };
  const handlePriceChange = (inputValue) => {
    setAddPrice(inputValue);
  };
  const handlePostalChange = (inputValue) => {
    setAddPostal(inputValue);
  };
  const handleInsertSubmit = () => {
    console.log(addP_Image);
    console.log(addP_ContentImage);
    let wallet = localStorage.getItem("wallet");
    let username = localStorage.getItem("user");
    let date = new Date();
    fetch("/InsertProject", {
      method: "POST",
      body: JSON.stringify({
        wallet: wallet,
        P_Name: addP_Name,
        P_Address: addP_Address,
        P_Content1: addP_Content1,
        P_Content2: addP_Content2,
        P_Image: addP_Image,
        P_ContentImage: addP_ContentImage,
        postal: addPostal,
        P_Date: date,
        type: addType,
        capacity: addCapacity,
        ping: 0,
        price: addPrice,
        username: username,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) =>
        response.json().then((data) => {
          console.log(data["message"]);
          if (data["message"] === "insert success") {
            alert("新增成功!");
            window.location.href = "http://localhost:3000/Profile";
          } else if (data["message"] === "That P_Name already exist") {
            alert("新增失敗! 標題已存在");
            setAddP_Name("");
          } else if (data["message"] === "The address is wrong") {
            alert("地址或郵遞區號輸入錯誤");
            setAddP_Address("");
            setAddPostal("");
          }
        })
      )
      .catch((error) => console.error("Error:", error))
      .then((response) => {
        console.log("Success:", response);
      });
  };
  return (
    <>
      <ProjectInsertPage
        setAddP_Address={setAddP_Address}
        setAddCapacity={setAddCapacity}
        setAddPrice={setAddPrice}
        setAddPostal={setAddPostal}
        addP_Name={addP_Name}
        addP_Content1={addP_Content1}
        addP_Content2={addP_Content2}
        addP_Image={addP_Image}
        addP_ContentImage={addP_ContentImage}
        addType={addType}
        addCapacity={addCapacity}
        addPrice={addPrice}
        addpostal={addPostal}
        addP_Address={addP_Address}
        onNameChange={handleNameChange}
        onP_Content1Change={handleP_Content1Change}
        onP_Content2Change={handleP_Content2Change}
        onP_ImageChange={handleP_ImageChange}
        onP_ContentImageChange={handleP_ContentImageChange}
        onP_AddressChange={handleP_AddressChange}
        onTypeChange={handleTypeChange}
        onCapacityChange={handleCapacityChange}
        onPriceChange={handlePriceChange}
        onPostalChange={handlePostalChange}
        onInsertSubmit={handleInsertSubmit}
      />
    </>
  );
}
export default ProjectInsert;
