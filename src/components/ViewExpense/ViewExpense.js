import React, { Component } from "react";
import axios from "axios";

import DataTable from "../DataTable/DataTable";
import Spinner from "../UI/Spinner/Spinner";

class ViewExpense extends Component {
  state = {
    data: null
  };
  componentDidMount() {
    axios
      .get(
        `https://expense-tracker-171998.firebaseio.com/${localStorage.getItem(
          "userUID"
        )}.json`
      )
      .then(({ data }) => {
        console.log(data);
        this.setState({ data: data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleEdit = index => {
    console.log(index);
  };

  handleDelete = index => {
    const keyToBeDeleted = Object.keys(this.state.data)[index];
    for (let key in this.state.data) {
      console.log(key);
    }
    console.log(index);
    axios.delete(
      `https://expense-tracker-171998.firebaseio.com/${localStorage.getItem(
        "userUID"
      )}/${keyToBeDeleted}.json`
    );
  };

  render() {
    return (
      <div className="container">
        <h1>List of all expenses</h1>
        {this.state.data ? (
          <DataTable
            data={this.state.data}
            handleEdit={this.handleEdit}
            handleDelete={this.handleDelete}
          />
        ) : (
          <Spinner />
        )}
      </div>
    );
  }
}
export default ViewExpense;
