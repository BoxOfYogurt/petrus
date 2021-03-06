import { useEffect, useState } from "react";
import { TaskInterface } from "../Components/Data";
import { getDateToday } from "../Components/utility";
import { useTheme } from "../Store/useTheme";

export const DeadlineWidget = ({ task }: { task: TaskInterface }) => {
	const { Theme } = useTheme();
	const [daysLeft, setDaysLeft] = useState<(string | boolean)[] | null>(null);

	useEffect(() => {
		setDaysLeft(calculateRemainingTime({ task }));
	}, [task]);
	return (
		<>
			{daysLeft && (
				<>
					{daysLeft[1] ? (
						<div style={Theme.bg_highLight} className='task_info_deadline'>
							<p style={Theme.p}>{daysLeft[0]}</p>
						</div>
					) : (
						<div style={Theme.bg_red} className='task_info_deadline'>
							<p style={Theme.p}>{daysLeft[0]}</p>
						</div>
					)}
				</>
			)}
		</>
	);
};

const calculateRemainingTime = ({ task }: { task: TaskInterface }) => {
	const current_date = getDateToday();
	const { end_date } = task;
	console.log(new Date(1614647612381).toUTCString());

	const end_date_toDate = new Date(end_date);
	let diff_in_Time = end_date_toDate.getTime() - current_date.getTime();
	let diff_in_Days = Math.ceil(diff_in_Time / (1000 * 3600 * 24));

	if (diff_in_Days < 0) {
		if (task.completed) {
			return [`${Math.abs(diff_in_Days)} days ago`, true];
		} else {
			if (diff_in_Days === -1) {
				return [`${Math.abs(diff_in_Days)} day ago`, false];
			} else {
				return [`${Math.abs(diff_in_Days)} days ago`, false];
			}
		}
	}

	if (diff_in_Days === 0) {
		return ["today", true];
	}

	if (diff_in_Days === 1) {
		return ["tomorrow", true];
	}

	if (diff_in_Days <= 360) {
		return [`${diff_in_Days}d`, true];
	}
	return null;
};
