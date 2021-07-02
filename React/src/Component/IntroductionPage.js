import React, { Component } from "react";

import { Box, Button } from "@material-ui/core/";
import { red, blue, green } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import { AutoRotatingCarousel } from "material-auto-rotating-carousel";
export default class IntroductionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const styles = {
      root: {
        backgroundColor: red[600],
        height: 400,
        width: 800,
      },
      media: {
        backgroundColor: red[400],
      },
    };

    const StyledSlide = withStyles(styles)(Slide);

    return (
      <Box>
        <div style={{ position: "relative", width: "100%", height: 500 }}>
          <Button onClick={() => {}}>Open carousel</Button>
          <AutoRotatingCarousel
            label="Get started"
            open={1}
            onClose={() => {}}
            onStart={() => {}}
            style={{ position: "absolute" }}
          >
            <Slide
              media={
                <img src="http://www.icons101.com/icon_png/size_256/id_79394/youtube.png" />
              }
              mediaBackgroundStyle={{ backgroundColor: red[400] }}
              style={{ backgroundColor: red[600] }}
              title="This is a very cool feature"
              subtitle="Just using this will blow your mind."
            />
            <Slide
              media={
                <img src="http://www.icons101.com/icon_png/size_256/id_80975/GoogleInbox.png" />
              }
              mediaBackgroundStyle={{ backgroundColor: blue[400] }}
              style={{ backgroundColor: blue[600] }}
              title="Ever wanted to be popular?"
              subtitle="Well just mix two colors and your are good to go!"
            />
            <Slide
              media={
                <img src="http://www.icons101.com/icon_png/size_256/id_76704/Google_Settings.png" />
              }
              mediaBackgroundStyle={{ backgroundColor: green[400] }}
              style={{ backgroundColor: green[600] }}
              title="May the force be with you"
              subtitle="The Force is a metaphysical and ubiquitous power in the Star Wars fictional universe."
            />
          </AutoRotatingCarousel>
        </div>
      </Box>
    );
  }
}
