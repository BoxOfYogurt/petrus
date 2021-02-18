import React, { createContext, useContext, useReducer } from "react";
import {
  Data,
  CategoriesInterface,
  ProjectsInterface,
  SubCategoriesInterface,
  TaskInterface,
} from "../Components/Data";

enum ActionType {
  ADD_CATEGORY = "ADD_CATEGORY",
  ADD_PROJECT = "ADD_PROJECT",
  ADD_SUB_CATEGORY = "ADD_SUB_CATEGORY",
  ADD_TASK = "ADD_TASK",
  UPDATE_CATEGORY = "UPDATE_CATEGORY",
  UPDATE_PROJECT = "UPDATE_PROJECT",
  UPDATE_SUB_CATEGORY = "UPDATE_SUB_CATEGORY",
  UPDATE_TASK = "UPDATE_TASK",
  REMOVE_CATEGORY = "REMOVE_CATEGORY",
  REMOVE_PROJECT = "REMOVE_PROJECT",
  REMOVE_SUB_CATEGORY = "REMOVE_SUB_CATEGORY",
  REMOVE_TASK = "REMOVE_TASK",
}
interface ProjectActions {
  type: ActionType;
  category_id: number;
  project_id?: number;
  sub_category_id?: number;
  task_id?: number;
  category_payload?: CategoriesInterface;
  project_payload?: ProjectsInterface;
  sub_category_payload?: SubCategoriesInterface;
  task_payload?: TaskInterface;
}

interface ContextProps {
  projectStore: CategoriesInterface[];
  projectDispatch: React.Dispatch<ProjectActions>;
}

export const ProjectContext = createContext({} as ContextProps);
export const ProjectProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const StoreReducer: React.Reducer<CategoriesInterface[], ProjectActions> = (
    state,
    action
  ) => {
    let reducerStore = [...state];
    let category_idx = reducerStore.findIndex(
      (elem) => elem.id === action.category_id
    );
    let project_idx = reducerStore[category_idx].projects.findIndex(
      (elem) => elem.id === action.project_id
    );
    let sub_category_idx = reducerStore[category_idx].projects[
      project_idx
    ].sub_categories.findIndex((elem) => elem.id === action.sub_category_id);
    let task_idx = reducerStore[category_idx].projects[
      project_idx
    ].sub_categories[sub_category_idx].tasks.findIndex(
      (elem) => elem.id === action.task_id
    );
    switch (action.type) {
      /*  ===============
          SWITCH CONTENT
          =============== 
          UPDATE
      */

      case ActionType.UPDATE_CATEGORY:
        if (action.category_payload) {
          reducerStore[category_idx] = {
            ...reducerStore[category_idx],
            color_code: action.category_payload.color_code,
            category_title: action.category_payload.category_title,
          };
          return (state = reducerStore);
        } else {
          return state;
        }
      case ActionType.UPDATE_PROJECT:
        if (action.project_payload) {
          reducerStore[category_idx].projects[project_idx] = {
            ...reducerStore[category_idx].projects[project_idx],
            project_title: action.project_payload.project_title,
          };
          return (state = reducerStore);
        } else {
          return state;
        }
      case ActionType.UPDATE_SUB_CATEGORY:
        if (action.sub_category_payload) {
          reducerStore[category_idx].projects[project_idx].sub_categories[
            sub_category_idx
          ] = {
            ...reducerStore[category_idx].projects[project_idx].sub_categories[
              sub_category_idx
            ],
            sub_category_title: action.sub_category_payload.sub_category_title,
          };
          return (state = reducerStore);
        } else {
          return state;
        }
      case ActionType.UPDATE_TASK:
        if (action.task_payload) {
          reducerStore[category_idx].projects[project_idx].sub_categories[
            sub_category_idx
          ].tasks[task_idx] = {
            ...reducerStore[category_idx].projects[project_idx].sub_categories[
              sub_category_idx
            ].tasks[task_idx],
            task_title: action.task_payload.task_title,
            task_description: action.task_payload.task_description,
            completed: action.task_payload.completed,
            status_level: action.task_payload.status_level,
            end_date: action.task_payload.end_date,
          };
          return (state = reducerStore);
        } else {
          return state;
        }
      default:
        return state;
    }
  };

  const [projectStore, projectDispatch] = useReducer<
    React.Reducer<CategoriesInterface[], ProjectActions>
  >(StoreReducer, Data);
  return (
    <ProjectContext.Provider
      value={{ projectStore, projectDispatch }}
      children={children}
    />
  );
};

