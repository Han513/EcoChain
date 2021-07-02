import React, { Component } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { Container, Row, Col, Image, Card, CardDeck } from "react-bootstrap";

// import { Player } from "video-react";
// import "node_modules/video-react/dist/video-react.css";
import laptop from "../images/laptop.jpg";
import solar from "../images/solar.jpg";
import ocean from "../images/ocean.jpg";
import wind from "../images/wind.jpg";

import Box from "@material-ui/core/Box";
import Slider from "../SimpleSlider";
import homeimg from "../images/homeimg.jpg";

import "./eco.css";
import { BsArrowRightShort } from "react-icons/bs";
import solarpower from "../images/solarpower.jpg";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { FaUserSecret } from "react-icons/fa";
import { BsCardList } from "react-icons/bs";
import Scroll from "../Scroll";
import { Link } from "react-router-dom";

export default class HomePage extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const ig = {
      height: 300,
      maxWidth: 500,
    };
    const style = {
      height: 40,
      width: 40,
      lineHeight: "40px",
      borderRadius: 4,
      backgroundColor: "#1088e9",
      color: "#fff",
      textAlign: "center",
      fontSize: 14,
    };
    return (
      <Container>
        <Scroll showBelow={250} />
        <Container
          fluid
          style={{
            backgroundImage: `url(${homeimg})`,
            minHeight: "480px",
            margin: "auto",
            marginBottom: "30px",
            boxShadow: " 0 30px 40px rgba(0,0,0,.1)",
          }}
        >
          <Row>
            <Col md={8}>
              <Container
                style={{
                  textAlign: "left",
                  color: "white",
                  verticalAlign: "middle",
                  paddingTop: "130px",
                }}
              >
                <div style={{ fontSize: "55pt", fontWeight: "bold" }}>
                  Eco is close to us than you think
                </div>
                {/* <img src={telephone} style={{ width: 25, height: 25 }} />X */}
                <FaPhoneAlt
                  style={{
                    fontSize: "25px",
                    marginRight: "20px",
                    marginLeft: "15px",
                  }}
                />

                <a
                  href="tel:+886-917237253"
                  style={{
                    color: "white",
                    fontSize: "20px",
                  }}
                >
                  0917-237-253
                </a>
              </Container>
            </Col>
          </Row>
        </Container>

        <Container
          style={{
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            maxWidth: "800px",
          }}
        >
          <div className="goodtitle">最綠色的能源和最優質的服務</div>
          <p className="pp">
            EcoChain提供在台灣土壤上真正可持續產生的能源。您可以選擇自己想要的各種綠能資源。
            還可以準確地知道能量的來源和金錢的去向，還在等什麼，馬上加入我們吧！
          </p>
        </Container>

        <Slider />

        <Box>
          <Container>
            <Row>
              <Col>
                <div class="solarleft">
                  <h1
                    style={{
                      color: "#37434F",
                      fontWeight: "bold",
                    }}
                  >
                    關於再生能源
                  </h1>
                  <p className="solarpower">
                    近年來，因為能源危機及環保意識抬頭，讓世界各國察覺到能源開發的重要性，而
                    人類需要依靠能源才能繼續生存，不管是電力還是自然能源都是影響我們生計、發展的
                    重要因素，但是，電力仍會造成生態的污染以及破壞，甚至帶來嚴重的災害。
                    <br></br>此外，除了
                    一些再生能源，大量能源的使用都是有限的，終究會有用盡的一天，因此如何有效的運
                    用能源、發揮出能源最大的效能是現在迫切需要去思考、做出改變的議題，以確保未來
                    的永續發展。
                  </p>
                </div>
              </Col>
              <Col md={8} lg={6}>
                <div class="solarright">
                  <Image
                    src={solarpower}
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

        <Box>
          <Container>
            <Row
              style={{
                height: "250px",
                marginTop: "150px",
              }}
            >
              <Col>
                <RiMoneyDollarCircleLine fontSize="50px" />

                <h4 className="icontitle">守護環保也賺錢</h4>
                <p className="iconp">
                  當環保小尖兵的同時，也不要忘了增進自己的收入，想了解更多?那就進來看看吧
                </p>
                <BsArrowRightShort fontSize="30px" />
              </Col>
              <Col>
                <FaUserSecret fontSize="50px" />
                <h4 className="icontitle">交易過程完全安全</h4>
                <p className="iconp">
                  在這裡完全不用擔心交易過程出任何一點差錯，要竊取資料根本難上加難!
                </p>
                <BsArrowRightShort fontSize="30px" />
              </Col>
              <Col>
                <BsCardList fontSize="50px" />
                <h4 className="icontitle"> 方案讓你更多選擇</h4>
                <p className="iconp">
                  不想只能依據台電的安排繳一堆電費?那就自己來做決定吧!
                </p>
                <BsArrowRightShort fontSize="30px" />
              </Col>
            </Row>
          </Container>
        </Box>

        <Container style={{ marginTop: "100px", marginBottom: "100px" }}>
          <Row>
            <Col md={8} lg={7}>
              <div>
                <Image
                  src={laptop}
                  style={{
                    maxWidth: "100%",
                  }}
                ></Image>
              </div>
            </Col>
            <Col lg={5}>
              <div class="right">
                <h1
                  style={{
                    color: "#37434F",
                    fontWeight: "bold",
                  }}
                >
                  立即比較能源的不同吧!
                </h1>
                <p className="pp">
                  您要搬家還是要換能源供應商？<br></br>
                  使用我們的比較工具，不僅簡單好用，您還可以清楚地看到各方之間的區別!
                </p>
                <button class="buttoncss" onClick={{}}>
                  立即體驗
                </button>
              </div>
            </Col>
          </Row>
        </Container>

        <Box>
          <Container style={{ marginTop: "30px", height: "600px" }}>
            <Row>
              <CardDeck>
                <Card>
                  <Card.Img variant="top" src={solar} />
                  <Card.Body>
                    <Card.Title
                      className="advise"
                      style={{ fontWeight: "bold" }}
                    >
                      太陽能
                    </Card.Title>
                    <Card.Text className="aa">
                      在這裡你可以找到已經註冊在網站上的太陽能發電方案，全台灣都有分布不同的發電站，進來找找看最適合您的方案吧!
                    </Card.Text>
                  </Card.Body>
                  <Link className="linkstyle" to="/Project">
                    查看
                  </Link>
                </Card>
                <Card>
                  <Card.Img variant="top" src={ocean} />
                  <Card.Body>
                    <Card.Title
                      className="advise"
                      style={{ fontWeight: "bold" }}
                    >
                      潮汐能
                    </Card.Title>
                    <Card.Text className="aa">
                      潮汐能發電雖然較不易實行，但是在這裡依然有幾個方案提供給您們查看，有興趣的話就來加入我們吧。
                    </Card.Text>
                  </Card.Body>
                  <Link className="linkstyle" to="/Project">
                    查看
                  </Link>
                </Card>
                <Card>
                  <Card.Img variant="top" src={wind} />
                  <Card.Body>
                    <Card.Title
                      className="advise"
                      style={{ fontWeight: "bold" }}
                    >
                      風力能
                    </Card.Title>
                    <Card.Text className="aa">
                      自給自足外，希望將多餘的電力供給給需要的用戶們!像是靠沿海地區的居民們，風力發電的儲電真的非常容易，
                      趕快來當個供電商吧，不僅一起保護地球，也可以透過平日的儲電小技巧來賺取收益。
                    </Card.Text>
                  </Card.Body>
                  <Link className="linkstyle" to="/Project">
                    查看
                  </Link>
                </Card>
              </CardDeck>
            </Row>
          </Container>
        </Box>
        <div
          class="embed-responsive embed-responsive-16by9"
          style={{
            boxShadow: "10px 10px 10px 1px #c2cbd3",
            marginTop: "40px",
            marginBottom: "40px",
          }}
        >
          <iframe
            width="644"
            height="362"
            src="https://www.youtube.com/embed/KEeH4EniM3E"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <hr />

        <Box>
          <Container>
            <Row style={{ height: "300px" }}>
              <Col md={6}>
                <div className="help">需要幫忙?</div>
                <div className="help2">
                  <BsArrowRightShort />
                  您如何保證我支付的可持續電力實際產生？
                  <br />
                  <BsArrowRightShort />
                  何謂交易過程的安全性?
                  <br />
                  <BsArrowRightShort />
                  哪裡可以知道交易是否成功?
                </div>
              </Col>
              <Col md={4}>
                <div className="help">聯繫我們</div>
                <div className="help2">
                  <BsArrowRightShort />
                  寫信 @email
                  <br />
                  <BsArrowRightShort />
                  請到關於我們查看更多
                  <br />
                </div>
              </Col>
            </Row>
          </Container>
        </Box>
      </Container>
    );
  }
}
