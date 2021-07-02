import React, { useState } from "react";
import cx from "clsx";

import { useParams, useLocation } from "react-router-dom";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  CardHeader,
  Avatar,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogContentText,
  DialogActions,
  InputAdornment,
  Input,
  Button,
  TextField,
  Slide,
} from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { Container, Row, Col, Image } from "react-bootstrap";
import "./Pcss.css";
import { BsLightning } from "react-icons/bs";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function Pcontent(props) {
  const { _id } = useParams();
  let location = useLocation();
  console.log(location);
  //會員資料
  var user = localStorage.getItem("user");

  var email = localStorage.getItem("email");
  var name1 = localStorage.getItem("name1");
  var name2 = localStorage.getItem("name2");
  var address = localStorage.getItem("address");

  var phone = localStorage.getItem("phone");
  var userID = localStorage.getItem("_id");

  //電以及登入
  var Capacity = localStorage.getItem("deC");
  var log = localStorage.getItem("log");
  const {
    P_Name,
    P_Content1,
    P_Content2,
    wallet,
    price,
    P_Image,
    P_ContentImage,
  } = location.state;

  const [open, setOpen] = useState(false);
  const [opene, setOpene] = useState(false);
  const [showdisplay, setshowdisplay] = useState(false);
  const [Ca, setCa] = useState(Capacity);
  const [Radio1, setRadio1] = React.useState("1年");
  const total = price * Ca + 10;
  const [diaopen, setdiaOpen] = useState(false);
  const [open1, setOpen1] = useState(true);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [rightAddress, setAddress] = useState(address);
  const handleDeal = () => {
    if (log === "true") {
      setshowdisplay(!showdisplay);
    } else {
      alert("請先登入會員");
      window.location.href = "http://localhost:3000/Login";
    }
  };
  const handleFetch = () => {
    fetch("/email", {
      method: "POST",
      body: JSON.stringify({
        sender: userID,
        recipient: wallet,
        amount: total,
        Ca: Ca,
      }),
    });
    // fetch("/transactions/new", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     sender: userWallet,
    //     recipient: wallet,
    //     amount: total,
    //   }),
    // });
    alert("交易成功 請前往確認信箱");

    window.location.href = "http://localhost:3000/Project";
  };
  const AcStyle = { width: "80%", padding: "10px", marginBottom: "10px" };
  const handleClickOpen = () => {
    setdiaOpen(true);
  };

  const handleClose = () => {
    setdiaOpen(false);
  };
  const handleChange = () => {
    let raddress = document.getElementById("address").value;
    let isaddress = raddress.match(/^([\u4E00-\u9FA5]+)(?=.*[0-9]).{9,30}$/);
    if (isaddress) {
      setAddress(document.getElementById("address").value);
      setdiaOpen(false);
    } else {
      alert("請輸出正確地址");
      setdiaOpen(false);
    }
  };
  return (
    <Box>
      {/* <Box component="header">I'm header</Box> */}
      <Box>
        <Row>
          <Col lg={8} className="PC1">
            {showdisplay === false ? (
              <Container>
                尚未交易
                <div style={{ textAlign: "center" }}>
                  <h2>{P_Name}</h2>
                </div>
                <div style={{ textAlign: "center" }}>
                  <img
                    style={{
                      maxWidth: "50%",
                      marginBottom: "30px",
                      marginTop: "15px",
                      borderRadius: "10px",
                    }}
                    src={P_ContentImage[0]}
                  ></img>
                </div>
                <h5 className="pf">{P_Content1}</h5>
                <div style={{ textAlign: "center" }}>
                  <img
                    style={{
                      maxWidth: "40%",
                      marginBottom: "15px",
                      marginRight: "20px",
                      marginTop: "15px",
                    }}
                    src={P_ContentImage[1]}
                  ></img>
                  <img
                    style={{
                      maxWidth: "40%",
                      marginBottom: "15px",
                      marginTop: "15px",
                    }}
                    src={P_ContentImage[2]}
                  ></img>
                </div>
                <br />
                <h5 className="pf">{P_Content2}</h5>
              </Container>
            ) : (
              <Container>
                進行交易中．．．
                <h1>{user}</h1>
                <Accordion
                  expanded={open1}
                  onChange={(e, expanded) => setOpen1(!open1)}
                  style={AcStyle}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className="heading">會員資料</Typography>
                  </AccordionSummary>
                  <AccordionDetails style={{ lineHeight: "2" }}>
                    <Typography component="p">
                      姓名:{name1 + name2}
                      <br />
                      電子郵件:{email}
                      <br />
                      電話:{phone}
                    </Typography>
                  </AccordionDetails>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={(e) => {
                      setOpen2(!open2);
                    }}
                  >
                    確認
                  </Button>
                </Accordion>
                <Accordion
                  expanded={open2}
                  onChange={(e, expanded) => setOpen2(!open2)}
                  style={AcStyle}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className="heading">郵寄地址</Typography>
                  </AccordionSummary>
                  <AccordionDetails style={{ lineHeight: "2" }}>
                    <Typography component="p">
                      地址:{rightAddress}
                      <Button
                        style={{ marginLeft: "15px" }}
                        variant="outlined"
                        color="primary"
                        onClick={handleClickOpen}
                      >
                        更改地址
                      </Button>
                      <Dialog
                        open={diaopen}
                        onClose={handleClose}
                        aria-labelledby="form-dialog-title"
                      >
                        <DialogTitle id="form-dialog-title">
                          郵寄地址
                        </DialogTitle>
                        <DialogContent>
                          <DialogContentText>
                            請更改為正確的郵寄地址
                          </DialogContentText>
                          <TextField
                            autoFocus
                            margin="dense"
                            id="address"
                            label="Address"
                            type="text"
                            fullWidth
                          />
                        </DialogContent>
                        <DialogActions>
                          <Button onClick={handleClose} color="primary">
                            取消更改
                          </Button>
                          <Button onClick={handleChange} color="primary">
                            更改
                          </Button>
                        </DialogActions>
                      </Dialog>
                    </Typography>
                  </AccordionDetails>

                  <Button
                    variant="contained"
                    color="primary"
                    onClick={(e) => {
                      setOpen3(!open3);
                    }}
                  >
                    確認
                  </Button>
                </Accordion>
                <Accordion
                  expanded={open3}
                  onChange={(e, expanded) => setOpen3(!open3)}
                  style={AcStyle}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className="heading">交易明細 </Typography>
                  </AccordionSummary>
                  <AccordionDetails style={{ lineHeight: "2" }}>
                    <Typography component="p">
                      姓名:{name1 + name2}
                      <br />
                      地址:{rightAddress}
                      <br />
                      電子郵件:{email}
                      <br />
                      預估總額為:{price * Ca + 10}(每月):
                      <Typography color="textSecondary" component="p">
                        {price}(價格)*{Ca}(度數)+10(手續費)
                      </Typography>
                    </Typography>
                  </AccordionDetails>

                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      alert("確認所有資料是否正確");
                    }}
                  >
                    確認
                  </Button>
                </Accordion>
                {/* //交易按鈕 */}
                <Button color="primary" onClick={handleFetch}>
                  交易送出
                </Button>
                {/* <Button>交易送出</Button> */}
              </Container>
            )}
          </Col>
          <Col lg={4} className="PC2" style={{ textAlign: "center" }}>
            <Card
              className="Itemroot"
              style={{
                display: "inline-block",
                padding: "5px",
                width: "80%",
                margin: " 5px 40px 0px 20px",
                borderRadius: "30px",
                border: "5px ",
              }}
            >
              <CardHeader
                className={"ellipsis"}
                avatar={
                  <Avatar aria-label="recipe" className="avatar">
                    {_id}
                  </Avatar>
                }
                title={P_Name}
                subheader=""
              />

              <Image
                style={{
                  display: "block",
                  margin: "0 auto",
                  width: "90%",
                  height: "50vh",
                }}
                src={P_Image}
              />

              <CardContent>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  component="p"
                  className={cx("Itemroot", "content")}
                  style={{ marginBottom: "10pt" }}
                >
                  根據你的使用情況(每月電量)： {Ca}
                </Typography>
                <Button
                  variant="outlined"
                  onClick={() => setOpen(!open)}
                  style={{ marginBottom: "10pt" }}
                >
                  改變電量
                </Button>

                {/* <Typography
                  variant="body1"
                  color="textSecondary"
                  component="p"
                  className={cx("Itemroot", "content")}
                >
                  <FormControl component="fieldset">
                    <FormLabel style={{ padding: "5px" }} component="legend">
                      大約要訂幾年
                    </FormLabel>

                    <RadioGroup
                      aria-label="radio1"
                      name="radio1"
                      value={Radio1}
                      onChange={(e) => {
                        setRadio1(e.target.value);
                        console.log(e.target.value);
                      }}
                    >
                      <Row>
                        <FormControlLabel
                          value="1年"
                          control={<Radio />}
                          label="一年"
                        />
                        <FormControlLabel
                          value="3年"
                          control={<Radio />}
                          label="3年"
                        />
                        <FormControlLabel
                          value="other"
                          control={<Radio />}
                          label="Other"
                        />
                      </Row>
                    </RadioGroup>
                  </FormControl>
                </Typography> */}
              </CardContent>
              <CardContent>
                <Typography
                  color="textSecondary"
                  component="div"
                  style={{ marginBottom: "10pt" }}
                >
                  此方案的電價格(一度):{price}$
                </Typography>
                <Typography
                  color="textSecondary"
                  component="div"
                  style={{ marginBottom: "10pt" }}
                >
                  預估價格為:{price * Ca}$+10(手續)
                </Typography>
                <Typography
                  color="textSecondary"
                  component="div"
                  style={{ marginBottom: "10pt" }}
                >
                  共{total}元
                </Typography>
              </CardContent>

              <CardActions disableSpacing style={{ display: "inline-block" }}>
                {showdisplay ? (
                  <Button
                    variant="outlined"
                    onClick={handleDeal}
                    style={{ marginRight: "15pt" }}
                  >
                    取消✘
                  </Button>
                ) : (
                  <Button
                    variant="outlined"
                    onClick={handleDeal}
                    style={{ marginRight: "15pt" }}
                  >
                    購買✔
                  </Button>
                )}
                <Button
                  variant="outlined"
                  onClick={() => setOpene(!opene)}
                  style={{ alignItems: "center" }}
                >
                  郵件報價✉
                </Button>
              </CardActions>
            </Card>
          </Col>
        </Row>
      </Box>

      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"可根據使用情況調整要使用的電量"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <BsLightning />:{" "}
            <Input
              id="Capacity"
              type="number"
              defaultValue={Ca}
              endAdornment={<InputAdornment position="end">kWh</InputAdornment>}
            ></Input>
            {/* <FaFire />:{" "}
                <Input
                  id="Ping"
                  type="number"
                  defaultValue={dePing}
                  endAdornment={
                    <InputAdornment position="end">m³</InputAdornment>
                  }
                ></Input> */}
          </DialogContentText>
          <DialogContentText id="alert-dialog-description2">
            若另一個無需求請預設0
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setOpen(!open);
            }}
            color="primary"
          >
            Disagree
          </Button>
          <Button
            onClick={() => {
              setOpen(!open);
              const Catemp = document.getElementById("Capacity").value;
              setCa(Catemp);
            }}
            color="primary"
            autoFocus
          >
            Agree
          </Button>
        </DialogActions>
      </Dialog>
      {/* 郵件 */}
      <Dialog
        open={opene}
        TransitionComponent={Transition}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {"郵寄對你個人專屬的優惠"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {/* 郵寄表單 */}
            <div>姓名</div>
            <Input></Input>
            <div>email</div>
            <Input></Input>
            <div>電話</div>
            <Input></Input>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setOpene(!opene);
            }}
            color="primary"
          >
            Disagree
          </Button>
          <Button
            onClick={() => {
              setOpen(!opene);
            }}
            color="primary"
            autoFocus
          >
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
