import React, { Component } from "react";
import Prismic from "prismic-javascript";
import ReactCSSTransitionReplace from "react-css-transition-replace";
import "Styles/home.scss";
import Coming from "Components/coming/Coming";
import Soon from "Components/coming/Soon";

import { Switch, Route } from "react-router-dom";

const apiEndpoint = "https://patmartin.prismic.io/api/v2";

class Home extends Component {
  constructor() {
    super();
    this.comingEnter = this.comingEnter.bind(this);
    this.soonEnter = this.soonEnter.bind(this);
    this.state = {
      comingActive: true,
      soonActive: false
    };
  }

  comingEnter() {
    console.log("coming enter");
    this.setState(prevState => ({
      comingActive: !prevState.comingActive,
      soonActive: !prevState.soonActive
    }));
  }

  soonEnter() {
    console.log("soon enter");
    this.setState(prevState => ({
      soonActive: !prevState.soonActive,
      comingActive: !prevState.comingActive
    }));
  }

  render() {
    return (
      <div className="home-wrap">
        <a
          href="https://www.youtube.com/watch?v=L9Wnh0V4HMM"
          onMouseEnter={this.comingEnter}
          target="_blank"
        >
          <div className="left">
            <Coming active={this.state.comingActive} />
          </div>
        </a>
        <a
          href="https://www.youtube.com/watch?v=FFOzayDpWoI"
          onMouseEnter={this.soonEnter}
          target="_blank"
        >
          <div className="right">
            <Soon active={this.state.soonActive} />
          </div>
        </a>
      </div>
    );
  }
}

export default Home;
