import React, { useEffect, useState } from "react";
import { Drawer, Login } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useLocalContext } from "./context/context";
function App() {
  const {loggedInMail} = useLocalContext();
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Drawer />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
