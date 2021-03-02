import { CalendarNavigation } from "../Components/Calendar_Components/CalendarNavigation";
import { useTheme } from "../Store/useTheme";
import { CalendarTasks } from "../Components/Calendar_Components/CalendarTasks";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import React from "react";

export const CalendarPage = () => {
	const { Theme } = useTheme();
	let { path } = useRouteMatch();

	return (
		<div style={Theme.page} className='Page_container calendarPage'>
			<CalendarNavigation />
			<Switch>
				<Route exact path={`${path}/:date`} component={CalendarTasks} />
			</Switch>
		</div>
	);
};
