import React, { Component } from "react";
import { connect } from "react-redux";

import ActionBoxContainer from "../ActionBoxContainer/ActionBoxContainer";
import Modal from "../UI/Modal/Modal";
import AddExpenseForm from "../AddExpense/AddExpense";
import { handleAddExpense } from "../../store/Expense/action";
import Spinner from "../UI/Spinner/Spinner";

class DashboardContainer extends Component {
  state = {
    showAddExpenseModal: false
  };

  handleAddExpense = () => {
    this.setState({ showAddExpenseModal: true });
  };

  handleViewExpense = () => {
    this.props.history.push("/view/expense");
  };

  hideAddExpenseModal = () => {
    this.setState({ showAddExpenseModal: false });
  };

  handleAddExpenseFormSubmit = formData => {
    this.props.addExpense(formData);
  };

  render() {
    const { showAddExpenseModal } = this.state;
    const { isLoading, addExpenseSuccess } = this.props;
    let success = addExpenseSuccess ? (
      <h4>Expense added successfully</h4>
    ) : null;
    let addExpenseModal = showAddExpenseModal ? (
      <Modal show={showAddExpenseModal} modalClosed={this.hideAddExpenseModal}>
        {isLoading ? (
          <Spinner show={true} />
        ) : (
          <AddExpenseForm
            modalClosed={this.hideAddExpenseModal}
            onFormSubmit={this.handleAddExpenseFormSubmit}
          />
        )}
        {success}
      </Modal>
    ) : null;
    return (
      <div>
        {addExpenseModal}
        <ActionBoxContainer
          handleAddExpense={this.handleAddExpense}
          handleViewExpense={this.handleViewExpense}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ expenseReducer }) => {
  const { isLoading, addExpenseSuccess } = expenseReducer;
  return {
    isLoading,
    addExpenseSuccess
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addExpense: formData => dispatch(handleAddExpense(formData))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardContainer);
