import { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { useProjectStore } from "../../Store/useProjectStore";
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
			let newDate = new Date(match.params.date);

			console.log(newDate);
			setTaskArray(getTasksByDate(newDate, projectStore));
		}
	}, [match, projectStore]);
	return (
		<div>
			{taskArray.map((task) => {
				return (
					<div key={task.id}>
						<h1>{task.id}</h1>
					</div>
				);
			})}
		</div>
	);
};
