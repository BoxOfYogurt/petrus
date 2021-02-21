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
  console.log(taskArray);
  return taskArray;
};
