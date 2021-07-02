import React, { useState } from "react";
import RegisterPage from "./Component/RegisterPage";

function Register() {
  const [addName1, setAddName1] = useState("");
  const [addName2, setAddName2] = useState("");
  const [addUsername, setAddUsername] = useState("");
  const [addPassword, setAddPassword] = useState("");
  const [addEmail, setAddEmail] = useState("");
  const [addPostal, setAddPostal] = useState("");
  const [addAddress, setAddAddress] = useState("");
  const [addPhone, setAddPhone] = useState("");
  const [addBirthday, setAddBirthday] = useState("");
  const [addSex, setAddSex] = useState("");

  const handleName1Change = (inputValue) => {
    setAddName1(inputValue);
  };
  const handleName2Change = (inputValue) => {
    setAddName2(inputValue);
  };
  const handleUsernameChange = (inputValue) => {
    setAddUsername(inputValue);
  };
  const handlePasswordChange = (inputValue) => {
    setAddPassword(inputValue);
  };
  const handleEmailChange = (inputValue) => {
    setAddEmail(inputValue);
  };
  const handlePostalChange = (inputValue) => {
    setAddPostal(inputValue);
  };
  const handleAddressChange = (inputValue) => {
    setAddAddress(inputValue);
  };
  const handlePhoneChange = (inputValue) => {
    setAddPhone(inputValue);
  };
  const handleBirthdayChange = (inputValue) => {
    setAddBirthday(inputValue);
  };
  const handleSexChange = (inputValue) => {
    setAddSex(inputValue);
  };

  const handleLoginSubmit = () => {
    fetch("/register", {
      method: "POST",
      body: JSON.stringify({
        name1: addName1,
        name2: addName2,
        username: addUsername,
        password: addPassword,
        email: addEmail,
        postal: addPostal,
        address: addAddress,
        phone: addPhone,
        birthday: addBirthday,
        sex: addSex,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) =>
        response.json().then((data) => {
          console.log(data["message"]);
          if (data["message"] === "insert success") {
            alert("註冊成功!");
            window.history.go(-1);
          } else if (data["message"] === "That username already exists") {
            alert("註冊失敗! 帳號已存在");
            setAddUsername("");
          } else if (data["message"] === "That email already exists") {
            alert("註冊失敗! Email已經被註冊過");
            setAddEmail("");
          } else if (data["message"] === "The address is wrong") {
            alert("地址輸入錯誤");
            setAddAddress("");
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
      <RegisterPage
        setAddPassword={setAddPassword}
        setAddEmail={setAddEmail}
        setAddAddress={setAddAddress}
        setAddPhone={setAddPhone}
        setAddBirthday={setAddBirthday}
        addName1={addName1}
        addName2={addName2}
        addUsername={addUsername}
        addPassword={addPassword}
        addEmail={addEmail}
        addPostal={addPostal}
        addAddress={addAddress}
        addPhone={addPhone}
        addBirthday={addBirthday}
        addSex={addSex}
        onName1Change={handleName1Change}
        onName2Change={handleName2Change}
        onUsernameChange={handleUsernameChange}
        onPasswordChange={handlePasswordChange}
        onEmailChange={handleEmailChange}
        onPostalChange={handlePostalChange}
        onAddressChange={handleAddressChange}
        onPhoneChange={handlePhoneChange}
        onBirthdayChange={handleBirthdayChange}
        onSexChange={handleSexChange}
        onLoginSubmit={handleLoginSubmit}
      />
    </>
  );
}
export default Register;
