import React, { Component } from "react";
import { connect } from "react-redux";

import Form from "../../UI/Form/Form";
import { handleLogin } from "../../../store/Auth/action";

class LoginContainer extends Component {
  handleFormSubmit = authData => {
    this.props.handleAuth(authData);
  };

  render() {
    return (
      <div>
        <Form
          {...this.props}
          isLoading={this.props.isLoading}
          authModeLogin={true}
          onFormSubmit={this.handleFormSubmit}
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
    handleAuth: authData => dispatch(handleLogin(authData))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
