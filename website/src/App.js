import React, { useEffect, useState } from "react";
import { Drawer, Login} from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/'>
          <Drawer />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
