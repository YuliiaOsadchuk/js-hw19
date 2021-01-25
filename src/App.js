import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

const App = () => (
  <Router>
    <Switch>
      <Route path="/signin" component={SignIn}></Route>
      <Route path="/signup" component={SignUp}></Route>
      <Redirect to="/signin" />
    </Switch>
  </Router>
);

export default App;
