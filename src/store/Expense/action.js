import {
  REQUEST_ADD_EXPENSE,
  SUCCESS_ADD_EXPENSE,
  BASE_DB_URL
} from "./constants";
import axios from "axios";

function getLocalStorage() {
  return localStorage.getItem("userUID");
}

function addExpenseRequest() {
  return { type: REQUEST_ADD_EXPENSE };
}

function addExpenseSuccess() {
  return { type: SUCCESS_ADD_EXPENSE };
}

function handleAddExpense(formData) {
  return dispatch => {
    dispatch(addExpenseRequest());
    const userUID = getLocalStorage();
    let url = `${BASE_DB_URL}${userUID}.json`;
    axios
      .post(url, formData)
      .then(response => {
        dispatch(addExpenseSuccess());
      })
      .catch(err => {
        dispatch(addExpenseSuccess());
        console.log(err);
      });
  };
}

export { handleAddExpense };
