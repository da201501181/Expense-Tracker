import React, { Component } from "react";
import { connect } from "react-redux";

import Form from "../../UI/Form/Form";
import { auth, handleSignUp } from "../../../store/Auth/action";

class SignUpContainer extends Component {
  handleFormSubmit = authData => {
    this.props.handleAuth(authData, "signUp");
    console.log(authData);
  };

  render() {
    console.log("singupcon");
    return (
      <div>
        <Form
          {...this.props}
          authModeSignUp={true}
          onFormSubmit={this.handleFormSubmit}
          error={this.props.error}
        />
      </div>
    );
  }
}
/**
 * Map state to component properties
 * @param {Object} login Login state information
 * @returns A plain object, which will be merged into the component’s props.
 */
const mapStateToProps = ({ LoginReducer }) => {
  const { isLoading, error } = LoginReducer;

  return {
    isLoading,
    error
  };
};

/**
 * Map dispatch to component properties
 * @param {function} dispatch
 * @returns An object with the same function names, but with every action creator wrapped into a dispatch call so they may be invoked directly, will be merged into the component’s props.
 */
const mapDispatchToProps = dispatch => {
  return {
    handleAuth: authData => dispatch(handleSignUp(authData))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpContainer);
