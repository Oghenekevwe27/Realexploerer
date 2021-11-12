import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Advertising from "./Pages/Advertising";
// import Navbar from "./Components/Navbar";

const Routercomp = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/">
            {/* <Navbar /> */}
            <Advertising />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Routercomp;
