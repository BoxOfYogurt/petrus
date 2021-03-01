import { FocusInterface } from "../Pages/ProjectPage";
import { CalendarConfig } from "./Calendar_Components/Calendar_utility";
import { CategoryInterface, TaskInterface } from "./Data";
import { Project } from "./Project_Components/Project";

export const getDateToday = () => {
	const day = new Date();
	return new Date(day.getFullYear(), day.getMonth(), day.getDate());
};

export const getCurrentWeek = () => {
	const today = getDateToday();
	const startOfWeekDate = new Date(
		today.getFullYear(),
		today.getMonth(),
		today.getDate() + 1 - today.getDay()
	);
	const endOfWeekDate = new Date(
		today.getFullYear(),
		today.getMonth(),
		today.getDate() - today.getDay() + 7
	);

	let currentWeek = [];
	for (let i = startOfWeekDate.getDate(); i <= endOfWeekDate.getDate(); i++) {
		let date = new Date(today.getFullYear(), today.getMonth(), i);
		currentWeek.push(date);
	}

	return currentWeek;
};

export const checkDateToCurrentWeek = (date: Date): boolean => {
	const today = getDateToday();

	return true;
};

// This function must take in a ISOStringDate...
//...It also takes the complete ProjectStore
//...returns the tasks that corresponds with the calendar_date
export const getTasksByDate = (
	calendar_date: string,
	store: CategoryInterface[]
) => {
	let taskArray: TaskInterface[] = [];

	store.forEach((category) => {
		category.projects.forEach((project) => {
			project.sub_categories.forEach((sub_category) => {
				sub_category.tasks.forEach((task) => {
					if (task.end_date.split("T")[0] === calendar_date.split("T")[0]) {
						taskArray = [...taskArray, task];
					}
				});
			});
		});
	});
	return taskArray;
};

export const getSomething = (
	projectIdentifier: string,
	categories: CategoryInterface[]
): any => {
	categories.forEach((category, category_index) => {
		let project_index = category.projects.findIndex(
			(elem) => elem.id === projectIdentifier
		);
		if (project_index !== -1) {
			const payload = {
				category_idx: category_index,
				project_idx: project_index,
				category_id: categories[category_index].id,
				project_id: projectIdentifier,
			};
			//Return payload
			return payload;
		} else {
			return null;
		}
	});
};
