import { React, Component } from "react";

import cx from "clsx";
import {
  Avatar,
  CardMedia,
  CardActions,
  Collapse,
  CardActionArea,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
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
import { BsFillTrashFill } from "react-icons/bs";

export default class myProjectItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      deCapacity: this.props.deCapacity,
      profileLike: this.props.profileLike,

      expanded: false,
      popen: false,
    };
  }
  componentDidMount() {}

  componentWillUnmount() {}

  handleClose = () => {
    this.setState((prestate) => ({ popen: !prestate.popen }));
  };
  render() {
    const { _id, P_Name, type, P_Content1, P_Image } = this.state.data;
    const { popen } = this.state;
    const { clickDelete } = this.props;
    const { handleClose } = this;
    const { expanded } = this.state;
    const wwww = `/Pcontent/${_id}`;
    const { user } = this.props;

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
            <IconButton
              onClick={() => this.setState((prestate) => ({ popen: !popen }))}
            >
              <BsFillTrashFill />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>方案簡介:</Typography>
              <Typography paragraph>{P_Content1}</Typography>
            </CardContent>
          </Collapse>
        </Card>
        <Dialog
          open={popen}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"確定要刪除此方案?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              確定刪除
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              再想想
            </Button>
            <Button
              onClick={() => {
                clickDelete(_id);
                this.setState((prestate) => ({ popen: !prestate.popen }));
              }}
              color="primary"
              autoFocus
            >
              確定
            </Button>
          </DialogActions>
        </Dialog>
      </Col>
    );
  }
}
