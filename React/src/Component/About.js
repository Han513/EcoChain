import React, { Component } from "react";

import {
  Box,
  CardActionArea,
  IconButton,
  CardContent,
  Typography,
} from "@material-ui/core/";
import {
  Button,
  Container,
  Row,
  Col,
  Image,
  Card,
  InputGroup,
  FormControl,
  Carousel,
} from "react-bootstrap";
import img1 from "../images/1.jpg";
import img2 from "../images/2.jpg";

import us from "../images/us.jpg";
import subscribe from "../images/subscribe.jpg";

import pin1 from "../images/pin1.jpg";
import pin2 from "../images/pin2.jpg";
import e1 from "../images/e1.jpg";
import pic1 from "../images/pic1.jpg";
import pic2 from "../images/pic2.jpg";
import pic3 from "../images/pic3.jpg";
import pic4 from "../images/pic4.jpg";
import pic5 from "../images/pic5.jpg";

import { FiInstagram, FiFacebook, FiTwitter, FiMail } from "react-icons/fi";

import { MdStars } from "react-icons/md";
import Scroll from "../Scroll";

const card = {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  minWidth: 0,
  wordWrap: "break-word",
  backgroundColor: "#fff",
  backgroundClip: "border-box",
  border: " 0 solid rgba(0,0,0,.125)",
  borderRadius: "1rem",
};

const onClickAgree = () => {
  var x = document.getElementById("agree");
  x.style.display = "none";
};

