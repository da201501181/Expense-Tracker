import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import LandingPageContainer from "./components/LandingPageContainer/LandingPageContainer";
import VerifyUser from "./components/VerifyUser/VerifyUser";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={LandingPageContainer} />
        <Route path="/verify" component={VerifyUser} />
      </div>
    </Router>
  );
};
export default App;
