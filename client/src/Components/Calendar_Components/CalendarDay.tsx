import React, { useEffect, useState } from "react";
import { useProjectStore } from "../../Store/useProjectStore";
import { useTheme } from "../../Store/useTheme";
import { TaskInterface } from "../Data";
import { getTasksByDate } from "../utility";
import { CalendarConfig, InitialDateProp } from "./Calendar_utility";

import { ReactComponent as SquareIcon } from "../../Svg/SquareIcon.svg";
import { useHistory, useRouteMatch } from "react-router-dom";

interface Props {
	date: string;
}

export const CalendarDay = ({
	dateItem,
	selected,
	today,
}: {
	dateItem: CalendarConfig;
	selected: InitialDateProp;
	today: Date;
}) => {
	const { Theme } = useTheme();
	const { projectStore } = useProjectStore();
	const [TaskArray, setTaskArray] = useState<TaskInterface[] | []>([]);

	let history = useHistory();
	let { path } = useRouteMatch();
	let match = useRouteMatch<{ date: string }>(`${path}/:date`);

	const viewTasks = (e: React.MouseEvent<HTMLDivElement>) => {
		console.log(dateItem);

		history.push(
			`${path}/${dateItem.year}-${dateItem.monthIndex}-${dateItem.dayDate}`
		);
	};

	useEffect(() => {
		if (today.toDateString() === dateItem.fullDate.toDateString()) {
			console.log(dateItem.fullDate.toISOString());
			console.log(
				projectStore[0].projects[0].sub_categories[0].tasks[0].end_date
			);
		}
		setTaskArray(getTasksByDate(dateItem.fullDate, projectStore));
	}, [projectStore, dateItem, today]);
	// useEffect(() => {
	// 	if (dateItem) {
	// 		setTaskArray(getTasksByDate(formatedDate, projectStore));
	// 	}
	// }, [projectStore, dateItem, formatedDate]);

	return (
		<>
			<div
				onClick={TaskArray.length > 0 ? viewTasks : undefined}
				className='calendar_item'
				key={dateItem.fullDate.toDateString()}
				style={
					dateItem.monthIndex === selected.month
						? { color: "black" }
						: { color: "black", opacity: "0.5" }
				}>
				<p style={Theme.p} className='dateNumber_p'>
					{dateItem.dayDate}
				</p>
				{dateItem.fullDate.toDateString() === today.toDateString() ? (
					<SquareIcon style={Theme.svg_default} className='today_svg' />
				) : null}
				{match?.params.date ===
					`${dateItem.year}-${dateItem.monthIndex}-${dateItem.dayDate}` &&
					TaskArray.length > 0 && (
						<SquareIcon style={Theme.svg_remove} className='today_svg' />
					)}
				{TaskArray.length > 0 && (
					<Circle css='task_dot_svg' size={3} fill={Theme.svg_default} />
				)}
			</div>
		</>
	);
};

export const Circle = ({
	size,
	css,
	stroke,
	fill,
}: {
	size: number;
	css?: string;
	stroke?: number;
	fill?: { fill: string };
}) => {
	let isStroke = 0;
	if (stroke) {
		isStroke = stroke;
	}
	return (
		<>
			<svg width={size} height={size} className={css}>
				<circle
					style={fill}
					cx={size / 2}
					cy={size / 2}
					r={size / 2 - isStroke}
					strokeWidth={0}></circle>
			</svg>
		</>
	);
};
