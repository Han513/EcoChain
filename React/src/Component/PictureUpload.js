// 僅測試上傳圖片功能用，但是沒有甚麼用
import React, { Component } from "react";
import firebase from "firebase";

export default class PictureUpload extends Component {
  state = {
    selectedFile: null,
  };

  fileSelect = (event) => {
    this.setState({
      selectedFile: event.target.files[0],
    });
    var reader = new FileReader();
    reader.onload = () => {
      document.getElementById("image").src = reader.result;
      this.setState({
        img: reader.result,
      });
    };

    reader.readAsDataURL(event.target.files[0]);
  };

  uploadImage = () => {
    const { selectedFile } = this.state;
    if (selectedFile === null) {
      alert("上傳照片後在點擊上傳");
    } else {
      const ref = firebase.storage().ref();
      const file = selectedFile;
      const name = new Date() + "-" + file.name;
      const metadata = {
        contentType: file.type,
      };
      const task = ref.child(name).put(file, metadata);
      var user = localStorage.getItem("user");
      console.log(user);

      task.on("state_changed", (snapshot) => {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        document.getElementById("upprogress").innerHTML =
          "Upload progress " + progress + " %";
      });

      task
        .then((data) => data.ref.getDownloadURL())
        .then((url) => {
          console.log(url);
          fetch("/updatecustomerimage", {
            headers: {
              version: 1,
              "content-type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({
              username: user,
              image: url,
            }),
          });

          alert("image upload success");
          const image = document.getElementById("image");
          image.src = url;
          window.location.reload();
        })
        .catch((error) => {
          alert("error in saving the image");
        });
    }
  };

  render() {
    var img = localStorage.getItem("img");
    return (
      <div>
        <div>
          <input
            style={{ display: "none" }}
            type="file"
            onChange={this.fileSelect}
            ref={(fileInput) => (this.fileInput = fileInput)}
          />
          <img
            style={{ width: "60%" }}
            id="image"
            src={img}
            onClick={() => this.fileInput.click()}
          ></img>
          <label id="upprogress"></label>
        </div>
        <br />
        <script src="https://www.gstatic.com/firebasejs/8.6.1/firebase-app.js"></script>
        <script src="https://www.gstatic.com/firebasejs/8.6.1/firebase-storage.js"></script>
        <button onClick={this.uploadImage} style={{ marginBottom: "20px" }}>
          {" "}
          Upload{" "}
        </button>
      </div>
    );
  }
}
