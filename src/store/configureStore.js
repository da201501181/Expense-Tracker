import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import LoginReducer from "./Auth/reducer";
import expenseReducer from "./Expense/reducer";
// Enable redux-logger in all environments other than production
const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const middlewareList =
  process.env.NODE_ENV !== "production"
    ? composeEnhancers(applyMiddleware(thunk, createLogger()))
    : composeEnhancers(applyMiddleware(thunk));

// App reducer
const appReducer = combineReducers({ LoginReducer, expenseReducer });

/**
 * Root reducer
 * @param  {Object} state Current state
 * @param  {Object} action Action
 * @returns {Object} App reducer
 */
const rootReducer = (state, action) => {
  return appReducer(state, action);
};

// Create store
const configureStore = () => createStore(rootReducer, middlewareList);

export default configureStore;
