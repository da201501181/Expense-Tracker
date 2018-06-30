import React, { Component } from "react";
import $ from "jquery";

import "./Navbar.css";

class Navbar extends Component {
  componentDidMount() {
    $(document).ready(function() {
      $(window).scroll(function() {
        if ($(document).scrollTop() > 70) {
          $(".navbar").addClass("shrink");
        } else {
          $(".navbar").removeClass("shrink");
        }
      });
    });
  }

  render() {
    return (
      <div className="Navbar">
        <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
          <div className="container">
            <span className="color-me">Expense Tracker</span>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <button
                    className="btn btn-link nav-link"
                    onClick={this.props.ShowSignInContainer}
                  >
                    <span style={{ color: "#fff" }}>Sign In</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
