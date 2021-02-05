import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { Navigation } from "./Components/Navigation_Components/Navigation";
import { Dashboard } from "./Routes/Dashboard";
import { Enter } from "./Routes/Enter";
import "./Css/index.css";
import { Home } from "./Routes/Home";

export const App = () => {
  const { pathname } = useLocation();
  return (
    <>
      {pathname !== "/enter" ? <Navigation /> : null}
      <Switch>
        <Route exact path="/">
          {/* DashBoard */}
          <Home />
        </Route>
        <Route path="/list">
          {/* DashBoard */}
          <Dashboard />
        </Route>
        <Route exact path="/enter">
          {/* Enter Components | Login | Register */}
          <Enter />
        </Route>
      </Switch>
    </>
  );
};
