import React, { Component } from "react";
import { connect } from "react-redux";

import { reset } from "../../store/Auth/action";
import Footer from "../UI/Footer/Footer";
import Modal from "../UI/Modal/Modal";
import Navbar from "../UI/Navbar/Navbar";
import Parallax from "../UI/Parallax/Parallax";
import Section from "../UI/Section/Section";
import LoginContainer from "../Login/LoginContainer/LoginContainer";
import SignUpContainer from "../SignUp/SignUpContainer/SignUpContainer";
import {
  ADD_EXPENSES_BY_CATEGORY,
  TRACK_EXPENSES,
  VIEW_EXPENSES,
  CATEGORY_IMAGE_PATH,
  TRACK_EXPENSES_IMAGE_PATH,
  LIST_IN_TABLE_IMAGE_PATH
} from "./constants";

class LandingPageContainer extends Component {
  state = {
    showSignInForm: false,
    showSignUpForm: false
  };

  showSignInContainer = () => {
    this.props.onSwitchingForm();
    this.hideSignUpContainer();
    this.setState({ showSignInForm: true });
  };

  hideSignInContainer = () => {
    this.props.onSwitchingForm();
    this.setState({ showSignInForm: false });
  };

  showSignUpContainer = () => {
    this.props.onSwitchingForm();
    this.hideSignInContainer();
    this.setState({ showSignUpForm: true });
  };

  hideSignUpContainer = () => {
    this.props.onSwitchingForm();
    this.setState({ showSignUpForm: false });
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.sendEmailVerification) {
      this.props.history.push({
        pathname: "/verify",
        search: `?idToken=${nextProps.firebaseIdToken}`
      });
    }
  }

  render() {
    const { showSignInForm, showSignUpForm } = this.state;

    let Container;
    if (showSignInForm) {
      Container = (
        <Modal show={showSignInForm} modalClosed={this.hideSignInContainer}>
          <LoginContainer showSignUpContainer={this.showSignUpContainer} />
        </Modal>
      );
    } else if (showSignUpForm) {
      Container = (
        <Modal
          show={showSignUpForm}
          modalClosed={this.hideSignUpContainer}
          height="400px"
        >
          <SignUpContainer showSignInContainer={this.showSignInContainer} />
        </Modal>
      );
    }
    return (
      <div>
        <Navbar ShowSignInContainer={this.showSignInContainer} />
        <Parallax />
        <Section
          image={require("../../images/Add_by_category.jpg")}
          heading={ADD_EXPENSES_BY_CATEGORY}
          para=""
          classname_img="col-lg-6 order-lg-2"
          classname_text="col-lg-6 order-lg-1"
        />
        <Section
          image={require("../../images/expenses_by_category.jpg")}
          heading={TRACK_EXPENSES}
          para=""
          classname_img="col-lg-6 order-lg-1"
          classname_text="col-lg-6 order-lg-2"
        />
        <Section
          image={require("../../images/list_in_table.jpg")}
          heading={VIEW_EXPENSES}
          para=""
          classname_img="col-lg-6 order-lg-2"
          classname_text="col-lg-6 order-lg-1"
        />
        <Footer />
        {Container}
      </div>
    );
  }
}
const mapStateToProps = ({ LoginReducer }) => {
  const { sendEmailVerification, firebaseIdToken } = LoginReducer;

  return {
    sendEmailVerification,
    firebaseIdToken
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onSwitchingForm: () => dispatch(reset())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingPageContainer);
