import React from "react";

import "./ActionBox.css";
const ActionBox = props => {
  return (
    <div
      className="col-lg-6 col-xs-6"
      style={{ textAlign: "center", cursor: "pointer" }}
      onClick={props.onClick}
    >
      <div className={props.className}>
        <div className="inner">
          <h1>{props.title}</h1>

          <p>{props.message}</p>
        </div>
        <div className="icon">
          <i className={props.icon} />
        </div>
      </div>
    </div>
  );
};

export default ActionBox;
