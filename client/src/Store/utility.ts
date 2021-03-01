import { CategoryInterface } from "../Components/Data";

// interface Props {
// 	store: CategoryInterface[];
// 	id: string;
// }
// export const getCategoryIndex = (store: CategoryInterface[], id: string) => {
// 	let idx = store.findIndex((elem) => elem.id === id);
// 	if (idx) {
// 		return idx;
// 	} else {
// 		return false;
// 	}
// };

// export const getProjectIndex = (
// 	store: CategoryInterface[],
// 	c_id: string,
// 	p_id: string
// ) => {
// 	let category_idx = getCategoryIndex(store, c_id);
// 	if (category_idx && p_id) {
// 		return store[category_idx].projects.findIndex((elem) => elem.id === p_id);
// 	}
// };

// export const getSubCategoryIndex = (
// 	store: CategoryInterface[],
// 	c_id: string,
// 	p_id: string,
// 	s_id: string
// ) => {
// 	let category_idx = getCategoryIndex(store, c_id);
// 	let project_idx = getProjectIndex(store, c_id, p_id);
// 	if (category_idx && project_idx && s_id) {
// 		let sub_index = store[category_idx].projects[
// 			project_idx
// 		].sub_categories.findIndex((elem) => elem.id === p_id);

// 		return {
// 			category_idx,
// 			project_idx,
// 			sub_index,
// 		};
// 	} else {
// 		return false;
// 	}
// };

// export const getTaskIndex = (
// 	store: CategoryInterface[],
// 	c_id: string,
// 	p_id: string,
// 	s_id: string,
// 	t_id: string
// ) => {
// 	let category_idx = getCategoryIndex(store, c_id);
// 	let project_idx = getProjectIndex(store, c_id, p_id);
// 	let sub_category_idx = getSubCategoryIndex(store, c_id, p_id, s_id);
// };

interface indexInterface {
	category_idx: number;
	project_idx: null | number;
	sub_category_idx: null | number;
	task_idx: null | number;
}

export const getIndexes = (
	store: CategoryInterface[],
	c_id: string,
	p_id?: string,
	s_id?: string,
	t_id?: string
) => {
	let category_idx = store.findIndex((elem) => elem.id === c_id);
	let payload: indexInterface = {
		category_idx: category_idx,
		project_idx: null,
		sub_category_idx: null,
		task_idx: null,
	};
	if (p_id) {
		let project_idx = store[category_idx].projects.findIndex(
			(elem) => elem.id === p_id
		);

		payload.project_idx = project_idx;

		if (s_id) {
			let subcategory_idx = store[category_idx].projects[
				project_idx
			].sub_categories.findIndex((elem) => elem.id === s_id);

			payload.sub_category_idx = subcategory_idx;

			if (t_id) {
				let task_idx = store[category_idx].projects[project_idx].sub_categories[
					subcategory_idx
				].tasks.findIndex((elem) => elem.id === t_id);

				payload.task_idx = task_idx;
			}
		}
	}
	console.log(payload);
	return payload;
};
