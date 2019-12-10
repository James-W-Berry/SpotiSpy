import React, { Component, Fragment } from "react";
import Fab from "@material-ui/core/Fab";
import pull_up from "../../images/pull_up.png";
import pull_down from "../../images/pull_down.png";
import local_map from "../../images/local_map.png";

class LocalMapButton extends Component {
  state = { open: false };

  toggle = () => {
    this.setState(prevState => ({ open: !prevState.open }));
  };

  render() {
    return (
      <Fragment>
        <Fab
          style={{
            position: "absolute",
            justifyContent: "center",
            top: -80,
            outline: "none",
            width: "74px",
            height: "74px",
            background: "rgba(0,0,0,0.2)"
          }}
          aria-label="open map"
          onClick={() => {
            this.toggle();
            this.props.slideCallback();
          }}
        >
          {this.state.open ? (
            <img
              style={{
                position: "absolute",
                justifyContent: "center",
                outline: "none",
                width: "74px",
                height: "74px"
              }}
              src={pull_down}
              alt="map"
            />
          ) : (
            <img
              style={{
                position: "absolute",
                justifyContent: "center",
                outline: "none",
                width: "74px",
                height: "74px"
              }}
              src={pull_up}
              alt="map"
            />
          )}
        </Fab>
      </Fragment>
    );
  }
}

export default LocalMapButton;
