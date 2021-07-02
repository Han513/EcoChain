import React, { useState } from "react";

import LoginPage from "./Component/LoginPage";

function Login() {
  const [addUsername, setAddUsername] = useState("");
  const [addPassword, setAddPassword] = useState("");

  const handleUsernameChange = (inputValue) => {
    setAddUsername(inputValue);
  };
  const handlePasswordChange = (inputValue) => {
    setAddPassword(inputValue);
  };

  const HandleLoginSubmit = () => {
    console.log(addUsername);
    console.log(addPassword);
    fetch("/login", {
      method: "POST",
      body: JSON.stringify({
        username: addUsername,
        password: addPassword,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) =>
        response.json().then((data) => {
          if (data["message"] === "login success") {
            console.log("loginuser is :" + data["whoisLogin"]);

            console.log(data);
            localStorage.setItem("_id", data["_id"]);
            fetch("/clientlogin", {
              method: "POST",
              body: JSON.stringify({
                userID: localStorage.getItem("_id"),
              }),
            });

            localStorage.setItem("user", data["whoisLogin"]);
            localStorage.setItem("wallet", data["wallet"]);
            localStorage.setItem("email", data["email"]);
            localStorage.setItem("name1", data["name1"]);
            localStorage.setItem("name2", data["name2"]);
            localStorage.setItem("address", data["address"]);
            localStorage.setItem("img", data["img"]);
            localStorage.setItem("phone", data["phone"]);

            localStorage.setItem("log", true);

            alert("登入成功!");
            window.location.href = "http://localhost:3000/HomePage";
          } else if (data["message"] === "Account input error") {
            alert("帳號有誤!");
            window.location.reload();
          } else {
            alert("密碼有誤!");
            window.location.reload();
          }
          console.log(data["message"]);
        })
      )
      .then(() => {
        setAddUsername("");
        setAddPassword("");
      })
      .catch((error) => console.error("Error:", error));
  };
  return (
    <>
      <LoginPage
        addUsername={addUsername}
        addPassword={addPassword}
        onUsernameChange={handleUsernameChange}
        onPasswordChange={handlePasswordChange}
        onLoginSubmit={HandleLoginSubmit}
      />
    </>
  );
}
export default Login;
