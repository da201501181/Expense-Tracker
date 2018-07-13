import React from "react";

import ActionBox from "./ActionBox/ActionBox";

const ActionBoxContainer = props => {
  return (
    <div
      className="row"
      style={{ marginLeft: "10px", marginRight: "10px", marginTop: "50px" }}
    >
      <ActionBox
        className="small-box bg-aqua"
        title="Add new expense"
        message="Fill complete details"
        icon="fa fa-shopping-cart"
        onClick={props.handleAddExpense}
      />

      <ActionBox
        className="small-box bg-green"
        title="View all expenses"
        message="Click to view list of all expenses"
        icon="fa fa-list"
        onClick={props.handleViewExpense}
      />
    </div>
  );
};

export default ActionBoxContainer;
