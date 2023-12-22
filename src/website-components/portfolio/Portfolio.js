import React from "react";
import { Route, Switch, useRouteMatch, BrowserRouter } from "react-router-dom";

import PortfolioContent from "./PortfolioContent";
// import ToDoList from "../../todo-list/ToDoList";
import TaskDashboard from "../../task-dashboard/Dashboard";

import "./portfolio.css";

export default function Porfolio() {
  let { path } = useRouteMatch();
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/portfolio">
          <PortfolioContent />
        </Route>
        {/* <Route exact path={`${path}/todo-list`}>
					<ToDoList/>
				</Route> */}
        <Route exact path={`${path}/task-dashboard`}>
          <TaskDashboard />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
