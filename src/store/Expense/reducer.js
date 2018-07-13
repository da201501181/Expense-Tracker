import { REQUEST_ADD_EXPENSE, SUCCESS_ADD_EXPENSE } from "./constants";

// Initial state
const initialState = {
  isLoading: false,
  error: null,
  addExpenseSuccess: false
};

// Reducer
const expenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_ADD_EXPENSE:
      return {
        ...state,
        isLoading: true
      };
    case SUCCESS_ADD_EXPENSE:
      return {
        ...state,
        isLoading: false,
        addExpenseSuccess: true
      };
    default:
      return state;
  }
};

export default expenseReducer;
