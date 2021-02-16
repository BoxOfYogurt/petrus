import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { Navigation } from "./Components/Navigation_Components/Navigation";
import { ListPage } from "./Pages/ListPage";
import { Enter } from "./Pages/Enter";
import "./Css/index.css";
import { DashBoard } from "./Pages/DashBoard";
import { CalendarPage } from "./Pages/CalendarPage";
import { NotePage } from "./Pages/NotePage";

export const App = () => {
  const { pathname } = useLocation();

  return (
    <>
      {pathname !== "/enter" ? <Navigation /> : null}
      <Switch>
        <Route exact path="/">
          {/* DashBoard */}
          <DashBoard />
        </Route>
        <Route path="/list">
          {/* DashBoard */}
          <ListPage />
        </Route>
        <Route path="/calendar">
          {/* Calendar */}
          <CalendarPage />
        </Route>
        <Route path="/notes">
          {/* Calendar */}
          <NotePage />
        </Route>
        <Route exact path="/enter">
          {/* Enter Components | Login | Register */}
          <Enter />
        </Route>
      </Switch>
    </>
  );
};
