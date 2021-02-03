import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { Navigation } from "./Components/Navigation_Components/Navigation";
import { Dashboard } from "./Routes/Dashboard";
import { Enter } from "./Routes/Enter";

export const App = () => {
  const { pathname } = useLocation();
  return (
    <>
      {pathname !== "/enter" ? <Navigation /> : null}
      <Switch>
        <Route exact path="/">
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
