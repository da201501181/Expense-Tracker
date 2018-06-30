import React, { Component } from "react";
import Typed from "typed.js";

import "./TypedText.css";

class TypedText extends Component {
  componentDidMount() {
    const { strings } = this.props;
    const options = {
      strings: strings,
      typeSpeed: 70,
      backSpeed: 70,
      loop: true,
      backDelay: 2000,
      startDelay: 1000
    };
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    this.typed.destroy();
  }

  render() {
    return (
      <div className="TypedText">
        <div className="wrap">
          <h1
            style={{
              "font-family": "Helvetica",
              "font-size": "40px",
              "margin-left": "50px"
            }}
          >
            Welcome to Expense Tracker
          </h1>
          <div className="type-wrap">
            <span
              style={{ whiteSpace: "pre" }}
              ref={el => {
                this.el = el;
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default TypedText;
