import React, { useEffect, useState } from "react";
import { Drawer, Login } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useLocalContext } from "./context/context";
import { IsUserRedirect, ProtectedRoute } from "./routes/Routes";
function App() {
  const { loggedInMail } = useLocalContext();
  return (
    <Router>
      <Switch>
        <IsUserRedirect
          user={loggedInMail}
          loggedInPath="/"
          path="/signin"
          exact
        >
          <Login />
        </IsUserRedirect>

        <ProtectedRoute user={loggedInMail} path="/" exact>
          <Drawer />
        </ProtectedRoute>
      </Switch>
    </Router>
  );
}

export default App;
