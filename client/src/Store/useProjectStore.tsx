import React, { createContext, useContext, useEffect, useReducer } from "react";
import {
  Data,
  CategoryInterface,
  ProjectInterface,
  SubCategoryInterface,
  TaskInterface,
} from "../Components/Data";

export enum ActionType {
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
  category_payload?: CategoryInterface;
  project_payload?: ProjectInterface;
  sub_category_payload?: SubCategoryInterface;
  task_payload?: TaskInterface;
}

interface ContextProps {
  projectStore: CategoryInterface[];
  projectDispatch: React.Dispatch<ProjectActions>;
}

export const ProjectContext = createContext({} as ContextProps);
export const ProjectProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const StoreReducer: React.Reducer<CategoryInterface[], ProjectActions> = (
    state,
    action
  ) => {
    console.log(action.task_payload?.completed);
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
          return reducerStore;
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
          return reducerStore;
        } else {
          return state;
        }
      default:
        return state;
    }
  };

  const [projectStore, projectDispatch] = useReducer<
    React.Reducer<CategoryInterface[], ProjectActions>
  >(StoreReducer, Data);

  useEffect(() => {
    console.log(
      "ProjectStore_.tsx: Update ",
      projectStore[0].projects[0].sub_categories[0].tasks[0].completed
    );
  }, [projectStore]);
  return (
    <ProjectContext.Provider
      value={{ projectStore, projectDispatch }}
      children={children}
    />
  );
};

export const useProjectStore = () => useContext(ProjectContext);
