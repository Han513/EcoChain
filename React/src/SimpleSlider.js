import React, { Component } from "react";
import Slider from "react-slick";

export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
    };
    return (
      <div className="container1">
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <style>{cssstyle}</style>
        {/* <h2 style={{textAlign:"center"}}>使用者心得</h2> */}
        <Slider {...settings}>
          <sliderdiv>
            <h3>這個軟體的UI很棒！</h3>
            <h6>Jia Wei</h6>
          </sliderdiv>
          <sliderdiv>
            <h3>方案非常的多元</h3>
            <h6>Ping</h6>
          </sliderdiv>
          <sliderdiv>
            <h3>交易過程非常的順利!</h3>
            <h6>Henry</h6>
          </sliderdiv>
          <sliderdiv>
            <h3>好喜歡這個網站～</h3>
            <h6>BensanN</h6>
          </sliderdiv>
          <sliderdiv>
            <h3>發票通過電子郵件發送</h3>
            <h6>Allen</h6>
          </sliderdiv>
          <sliderdiv>
            <h3>問題都能很好的解決!</h3>
            <h6>Jack</h6>
          </sliderdiv>
        </Slider>
      </div>
    );
  }
}

const cssstyle = `
.container1 {
  margin: 0 auto;
  padding: 0px 40px 60px 40px;
  
}
sliderdiv {
  text-align: center;
}
h3 {
    background:#F5F5F5;
    color: #37434F;
    font-size: 20px;
    line-height: 35px;
    margin: 15px;
    position: relative;
    text-align: center;
    padding:10%;
    font-family:sans-serif;
    
}

.slick-next:before, .slick-prev:before {
    color:#C0C0C0;
    
    
}
.center .slick-center h3 {
    color: #708090;
    opacity: 1;
    -ms-transform: scale(1.08);
    transform: scale(1.08);    
    font-weight:bold;
    font-family:'sans-serif';
}
.center h3 {
    transition: all .3s ease;
}
`;
