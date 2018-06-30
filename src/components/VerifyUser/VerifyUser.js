import React from "react";
import { checkEmailVerified } from "../../store/Auth/action";
import { connect } from "react-redux";
const VerifyUser = props => {
  console.log(props);
  return (
    <div>
      <h1>Verification sent</h1>
      <button onClick={() => props.get(props.location.search.substring(9))}>
        Click{" "}
      </button>
    </div>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    get: idToken => dispatch(checkEmailVerified(idToken))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(VerifyUser);
