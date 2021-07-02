import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Carousel,
  Card,
  CardDeck,
  Button,
} from "react-bootstrap";
import "./eco.css";
import plant2 from "../images/plant2.jpg";
import photo1 from "../images/photo1.jpeg";
import photo2 from "../images/photo2.jpeg";
import sun2 from "../images/sun2.jpg";
import sea1 from "../images/sea1.jpg";
import sea2 from "../images/sea2.jpg";
import sea3 from "../images/sea3.jpg";

import sea5 from "../images/sea5.jpg";
import sea6 from "../images/sea6.jpg";
import sea7 from "../images/sea7.jpg";
import sky1 from "../images/sky1.jpg";
import sky2 from "../images/sky2.jpg";
import sky3 from "../images/sky3.jpg";
import team1 from "../images/team1.jpg";
import team2 from "../images/team2.jpg";
import team3 from "../images/team3.jpg";

import { Box } from "@material-ui/core/";
import { FiSun } from "react-icons/fi";
import { FaWater, FaWind } from "react-icons/fa";
import { BsArrowRightShort } from "react-icons/bs";
import Scroll from "../Scroll";
import { Link } from "react-router-dom";
export default class Feature extends Component {
  render() {
    return (
      <Box>
        <Scroll showBelow={250} />;
        <Container>
          <div class="title">可再生能源</div>
          <p class="ptitle">
            可再生能源（Renewable Energy）為來自大自然的能源，<br></br>
            例如太陽能、風力、潮汐能、地熱能、水能、生物燃氣，<br></br>
            是取之不盡，用之不竭的能源，是相對於會窮盡的不可再生能源的一種能源。
          </p>

          <Image src={plant2} className="img" />
        </Container>
        <Box>
          <Container>
            <div class="title">
              <FiSun style={{ marginRight: "8px", color: "#37434f" }} />
              太陽能
            </div>
          </Container>
          <Container>
            <Row>
              <Col md={10} lg={6}>
                <Container className="pos">
                  <Image src={photo2} className="P1" />
                  <Image src={photo1} className="P2" />
                </Container>
              </Col>

              <Col md={10} lg={6}>
                <Container className="sunp">
                  自地球形成生物就主要以太陽提供的熱和光生存，而自古人類也懂得以陽光曬乾物件，並作為保存食物的方法，
                  如製鹽和曬鹹魚等。但在化石燃料減少下，才有意把太陽能進一步發展。
                  <br />
                  太陽能發電是一種新興的可再生能源。廣義上的太陽能是地球上許多能量的來源，如風能，化學能，水的勢能，
                  化石燃料可以稱為遠古的太陽能 ;
                  而太陽能電池為主要使用太陽能發電的方式......
                  {/* 太陽能可以運用的地方非常的廣泛，近年來政府也在積極的實施太陽能發電... */}
                  <br />
                </Container>

                <button class="buttoncss" onClick={{}}>
                  了解更多
                </button>
              </Col>
            </Row>
          </Container>
        </Box>
        <Container>
          <Row>
            <Col>
              <div class="sun2left">
                <h1
                  style={{
                    color: "#37434F",
                    fontWeight: "bold",
                  }}
                >
                  太陽能占台灣所有能源的53.9％
                </h1>
                <p className="pp">
                  一年四季，即使下雨，太陽也能提供良好的能量。太陽能電池板依靠光而不是熱量來工作。
                  例如，太陽能公園每天可以直接通過太陽為成千上萬的家庭提供良好的能源。
                </p>
                <button class="buttoncss" onClick={{}}>
                  了解更多
                </button>
              </div>
            </Col>
            <Col>
              <div class="sun2right">
                <Image
                  src={sun2}
                  style={{
                    height: "350px",
                    width: "550px",
                    boxShadow: "1px 1px 10px 1px  #c2cbd3",
                  }}
                />
              </div>
            </Col>
          </Row>
        </Container>
        <Box>
          <Container>
            <div class="title">
              <FaWater style={{ marginRight: "8px", color: "#37434f" }} />
              潮汐能
            </div>
            <p className="pp1">
              潮汐能是透過日夜潮起潮落來獲得能量，以海面起伏為動能驅動渦輪機發電，雖然是個相當重要的綠色能源，
              但其同時也是個發展時間相當短的海洋能源，成本較高、技術也還沒有像風力發電與太陽光電那麼成熟，若要大規模發展還得面臨許多挑戰。
              <br />
              潮汐能源的生成方式目前共有三種方法：
            </p>
          </Container>
          <Container>
            <Row>
              <Col className="seaall">
                <Image src={sea1} style={{ width: "100%" }} />
                <Container className="seacon">
                  <p>潮流式系統</p>
                </Container>
              </Col>
              <Col className="seaall">
                <Image src={sea2} style={{ width: "100%" }} />
                <Container className="seacon">
                  <p>動態潮汐能</p>
                </Container>
              </Col>
              <Col className="seaall">
                <Image src={sea3} style={{ width: "100%" }} />
                <Container className="seacon">
                  <p>堰壩式系統</p>
                </Container>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col
                md={6}
                style={{
                  marginTop: "80px",
                  height: "350px",
                }}
              >
                <Carousel>
                  <Carousel.Item>
                    <Image className="w-100" src={sea5} alt="First slide" />
                    <Carousel.Caption>
                      <h3>Energy</h3>
                      <p>la vitalité</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image className="w-100" src={sea6} alt="Second slide" />

                    <Carousel.Caption>
                      <h3>Protect</h3>
                      <p>sauvegarder</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image className=" w-100" src={sea7} alt="Third slide" />

                    <Carousel.Caption>
                      <h3>Our Earth</h3>
                      <p>notre terre</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
                {/* <Image src={sea4} className="sea4right"></Image> */}
              </Col>
              <Col md={6}>
                <p className="sea4left">
                  潮汐能源的擷取對象，主要是高潮與
                  低潮的潮差產生的位能，以及因潮流流動產生的動能。在潮汐水位落差變化中，把海水動、位能間的變化轉換成電能
                  的發電方式就是潮汐發電。
                  雖然潮汐發電尚未被廣泛的使用，但潮汐發電對於未來能源的供應有著很好的潛力，因其比風能和太陽能都更加容易被預測到，
                  像是歐洲運用潮汐來推動磨坊已有很久的歷史，事前人用來代替人力的一種智慧。
                </p>
              </Col>
            </Row>
          </Container>
        </Box>
        <Box>
          <Container>
            <div class="title">
              <FaWind style={{ marginRight: "8px", color: "#37434f" }} />
              風力能
            </div>
          </Container>
          <Container style={{ marginTop: "30px", marginBottom: "30px" }}>
            <Card className=" text-white">
              <Card.Img
                src={sky1}
                alt="Card image"
                style={{
                  maxHeight: "500px",
                  boxShadow: "10px 10px 10px 1px #c2cbd3",
                  opacity: 0.9,
                }}
              />
              <Card.ImgOverlay>
                <Card.Title style={{ fontSize: "28pt" }}>Wind Power</Card.Title>
                <Card.Text>
                  Wind power or wind energy is the use of wind to provide
                  mechanical power through wind turbines to turn electric
                  generators for electrical power.
                  <br />
                  Wind power is a popular sustainable, renewable source of power
                  that has a much smaller impact on the environment compared to
                  burning fossil fuels.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Container>
          <Container>
            <Row style={{ marginTop: "100px" }}>
              <Col md={10} lg={6} className="sky">
                <Container>
                  <p>
                    岸上風力發電是一種低成本的發電方式，在某些地區，發電成本比傳統發電還低。
                    但是岸上風力發電場會影響風景，並且比起其他發電廠需要更多的土地面積;
                    同時也必須建設在野外或是鄉村地區，這也可能導致農村工業化
                    ，或造成棲息地破壞，離岸風力發電比岸上風力發電更強、更穩定，同時在視覺上的影響更小，但建造和維護的成本則更高。
                  </p>
                  <button class="buttoncss" onClick={{}}>
                    了解更多
                  </button>
                </Container>
              </Col>
              <Col md={10} lg={6}>
                <img src={sky2} className="sky1" />
                <img src={sky3} className="sky2" />
              </Col>
            </Row>
          </Container>
        </Box>
        <Box>
          <Container>
            <div className="teamtitle">在這裡我們為您推薦優質的供應商</div>
          </Container>
          <Container style={{ marginTop: "60px", height: "500px" }}>
            <Row>
              <CardDeck>
                <Card>
                  <Card.Img variant="top" src={team1} />
                  <Card.Body>
                    <Card.Title className="advise">AK 4</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                  </Card.Body>
                  <Link to="/Project" className="linkstyle">
                    Go Check!
                  </Link>
                </Card>
                <Card>
                  <Card.Img variant="top" src={team2} />
                  <Card.Body>
                    <Card.Title className="advise">Teddy's compony</Card.Title>
                    <Card.Text>
                      This card has supporting text below as a natural lead-in
                      to additional content.
                    </Card.Text>
                  </Card.Body>
                  <Link to="/Project" className="linkstyle">
                    Come on
                  </Link>
                </Card>
                <Card>
                  <Card.Img variant="top" src={team3} />
                  <Card.Body>
                    <Card.Title className="advise">愛心鄰居</Card.Title>
                    <Card.Text>
                      自給自足外，希望將多餘的電力供給給需要的用戶們!
                    </Card.Text>
                  </Card.Body>
                  <Link to="/Project" className="linkstyle">
                    歡迎洽購
                  </Link>
                </Card>
              </CardDeck>
            </Row>
          </Container>
        </Box>
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
      </Box>
    );
  }
}
