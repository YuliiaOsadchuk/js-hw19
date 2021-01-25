import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/signin" />
        </Route>
        <Route path="/signin" component={SignIn}></Route>
        <Route path="/signup" component={SignUp}></Route>
      </Switch>
    </Router>
  );
};

export default App;
