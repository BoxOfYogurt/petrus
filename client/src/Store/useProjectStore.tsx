import React, { createContext, useContext, useReducer } from "react";
import {
	Data,
	CategoryInterface,
	ProjectInterface,
	SubCategoryInterface,
	TaskInterface,
} from "../Components/Data";
import { getIndexes } from "./utility";

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
	category_id: string;
	project_id?: string;
	sub_category_id?: string;
	task_id?: string;
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
		let reducerStore = [...state];

		switch (action.type) {
			/*  ===============
          SWITCH CONTENT
          =============== 
          UPDATE
      */

			case ActionType.UPDATE_CATEGORY:
				if (action.category_payload) {
					let idx = getIndexes(reducerStore, action.category_id);

					reducerStore[idx.category_idx] = {
						...reducerStore[idx.category_idx],
						color_code: action.category_payload.color_code,
						category_title: action.category_payload.category_title,
					};
					return (state = reducerStore);
				} else {
					return state;
				}
			case ActionType.UPDATE_PROJECT:
				if (action.project_payload && action.project_id) {
					let idx = getIndexes(
						reducerStore,
						action.category_id,
						action.project_id
					);
					if (idx.project_idx) {
						reducerStore[idx.category_idx].projects[idx.project_idx] = {
							...reducerStore[idx.category_idx].projects[idx.project_idx],
							project_title: action.project_payload.project_title,
						};
						return (state = reducerStore);
					} else {
						return state;
					}
				} else return state;
			case ActionType.UPDATE_SUB_CATEGORY:
				if (
					action.sub_category_id &&
					action.sub_category_payload &&
					action.project_id
				) {
					const idx = getIndexes(
						reducerStore,
						action.category_id,
						action.project_id,
						action.sub_category_id
					);
					if (idx.category_idx && idx.project_idx && idx.sub_category_idx) {
						reducerStore[idx.category_idx].projects[
							idx.project_idx
						].sub_categories[idx.sub_category_idx] = {
							...reducerStore[idx.category_idx].projects[idx.project_idx]
								.sub_categories[idx.sub_category_idx],
							sub_category_title:
								action.sub_category_payload.sub_category_title,
						};
						return reducerStore;
					} else {
						return state;
					}
				} else return state;
			case ActionType.UPDATE_TASK:
				if (
					action.task_payload &&
					action.task_id !== null &&
					action.project_id !== null &&
					action.sub_category_id !== null
				) {
					console.log("UPDATE TASK FIRED", action.task_payload?.completed);
					let idx = getIndexes(
						reducerStore,
						action.category_id,
						action.project_id,
						action.sub_category_id,
						action.task_id
					);
					if (
						idx.category_idx !== null &&
						idx.project_idx !== null &&
						idx.sub_category_idx !== null &&
						idx.task_idx !== null
					) {
						console.log("UPDATE TASK FIRED", action.task_payload?.completed);

						reducerStore[idx.category_idx].projects[
							idx.project_idx
						].sub_categories[idx.sub_category_idx].tasks[idx.task_idx] = {
							...reducerStore[idx.category_idx].projects[idx.project_idx]
								.sub_categories[idx.sub_category_idx].tasks[idx.task_idx],
							task_title: action.task_payload.task_title,
							task_description: action.task_payload.task_description,
							task_tag: action.task_payload.task_tag,
							completed: action.task_payload.completed,
							status_level: action.task_payload.status_level,
							end_date: action.task_payload.end_date,
						};
						console.log(action.task_payload.completed);
						return reducerStore;
					} else return state;
				} else return state;
			case ActionType.REMOVE_CATEGORY:
				if (action.category_id) {
					console.log(action.category_id);
					return reducerStore.filter((item) => item.id !== action.category_id);
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

	return (
		<ProjectContext.Provider
			value={{ projectStore, projectDispatch }}
			children={children}
		/>
	);
};

export const useProjectStore = () => useContext(ProjectContext);
