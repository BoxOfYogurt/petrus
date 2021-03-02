import { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { useProjectStore } from "../../Store/useProjectStore";
import { TaskInterface } from "../Data";
import { getTasksByDate, TaskArrayWithAdditionalInfo } from "../utility";

interface Props {
	date: string;
}

export const CalendarTasks: React.FC<RouteComponentProps<Props>> = ({
	match,
}) => {
	const [taskArray, setTaskArray] = useState<TaskArrayWithAdditionalInfo[]>([]);
	const { projectStore } = useProjectStore();

	useEffect(() => {
		if (match) {
			setTaskArray(getTasksByDate(match.params.date, projectStore));
		}
	}, [match, projectStore]);
	return (
		<div>
			{taskArray.map((task) => {
				return (
					<div key={task.id}>
						<h1>{task.task_title}</h1>
					</div>
				);
			})}
		</div>
	);
};
