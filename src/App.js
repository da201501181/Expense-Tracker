import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import LandingPageContainer from "./components/LandingPageContainer/LandingPageContainer";
import VerifyUser from "./components/VerifyUser/VerifyUser";
import Dashboard from "./components/DashboardContainer/DashboardContainer";
import ViewExpense from "./components/ViewExpense/ViewExpense";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={LandingPageContainer} />
        <Route path="/verify" component={VerifyUser} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/view/expense" component={ViewExpense} />
      </div>
    </Router>
  );
};
export default App;
