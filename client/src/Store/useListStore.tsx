import React, { createContext, useContext, useReducer } from "react";
import { getDateToday } from "../Components/utility";

export const dataArray = [
  {
    id: 1,
    title: "AniShare",
    status: false,
    category: "Projects",
    tasks: [
      {
        id: 1,
        taskTitle: "Create backend",
        completed: false,
        deadline: getDateToday(),
        level: "Important",
      },
      {
        id: 2,
        taskTitle: "Create Frontend",
        completed: false,
        deadline: getDateToday(),
        level: "Important",
      },
      {
        id: 3,
        taskTitle: "Push to Heroku",
        completed: false,
        deadline: getDateToday(),
        level: "Important",
      },
    ],
  },
  {
    id: 2,
    title: "Tennis",
    status: true,
    category: "Training",
    tasks: [
      {
        id: 4,
        taskTitle: "Practice Shoots",
        completed: false,
        deadline: getDateToday(),
        level: "Important",
      },
      {
        id: 5,
        taskTitle: "Practice Serves",
        completed: false,
        deadline: getDateToday(),
        level: "Important",
      },
      {
        id: 6,
        taskTitle: "Practice match with John Doe",
        completed: false,
        deadline: getDateToday(),
        level: "Normal",
      },
    ],
  },
  { id: 3, title: "Comicon", status: false, category: "Meetings", tasks: [] },
  { id: 4, title: "Dinner", status: false, category: "Family", tasks: [] },
  { id: 5, title: "ShoppingList", status: true, category: "Wife", tasks: [] },
  { id: 6, title: "Agenda", status: false, category: "Personal", tasks: [] },
  { id: 7, title: "twitter", status: false, category: "Projects", tasks: [] },
];

enum ActionType {
  SET_LISTS = "SET_LISTS",
  UPDATE_LIST = "UPDATE_LIST",
  DELETE_LIST = "DELETE_LIST",
  SET_TASK = "SET_TASK",
  UPDATE_TASK = "UPDATE_TASK",
  DELETE_TASK = "DELETE_TASK",
}

export interface TaskInterface {
  id: number;
  taskTitle: string;
  completed: boolean;
  deadline?: Date;
  level: string;
}

interface ListInterface {
  id: number;
  title: string;
  status: boolean;
  category: string;
  tasks: TaskInterface[] | [];
}

interface ListActions {
  type: ActionType;
  list: ListInterface;
  task: TaskInterface;
}

interface ListProviderInterface {
  children: React.ReactNode;
}
interface ListContextInterface {
  listStore: ListInterface[] | [];
  listDispatch: React.Dispatch<ListActions>;
}
const ListContext = createContext({} as ListContextInterface);

export const ListProvider = ({ children }: ListProviderInterface) => {
  const Reducer: React.Reducer<ListInterface[] | [], ListActions> = (
    state,
    action
  ) => {
    const newState = [...state];
    let id = action.list.id;
    let elementIndex = state.findIndex((elem) => elem.id === id);
    switch (action.type) {
      case ActionType.DELETE_LIST:
        newState.splice(elementIndex, 1);
        return [...newState];
      case ActionType.SET_TASK:
        const newTaskState = [...newState[elementIndex].tasks];
        newTaskState.push(action.task);
        newState[elementIndex] = {
          ...newState[elementIndex],
          tasks: [...newTaskState],
        };
        return [...newState];
      case ActionType.DELETE_TASK:
        return [...state];
      case ActionType.UPDATE_LIST:
        return [...state];
      case ActionType.UPDATE_TASK:
        return [...state];
      default:
        return [...state];
    }
  };
  const [listStore, listDispatch] = useReducer<
    React.Reducer<ListInterface[], ListActions>
  >(Reducer, dataArray);
  return (
    <ListContext.Provider
      value={{ listStore, listDispatch }}
      children={children}
    />
  );
};

export const useListStore = () => useContext(ListContext);
