// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { TaskInterface, useListStore } from "../../Store/useProjectStore";
// import { useTheme } from "../../Store/useTheme";
// import { ListInterface } from "./ListProps";

// import "../../Css/list.css";
// import { getCurrentWeek, getDateToday } from "../utility";

// interface ParamTypes {
//   listId: string;
// }
export const List = () => {
  return <div>hello</div>;
};
// interface listProp {
//   id: number;
//   title: string;
//   status: boolean;
//   category: string;
//   tasks: TaskInterface[];
// }
// export const List = () => {
//   const { Theme } = useTheme();
//   const { listStore, listDispatch } = useListStore();

//   const [list, setList] = useState<listProp>();
//   const { listId } = useParams<ParamTypes>();

//   useEffect(() => {
//     const id: number = parseInt(listId);
//     const index = listStore.findIndex((elem) => elem.id === id);
//     setList(listStore[index]);
//   }, [listStore, listId]);

//   return (
//     <div style={Theme.list_bg} className="list_container">
//       <section className="list_header">
//         <p style={Theme.p_underline}>
//           {list?.category} / {list?.title}
//         </p>
//       </section>
//       <section className="sorted_list_container">
//         {list !== undefined ? <SortedList {...list} /> : null}
//       </section>
//     </div>
//   );
// };

// interface SortByProp {
//   type: string;
// }
// export const SortedList = (prop: listProp) => {
//   const [sort, setSort] = useState({ type: "date" });

//   return (
//     <>
//       <SortList taskArray={prop.tasks} type={sort.type} />
//     </>
//   );
// };

// interface SortedByDateProp {
//   taskToday?: TaskInterface[];
//   taskCurrentWeek?: TaskInterface[];
//   taskPastDeadline?: TaskInterface[];
// }

// export const SortList = ({
//   taskArray,
//   type,
// }: {
//   taskArray: TaskInterface[];
//   type: string;
// }) => {
// const [sortedByDate, setSortedByDate] = useState<SortedByDateProp>(() =>
//   sortByDate(taskArray)
// );
// const today = getDateToday();
// const currentWeek = getCurrentWeek();
// let todaysTasks = [];
// let currentWeekTasks = [];
// console.log(currentWeek);

/* SORTBYDATE */
// tasks.map((task, index) => {
//   if (task.deadline === today) {
//     todaysTasks.push(task)
//   } else if (task.deadline === )
// })

//   return <div>hello</div>;
// };

// const sortByDate = (taskArray: TaskInterface[]) => {
//   let TasksToday = [];
//   let TasksCurrentWeek = [];
//   let TasksPastDeadline = [];

//   return {
//     taskToday: TasksToday,
//     taskCurrentWeek: TasksCurrentWeek,
//     taskPastDeadline: TasksPastDeadline,
//   };
// };

// export const Task = (task: TaskInterface) => {
//   return <h1>{task.taskTitle}</h1>;
// };

// <section>
// {list !== undefined ? (
//   list.tasks.length > 0 ? (
//     list.tasks.map((task: TaskInterface, index) => {
//       return <Task key={task.id} {...task} />;
//     })
//   ) : (
//     <h1>Its empty</h1>
//   )
// ) : null}
// </section>
