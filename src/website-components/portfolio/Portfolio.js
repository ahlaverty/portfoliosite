import React from 'react';
import { Route, Switch, useRouteMatch, BrowserRouter } from 'react-router-dom';

import PortfolioContent from './PortfolioContent';
import ToDoList from '../../todo-list/ToDoList';


import './portfolio.css';

export default function Porfolio() {
	let { path } = useRouteMatch();
	return(
		<BrowserRouter>
			<Switch>
				<Route exact path="/portfolio" component={PortfolioContent} />
				<PortfolioRoute exact path={`${path}/todo-list`}>
					<ToDoList/>
				</PortfolioRoute>
			</Switch>
		</BrowserRouter>

	);
}

 export const PortfolioRoute = ({ component: Component, ...rest}) => {
	return(
	  <Route {...rest} component={(props) => (
		 <>
			<Component {...props} />
		 </>
	  )} />
	);
 };