export const useProjectStore = () => useContext(ProjectContext);

// export const dataArray = [
//   {
//     id: 1,
//     title: "AniShare",
//     status: false,
//     category: "Projects",
//     tasks: [
//       {
//         id: 1,
//         taskTitle: "Create backend",
//         completed: false,
//         deadline: getDateToday(),
//         level: "Important",
//       },
//       {
//         id: 2,
//         taskTitle: "Create Frontend",
//         completed: false,
//         deadline: getDateToday(),
//         level: "Important",
//       },
//       {
//         id: 3,
//         taskTitle: "Push to Heroku",
//         completed: false,
//         deadline: getDateToday(),
//         level: "Important",
//       },
//     ],
//   },
//   {
//     id: 2,
//     title: "Tennis",
//     status: true,
//     category: "Training",
//     tasks: [
//       {
//         id: 4,
//         taskTitle: "Practice Shoots",
//         completed: false,
//         deadline: getDateToday(),
//         level: "Important",
//       },
//       {
//         id: 5,
//         taskTitle: "Practice Serves",
//         completed: false,
//         deadline: getDateToday(),
//         level: "Important",
//       },
//       {
//         id: 6,
//         taskTitle: "Practice match with John Doe",
//         completed: false,
//         deadline: getDateToday(),
//         level: "Normal",
//       },
//     ],
//   },
//   { id: 3, title: "Comicon", status: false, category: "Meetings", tasks: [] },
//   { id: 4, title: "Dinner", status: false, category: "Family", tasks: [] },
//   { id: 5, title: "ShoppingList", status: true, category: "Wife", tasks: [] },
//   { id: 6, title: "Agenda", status: false, category: "Personal", tasks: [] },
//   { id: 7, title: "twitter", status: false, category: "Projects", tasks: [] },
// ];

// enum ActionType {
//   SET_LISTS = "SET_LISTS",
//   UPDATE_LIST = "UPDATE_LIST",
//   DELETE_LIST = "DELETE_LIST",
//   SET_TASK = "SET_TASK",
//   UPDATE_TASK = "UPDATE_TASK",
//   DELETE_TASK = "DELETE_TASK",
// }

// export interface TaskInterface {
//   id: number;
//   taskTitle: string;
//   completed: boolean;
//   deadline?: Date;
//   level: string;
// }

// interface ListInterface {
//   id: number;
//   title: string;
//   status: boolean;
//   category: string;
//   tasks: TaskInterface[] | [];
// }

// interface ListActions {
//   type: ActionType;
//   list: ListInterface;
//   task: TaskInterface;
// }

// interface ListProviderInterface {
//   children: React.ReactNode;
// }
// interface ListContextInterface {
//   listStore: ListInterface[] | [];
//   listDispatch: React.Dispatch<ListActions>;
// }
// const ListContext = createContext({} as ListContextInterface);

// export const ListProvider = ({ children }: ListProviderInterface) => {
//   const Reducer: React.Reducer<ListInterface[] | [], ListActions> = (
//     state,
//     action
//   ) => {
//     const newState = [...state];
//     let id = action.list.id;
//     let elementIndex = state.findIndex((elem) => elem.id === id);
//     switch (action.type) {
//       case ActionType.DELETE_LIST:
//         newState.splice(elementIndex, 1);
//         return [...newState];
//       case ActionType.SET_TASK:
//         const newTaskState = [...newState[elementIndex].tasks];
//         newTaskState.push(action.task);
//         newState[elementIndex] = {
//           ...newState[elementIndex],
//           tasks: [...newTaskState],
//         };
//         return [...newState];
//       case ActionType.DELETE_TASK:
//         return [...state];
//       case ActionType.UPDATE_LIST:
//         return [...state];
//       case ActionType.UPDATE_TASK:
//         return [...state];
//       default:
//         return [...state];
//     }
//   };
//   const [listStore, listDispatch] = useReducer<
//     React.Reducer<ListInterface[], ListActions>
//   >(Reducer, dataArray);
//   return (
//     <ListContext.Provider
//       value={{ listStore, listDispatch }}
//       children={children}
//     />
//   );
// };

// export const useListStore = () => useContext(ListContext);
