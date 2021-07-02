import { React, Component } from "react";

import cx from "clsx";
import {
  Avatar,
  CardMedia,
  CardActions,
  Collapse,
  CardActionArea,
} from "@material-ui/core/";
import Card from "@material-ui/core/Card";
import { Col } from "react-bootstrap";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import "./Pcss.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import like from "../images/like.png";
import unlike from "../images/unlike.png";

export default class ProjectItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      deCapacity: this.props.deCapacity,
      profileLike: this.props.profileLike,
      islike: this.props.islike,
      expanded: false,
    };
  }
  componentDidMount() {}

  componentWillUnmount() {}

  // updateDB = (idToUpdate, updateToApply) => {

  //   axios
  //     .post("http://localhost:3002/api/UpdateData", {
  //       id: idToUpdate,
  //       update: {
  //         like: { 0: 2 },
  //       },
  //     })
  //     .then((docs) => {
  //       console.log(docs);
  //     });
  // };

  handleLike = (id) => {
    const { profileId, profileLike } = this.props;
    const isexist = profileLike[0].includes(id);
    console.log(isexist);

    if (isexist) {
      const wherelikeitem = profileLike[0].findIndex(
        (element) => element === id
      );
      console.log(wherelikeitem);
      profileLike[0].splice(wherelikeitem, 1);
    } else {
      profileLike[0].push(id);
    }

    fetch("/updatelikeitem", {
      method: "POST",
      body: JSON.stringify({
        id: profileId,
        like: profileLike[0],
      }),
      // headers: {
      //   "Content-type": "application/json; charset=UTF-8",
      // },
    })
      .then((response) =>
        response.json().then((data) => {
          //Like item is success upload
          console.log(data["message"]);
          console.log("Success:", response);
        })
      )
      .catch((error) => console.error("Error:", error));
    // .then((response) => {
    //   console.log("Success:", response);
    // });
    // profileLike[0].push(id);
    // console.log(profileLike[0]);
    // this.updateDB(profileId, profileLike);
    this.setState({ islike: !this.state.islike });
  };

  Plike = () => {
    const newItems = this.state.data.map((data) => ({
      ...data,
      like: this.props.profileLike[0].includes(data._id),
    }));
    this.setState(() => ({ data: newItems }));
  };

  render() {
    const { _id, P_Name, type, P_Content1, price, P_Image } = this.state.data;
    const Capacity = localStorage.getItem("deC") * price;
    const { expanded, islike } = this.state;
    const wwww = `/Pcontent/${_id}`;
    const { user } = this.props;
    // console.log(profileLike[0].includes(_id));
    // console.log("islike");
    // console.log(islike);
    return (
      <Col lg={4} md={6}>
        <Card
          className="Itemroot"
          style={{
            display: "inline-block",
            padding: "5px",
            width: "100%",
            margin: " 5px 40px 0px 20px",
            // borderRadius: "30px",
            // border: "3px solid #a4a6a8",
          }}
        >
          <CardActionArea>
            <Link
              to={{
                pathname: wwww,
                state: this.state.data,
              }}
              style={{ textDecoration: "none", color: "black" }}
            >
              <CardHeader
                className="ellipsis"
                avatar={
                  <Avatar aria-label="recipe" className="avatar">
                    {_id}
                  </Avatar>
                }
                title={P_Name}
                subheader=""
              />

              <CardMedia className="media" image={P_Image} title={type} />

              <CardContent className="box" style={{ padding: "5px" }}>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  component="span"
                  className={(cx("Itemroot", "content"), "ellipsis")}
                >
                  {P_Content1}
                </Typography>
              </CardContent>
            </Link>
          </CardActionArea>

          <CardContent style={{ padding: "5px" }} className="itemf">
            <Typography
              variant="body2"
              component="div"
              className={(cx("Itemroot", "content"), "ellipsis")}
              style={{ fontWeight: "bold", fontSize: "18px", color: "#929292" }}
            >
              預估價錢：{Capacity}
            </Typography>
          </CardContent>

          <CardActions
            disableSpacing
            style={{ padding: "5px" }}
            className="itemf"
          >
            了解更多
            <IconButton
              className={cx("expend", {
                ["expandOpen"]: expanded,
              })}
              onClick={() =>
                this.setState((prestate) => ({ expanded: !expanded }))
              }
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
            {user ? (
              <img
                src={islike ? like : unlike}
                style={{ position: "absolute", right: "10px", width: "20px" }}
                onClick={() => this.handleLike(_id)}
              ></img>
            ) : null}
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>方案簡介:</Typography>
              <Typography paragraph>{P_Content1}</Typography>
            </CardContent>
          </Collapse>
        </Card>
      </Col>
    );
  }
}