export default class About extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <Box>
        <Scroll showBelow={250} />
        <Box Component="header">
          <Container
            fluid
            style={{
              fontWeight: "bold",
              opacity: 0.8,
              textAlign: "center",
              padding: "6rem 8rem",
              backgroundImage: `url(${us})`,
              backgroundPosition: "center",
            }}
          >
            <div style={{ marginBottom: "120px" }}>
              <h1 className="aboutus">About Us</h1>
              <p className="aboutus2">
                我們致力於表達自己和實現夢想，希望讓更多人認識綠能
              </p>
              <p>
                <Button variant="info">Learn more</Button>
              </p>
              <p>聯繫我們</p>

              <div>
                <IconButton>
                  <FiInstagram />
                </IconButton>
                <IconButton>
                  <FiFacebook />
                </IconButton>
                <IconButton>
                  <FiTwitter />
                </IconButton>
                <IconButton>
                  <FiMail />
                </IconButton>
              </div>
            </div>
          </Container>
        </Box>
        <Box>
          <Container style={{ textAlign: "cenetr", marginBottom: "80pt" }}>
            <div className="goal">我們的目標</div>

            <Row>
              <p className="goal2">
                我們希望使能源市場更可持續，更公平，更透明。
                我們提供對世界和您都有好處的智能和可訪問的能源應用程序，
                不僅僅是為了提倡環保而已，更多元化的方式帶給社會大眾更不同的體驗。
                只有使用到真正好的能源，會對周圍產生影響。使用的人越多，地球就越來越健康!
              </p>
            </Row>
          </Container>
        </Box>
        <Box>
          <Container style={{ marginBottom: "60pt" }}>
            <Row>
              <Col md={7} lg={6}>
                <div class="e">
                  <h1
                    style={{
                      color: "#37434F",
                      fontWeight: "bold",
                    }}
                  >
                    再生能源的趨勢
                  </h1>
                  <p className="ep">
                    現在再生能源科技正讓更多人能自由取得電力。再生能源技術已經明顯比柴油或煤油的電力系統便宜許多，
                    而且在人口稀少地區使用再生能源也比擴張電網便宜。
                    再生能源系統不僅在維護上相對便宜，同時，仰賴自給自足的再生能源讓居民不必受制於浮動的油價。
                    <br></br>此外，除了
                    國際間正在推行百分百使用綠電，各大企業皆表示全面使用 100%
                    再生能源也是一個明智的商業決策~
                    綜合上述總總因素，選擇再生能源是你我最好的選擇!
                  </p>
                </div>
              </Col>
              <Col md={8} lg={6}>
                <div class="e1">
                  <Image
                    src={e1}
                    style={{
                      maxWidth: "100%",
                      boxShadow: "1px 10px 10px 1px  #c2cbd3",
                    }}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </Box>
        <Box component="body_one">
          <div className="con"> 我們的"特色"</div>
          <Container
            style={{
              marginBottom: "60pt",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Row style={{ alignItems: "center" }}>
              <Col>
                <Row style={{ justifyContent: "center" }}>
                  <Col lg={6}>
                    <Container className="star">
                      <MdStars
                        color="navy"
                        size={40}
                        style={{ marginRight: "10pt" }}
                      />
                      區塊鏈技術的應用
                      <p className="star2">
                        使用安全性極高的交易技術，來確保交易過程完全安全。
                      </p>
                    </Container>
                  </Col>
                  <Col lg={6}>
                    <Container className="star">
                      <MdStars
                        color="red"
                        size={40}
                        style={{ marginRight: "10pt" }}
                      />
                      我們只提供交易的平台
                      <p className="star2">
                        促成交易雙方的成功，不涉及發電裝備的管理。
                      </p>
                    </Container>
                  </Col>
                </Row>
                <Row style={{ justifyContent: "right" }}>
                  <Col lg={6}>
                    <Container className="star">
                      <MdStars
                        color="green"
                        size={40}
                        style={{ marginRight: "10pt" }}
                      />
                      人人都可以成為供應商
                      <p className="star2">
                        就算只有少量的能源，還是會有對應的需求者。
                      </p>
                    </Container>
                  </Col>
                  <Col lg={6}>
                    <Container className="star">
                      <MdStars
                        color="purple"
                        size={40}
                        style={{ marginRight: "10pt" }}
                      />
                      方案的多樣性選擇
                      <p className="star2">
                        在這裡你可以找到最適合自己的專案。
                      </p>
                    </Container>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Box>
        <Box>
          <Container style={{ marginBottom: "80pt" }}>
            <Row>
              <Col md={6} lg={6}>
                <Carousel>
                  <Carousel.Item>
                    <Image className="w-100" src={pic5} alt="First slide" />
                    <Carousel.Caption>
                      <h3>Energy</h3>
                      <p>la vitalité</p>
                    </Carousel.Caption>
                  </Carousel.Item>

                  <Carousel.Item>
                    <Image className="w-100" src={pic4} alt="Second slide" />
                    <Carousel.Caption>
                      <h3>Protect</h3>
                      <p>sauvegarder</p>
                    </Carousel.Caption>
                  </Carousel.Item>

                  <Carousel.Item>
                    <Image className=" w-100" src={pic3} alt="Third slide" />
                    <Carousel.Caption>
                      <h3>Our Earth</h3>
                      <p>notre terre</p>
                    </Carousel.Caption>
                  </Carousel.Item>

                  <Carousel.Item>
                    <Image className=" w-100" src={pic2} alt="forth slide" />
                    <Carousel.Caption>
                      <h3>Become</h3>
                      <p>devenir</p>
                    </Carousel.Caption>
                  </Carousel.Item>

                  <Carousel.Item>
                    <Image className=" w-100" src={pic1} alt="fifth slide" />
                    <Carousel.Caption>
                      <h3>Nature</h3>
                      <p>nature</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </Col>
              <Col md={10} lg={6}>
                <Container className="pe">
                  作為Eco客戶，您將以優惠的價格獲得良好的能源 ;
                  這對您有利，對生產者有利，對世界有利。
                  通過我們的能源市場，您可以輕鬆地選擇您所在地區的太陽能，風能或生物能源的生產商。
                  我們將會開發更多地區的能源供大眾使用!放心將您家裡的電力交給我們吧!
                  <Button
                    className="buttoncss"
                    onClick={() => {
                      window.location.href = "http://localhost:3000/Login";
                    }}
                  >
                    立即加入我們吧!
                  </Button>
                </Container>
              </Col>
            </Row>
          </Container>
        </Box>
        <Box component="body_two">
          <Container></Container>
          <Container
            style={{
              marginLeft: "auto",
              paddingRight: "15px",
              paddingLeft: "15px",
              width: "100%",
              maxWidth: "1140px",
            }}
          >
            <Row>
              <Col md={8}>
                <h3 className="our">執行團隊</h3>
                <p className="our2">
                  一生中沒有真正想做的事情，但就是得盡可能的去完成每一件事。
                </p>
              </Col>
            </Row>
            <Container id="人">
              <Row>
                <Col lg={6} style={{ flex: "0 0 auto", width: "100%" }}>
                  <Card
                    style={
                      (card,
                      {
                        boxShadow: "box-shadow: 0 20px 27px 0 rgb(0 0 0 / 5%)",
                        marginTop: "3rem",
                        overflow: "hidden",
                      })
                    }
                  >
                    <CardActionArea>
                      <Row>
                        <Col
                          lg={4}
                          md={6}
                          style={{ flex: "0 0 auto", width: "100%" }}
                        >
                          <Container
                            style={{ paddingRight: 0, padding: "1rem" }}
                          >
                            <Card.Img className="teammate" src={img1} />
                          </Container>
                        </Col>
                        <Col
                          lg={8}
                          md={6}
                          style={{
                            flex: "0 0 auto",
                            width: "100%",
                            marginTop: "auto",
                            marginBottom: "auto",
                          }}
                        >
                          <CardContent
                            style={{
                              fontFamily: "Open Sans",
                              padding: "1.5rem",
                              flex: "1 1 auto",
                            }}
                          >
                            <Typography
                              gutterBottom
                              variant="h5"
                              style={{
                                marginBottom: 0,
                                color: "#37434f",
                                fontWeight: "bold",
                              }}
                            >
                              宗翰Hannn
                            </Typography>
                            <Typography
                              variant="h6"
                              style={{ color: "#17c1e8" }}
                            >
                              後端及報告員
                            </Typography>
                            <Typography
                              color="textSecondary"
                              style={{ marginBottom: 0 }}
                            >
                              硬幣兩枚，帥哥一枚
                            </Typography>
                          </CardContent>
                        </Col>
                      </Row>
                    </CardActionArea>
                  </Card>
                </Col>
                <Col lg={6} style={{ flex: "0 0 auto", width: "100%" }}>
                  <Card
                    style={
                      (card,
                      {
                        boxShadow: "box-shadow: 0 20px 27px 0 rgb(0 0 0 / 5%)",
                        marginTop: "3rem",
                        overflow: "hidden",
                      })
                    }
                  >
                    <CardActionArea>
                      <Row>
                        <Col
                          lg={4}
                          md={6}
                          style={{ flex: "0 0 auto", width: "100%" }}
                        >
                          <Container
                            style={{ paddingRight: 0, padding: "1rem" }}
                          >
                            <Card.Img className="teammate" src={img2} />
                          </Container>
                        </Col>
                        <Col
                          lg={8}
                          md={6}
                          style={{
                            flex: "0 0 auto",
                            width: "100%",
                            marginTop: "auto",
                            marginBottom: "auto",
                          }}
                        >
                          <CardContent
                            style={{
                              fontFamily: "Open Sans",
                              padding: "1.5rem",
                              flex: "1 1 auto",
                            }}
                          >
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="h2"
                              style={{
                                marginBottom: 0,
                                color: "#37434f",
                                fontWeight: "bold",
                              }}
                            >
                              勇叡BenSanN
                            </Typography>
                            <Typography
                              variant="h6"
                              style={{ color: "#17c1e8" }}
                            >
                              技術員
                            </Typography>
                            <Typography
                              variant="p"
                              color="textSecondary"
                              component="p"
                              style={{ marginBottom: 0 }}
                            >
                              任何困難對我來說都不是問題!
                            </Typography>
                          </CardContent>
                        </Col>
                      </Row>
                    </CardActionArea>
                  </Card>
                </Col>
              </Row>
            </Container>
            <Container id="人2">
              <Row style={{ marginTop: "1.5rem" }}>
                <Col lg={6} style={{ flex: "0 0 auto" }}>
                  <Card
                    style={
                      (card,
                      {
                        boxShadow: "box-shadow: 0 20px 27px 0 rgb(0 0 0 / 5%)",
                        marginTop: "3rem",
                        overflow: "hidden",
                        zIndex: "2",
                      })
                    }
                  >
                    <CardActionArea>
                      <Row>
                        <Col
                          lg={4}
                          md={6}
                          style={{ flex: "0 0 auto", width: "100%" }}
                        >
                          <Container
                            style={{ paddingRight: 0, padding: "1rem" }}
                          >
                            <Card.Img className="teammate" src={pin1} />
                          </Container>
                        </Col>
                        <Col
                          lg={8}
                          md={6}
                          style={{
                            flex: "0 0 auto",
                            width: "100%",
                            marginTop: "auto",
                            marginBottom: "auto",
                          }}
                        >
                          <CardContent
                            style={{
                              fontFamily: "Open Sans",
                              padding: "1.5rem",
                              flex: "1 1 auto",
                            }}
                          >
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="h2"
                              style={{
                                marginBottom: 0,
                                color: "#37434f",
                                fontWeight: "bold",
                              }}
                            >
                              品瑩 周cxx_損傷
                            </Typography>
                            <Typography
                              variant="h6"
                              style={{ color: "#17c1e8" }}
                            >
                              文書監督官/家瑋小助手
                            </Typography>
                            <Typography
                              variant="p"
                              color="textSecondary"
                              component="p"
                              style={{ marginBottom: 0 }}
                            >
                              萬能阿曼
                            </Typography>
                          </CardContent>
                        </Col>
                      </Row>
                    </CardActionArea>
                  </Card>
                </Col>
                <Col lg={6} style={{ flex: "0 0 auto" }}>
                  <Card
                    style={
                      (card,
                      {
                        boxShadow: "box-shadow: 0 20px 27px 0 rgb(0 0 0 / 5%)",
                        marginTop: "3rem",
                        overflow: "hidden",
                        zIndex: "2",
                      })
                    }
                  >
                    <CardActionArea>
                      <Row>
                        <Col
                          lg={4}
                          md={6}
                          style={{ flex: "0 0 auto", width: "100%" }}
                        >
                          <Container
                            style={{ paddingRight: 0, padding: "1rem" }}
                          >
                            <Card.Img className="teammate" src={pin2} />
                          </Container>
                        </Col>
                        <Col
                          lg={8}
                          md={6}
                          style={{
                            flex: "0 0 auto",
                            width: "100%",
                            marginTop: "auto",
                            marginBottom: "auto",
                          }}
                        >
                          <CardContent
                            style={{
                              fontFamily: "Open Sans",
                              padding: "1.5rem",
                              flex: "1 1 auto",
                            }}
                          >
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="h2"
                              style={{
                                marginBottom: 0,
                                color: "#37434f",
                                fontWeight: "bold",
                              }}
                            >
                              家瑋Weiiiii
                            </Typography>
                            <Typography
                              variant="h6"
                              style={{ color: "#17c1e8" }}
                            >
                              前端設計師
                            </Typography>
                            <Typography
                              variant="p"
                              color="textSecondary"
                              component="p"
                              style={{ marginBottom: 0 }}
                            >
                              真的別鬧了，拖延症發作
                            </Typography>
                          </CardContent>
                        </Col>
                      </Row>
                    </CardActionArea>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Container>
        </Box>
        <Container style={{ margin: "35px" }}> </Container>
        <Box
          component="body_thr"
          style={{
            paddingTop: "3rem",
            marginTop: "3rem",
            marginBottom: "3rem",
          }}
        >
          <Container>
            <Row>
              <Col md={6} style={{ marginLeft: "50pt", marginTop: "60px" }}>
                <h4 className="own">獲得最新資訊</h4>
                <p className="own2">能源第一手最新資訊，你值得擁有</p>
                <Row>
                  <Col>
                    <InputGroup className="mb-3">
                      <FormControl
                        placeholder="Recipient's username"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                      />
                      <InputGroup.Append>
                        <InputGroup.Text id="basic-addon2">
                          @example.com
                        </InputGroup.Text>
                      </InputGroup.Append>
                    </InputGroup>
                  </Col>
                  <Col style={{ paddingLeft: 0 }}>
                    <Button variant="primary">訂閱</Button>
                  </Col>
                </Row>
              </Col>
              <Col md={5}>
                <Image src={subscribe} className="subscribe" roundedCircle />
              </Col>
              <Col></Col>
            </Row>
          </Container>
        </Box>
        <section id="one">
          <hr />
          <footer style={{ height: "50", textAlign: "center", margin: "20pt" }}>
            <p>版權所有。版權所有© 2021 NKUST_IC，作者是我們團隊。</p>
          </footer>
        </section>
        <div
          id="agree"
          style={{
            display: "block",
            textAlign: "center",
            padding: "13px",
            backgroundColor: "grey",
            opacity: 0.6,
            left: 0,
            position: "fixed",
            bottom: 0, //變成top:0;就是在頂部
            width: "100%",
            zIndex: 100,
          }}
        >
          <span
            style={{ fontSize: "14px", fontWeight: "bold", color: "black" }}
          >
            請允許我們收集有關您如何使用我們網站的數據。我們將使用它來改善我們的網站，使您的瀏覽體驗和我們的業務決策更好。要了解更多信息，請閱讀我們的
            Cookie通知。
          </span>
          <button
            style={{ backgroundColor: "#5CADAD", padding: "8px" }}
            onClick={() => onClickAgree()}
          >
            同意
          </button>
        </div>
      </Box>
    );
  }
}
