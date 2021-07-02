import React, { Component } from "react";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import firebase from "firebase";

export default class ProjectInsertPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isInsertCorrect: false,
      selectedFile: [],
      selectedProjectImg: [],
    };
  }

  fileSelect = (event) => {
    var files = event.target.files;
    console.log(files);
    this.setState({
      selectedFile: event.target.files,
    });

    for (let i = 0; i < files.length; i++) {
      var file = files[i];
      var reader = new FileReader();
      reader.readAsDataURL(file);
    }
  };

  ProjectImgSelect = (event) => {
    var files = event.target.files;
    console.log(files);
    if (files.length > 0) {
      this.setState({
        selectedProjectImg: event.target.files[0],
      });
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);
    }
  };

  btclick = () => {
    const { selectedFile, selectedProjectImg } = this.state;
    const { onP_ContentImageChange, onP_ImageChange } = this.props;
    var imageurl = [];

    if (selectedFile.length !== 0 && selectedProjectImg.length !== 0) {
      const ref = firebase.storage().ref();
      const projectfile = selectedProjectImg;
      const projectname = new Date() + "-" + projectfile.name;
      const projectmetadata = {
        contentType: projectfile.type,
      };
      if (
        projectmetadata.contentType === "image/jpeg" ||
        projectmetadata.contentType === "image/png" ||
        projectmetadata.contentType === "image/jpg"
      ) {
        const projecttask = ref
          .child(projectname)
          .put(projectfile, projectmetadata);
        projecttask
          .then((data) => data.ref.getDownloadURL())
          .then((url) => {
            onP_ImageChange(url);
          });
        projecttask.on("state_changed", (snapshot) => {
          var progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          document.getElementById("upprogress1").innerHTML =
            "Upload progress " + progress + " %";
        });
      } else {
        alert("圖片必須為圖片檔");
      }

      for (var i = 0; i < selectedFile.length; i++) {
        const file = selectedFile[i];
        const name = new Date() + "-" + selectedFile[i].name;
        const metadata = {
          contentType: selectedFile[i].type,
        };
        console.log(metadata.contentType);
        if (
          metadata.contentType === "image/jpeg" ||
          metadata.contentType === "image/png" ||
          metadata.contentType === "image/jpg"
        ) {
          const task = ref.child(name).put(file, metadata);
          task
            .then((data) => data.ref.getDownloadURL())
            .then((url) => {
              imageurl.push(url);
              console.log(imageurl);
              onP_ContentImageChange(imageurl);
            });
          task.on("state_changed", (snapshot) => {
            var progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            document.getElementById("upprogress2").innerHTML =
              "Upload progress " + progress + " %";
          });
        } else {
          alert("圖片必須為圖片檔");
          break;
        }
      }
    }

    const { setAddP_Address, setAddCapacity, setAddPrice, setAddPostal } =
      this.props;
    var P_Name = document.getElementById("P_Name").value;
    var P_Address = document.getElementById("P_Address").value;
    var type = document.getElementsByName("formRadios");
    var capacity = document.getElementById("Capacity").value;
    var price = document.getElementById("Price").value;
    var postal = document.getElementById("Postal").value;
    var P_Image = document.getElementById("P_Image").value;
    var P_ContentImage = document.getElementById("P_ContentImage").value;
    var P_Content1 = document.getElementById("P_Content1").value;
    var P_Content2 = document.getElementById("P_Content2").value;

    var isaddress = P_Address.match(/^([\u4E00-\u9FA5]+)(?=.*[0-9]).{9,30}$/);
    let isC = true,
      isP = true;
    if (capacity <= 0) {
      isC = false;
    } else if (price <= 0) {
      isP = false;
    } else if (price > 0) {
      isP = true;
    } else if (capacity > 0) {
      isP = true;
    }
    let isPostal = true;

    if (postal.length !== 3) {
      isPostal = false;
    } else {
      isPostal = true;
    }
    var istype;

    for (let i = 0, length = type.length; i < length; i++) {
      if (type[i].checked) {
        // do whatever you want with the checked radio
        istype = type[i].value;
        // only one radio can be logically checked, don't check the rest
        break;
      }
    }

    if (
      P_Content1 &&
      P_Content2 &&
      P_Address &&
      P_Name &&
      postal &&
      P_Image &&
      P_ContentImage &&
      capacity &&
      price &&
      isaddress &&
      isPostal !== false &&
      isC !== false &&
      isP !== false &&
      istype !== undefined
    ) {
      this.setState((preState) => ({
        isInsertCorrect: true,
      }));
    } else if (P_Name === "") {
      alert("請填入標題");
      this.setState((preState) => ({
        isInsertCorrect: false,
      }));
    } else if (postal === "") {
      alert("請輸入郵遞區號");
      this.setState((preState) => ({
        isInsertCorrect: false,
      }));
    } else if (isPostal === false) {
      setAddPostal("");
      alert("郵遞區號均為三碼");
      this.setState((preState) => ({
        isInsertCorrect: false,
      }));
    } else if (P_Address === "") {
      alert("請輸入地址");
      this.setState((preState) => ({
        isInsertCorrect: false,
      }));
    } else if (selectedFile.length === 0 || selectedProjectImg.length === 0) {
      alert("請上傳照片");
      this.setState((preState) => ({
        isInsertCorrect: false,
      }));
    } else if (isaddress === null) {
      alert("地址輸入有誤");
      setAddP_Address("");
      this.setState((preState) => ({
        isInsertCorrect: false,
      }));
    } else if (istype === undefined) {
      alert("請選擇電能類型");
      this.setState((preState) => ({
        isInsertCorrect: false,
      }));
    } else if (capacity === "") {
      alert("提供電量尚未填入");
      this.setState((preState) => ({
        isInsertCorrect: false,
      }));
    } else if (isC === false) {
      setAddCapacity(0);
      alert("不能為負數或0");
      this.setState((preState) => ({
        isInsertCorrect: false,
      }));
    } else if (price === "") {
      alert("價格尚未填入");
    } else if (isP === false) {
      setAddPrice(0);
      alert("不能為負數或0");
      this.setState((preState) => ({
        isInsertCorrect: false,
      }));
    } else if (P_Image === "") {
      alert("方案照片尚未選擇");
    } else if (P_ContentImage === "") {
      alert("內容照片尚未選擇");
    } else if (P_Content1 === "") {
      alert("請填入內容1");
    } else if (P_Content2 === "") {
      alert("請填入內容2");
    }
  };

  render() {
    const {
      addP_Name,
      addP_Content1,
      addP_Content2,
      // addP_Image,
      // addP_ContentImage,
      addPostal,
      addCapacity,
      addPrice,
      addP_Address,
      onNameChange,
      onP_Content1Change,
      onP_Content2Change,
      onP_AddressChange,
      onTypeChange,
      onCapacityChange,
      onPriceChange,
      onPostalChange,
      onInsertSubmit,
    } = this.props;

    const handleNameChange = (event) => {
      onNameChange(event.target.value);
    };
    const handleP_Content1Change = (event) => {
      onP_Content1Change(event.target.value);
    };
    const handleP_Content2Change = (event) => {
      onP_Content2Change(event.target.value);
    };
    const handleP_AddressChange = (event) => {
      onP_AddressChange(event.target.value);
    };
    const handleCapacityChange = (event) => {
      onCapacityChange(event.target.value);
    };
    const handlePriceChange = (event) => {
      onPriceChange(event.target.value);
    };
    const handlePostalChange = (event) => {
      onPostalChange(event.target.value);
    };

    const handleTypeChange = () => {
      var whichType;
      var radios = document.getElementsByName("formRadios");
      for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
          // do whatever you want with the checked radio
          whichType = radios[i].id;
          // only one radio can be logically checked, don't check the rest
          break;
        }
      }
      onTypeChange(whichType);
    };
    const handleInsertSubmit = (event) => {
      event.preventDefault();
      onInsertSubmit();
    };
    const isInsertCorrect = this.state.isInsertCorrect;
    return (
      <Container>
        <Form onSubmit={isInsertCorrect ? handleInsertSubmit : null}>
          <Form.Group className="mb-3" noValidate>
            <Form.Label>標題</Form.Label>
            <Form.Control
              type="text"
              placeholder="標題"
              id="P_Name"
              value={addP_Name}
              onChange={handleNameChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>方案地址</Form.Label>
            <Row>
              <Col lg={2}>
                <Form.Control
                  id="Postal"
                  type="text"
                  onChange={handlePostalChange}
                  value={addPostal}
                  placeholder="郵遞區號"
                  required
                />
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  id="P_Address"
                  placeholder="XX市XX路XX號"
                  value={addP_Address}
                  onChange={handleP_AddressChange}
                />
              </Col>
            </Row>
          </Form.Group>
          <fieldset>
            <Form.Group as={Row} className="mb-3">
              <Form.Label as="legend" column sm={2}>
                方案類型
              </Form.Label>

              <Form.Check
                type="radio"
                label="sun"
                name="formRadios"
                id="sun"
                onChange={handleTypeChange}
              />
              <Form.Check
                type="radio"
                label="wind"
                name="formRadios"
                id="wind"
                onChange={handleTypeChange}
              />
              <Form.Check
                type="radio"
                label="water"
                name="formRadios"
                id="water"
                onChange={handleTypeChange}
              />
            </Form.Group>
          </fieldset>
          <Form.Group className="mb-3">
            <Form.Label>可供購買的電量</Form.Label>
            <Form.Control
              id="Capacity"
              type="value"
              value={addCapacity}
              onChange={handleCapacityChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Price(每度)</Form.Label>
            <Form.Control
              id="Price"
              type="number"
              value={addPrice}
              onChange={handlePriceChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="P_Image" className="mb-3">
            <Form.Label>方案照片</Form.Label>
            <Form.Control type="file" onChange={this.ProjectImgSelect} />
            <label id="upprogress1"></label>
          </Form.Group>
          <Form.Group controlId="P_ContentImage" className="mb-3">
            <Form.Label>內容照片(第一張會是方案裡面的首張照片)</Form.Label>
            <Form.Control type="file" onChange={this.fileSelect} multiple />
            <label id="upprogress2"></label>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>內容content1</Form.Label>
            <Form.Control
              id="P_Content1"
              as="textarea"
              rows={5}
              value={addP_Content1}
              onChange={handleP_Content1Change}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>內容content2</Form.Label>
            <Form.Control
              id="P_Content2"
              as="textarea"
              rows={5}
              value={addP_Content2}
              onChange={handleP_Content2Change}
              required
            />
          </Form.Group>
          <Form.Group>
            {isInsertCorrect ? (
              <Button
                style={{ margin: "10px" }}
                variant="outline-primary"
                type="sumbit"
              >
                新增此方案
              </Button>
            ) : (
              <div></div>
            )}

            <Button
              variant="outline-primary"
              type="button"
              onClick={() => this.btclick()}
            >
              驗證
            </Button>
          </Form.Group>
        </Form>
      </Container>
    );
  }
}
