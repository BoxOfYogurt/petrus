/*
DISCLAIMER!
my comments looks good with font ligatures :)
*/

import { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { useProjectStore } from "../../Store/useProjectStore";
import { useTheme } from "../../Store/useTheme";
import { ProjectInterface, TaskInterface } from "../Data";
import { ProgressCircle } from "../Progress_Components/ProgressCircle";
/*
|=> <-<CASCADING STYLE SHEETS>-> <==|
*/
import "./css/project.css";
/*
|=> <-<COMPONENTS / COMPONENT>-> <==|
*/
import { SubCategory } from "./SubCategory";

interface CategoryInfoInterface {
	id: string;
	title: string;
}

interface RouteComponentMatch {
	projectId: string;
}

export const Project: React.FC<RouteComponentProps<RouteComponentMatch>> = ({
	match,
}) => {
	const { Theme } = useTheme();
	const { projectStore } = useProjectStore();
	const [categoryInfo, setCategoryInfo] = useState<CategoryInfoInterface>();
	const [currentProject, setCurrentProject] = useState<ProjectInterface>();
	const [taskArray, setTaskArray] = useState<TaskInterface[] | []>([]);

	/*
  ================================================
  isFocused --> not sure if i will implement this 
  ================================================
  */
	/*
   const [isFoucused, setIsFoucused] = useState<SubCategoryInterface | null>();

   const handleIsFoucused = (CategoryData: SubCategoryInterface) => {
     setIsFoucused(CategoryData);
   };
   const handleIsFoucusedLeave = () => {
     setIsFoucused(null);
   };
  */
	/*
  ================================================
  isFocused --> not sure if i will implement this 
  ================================================
  */

	useEffect(() => {
		if (match.params) {
			let project_id = match.params.projectId;
			projectStore.forEach((category) => {
				let project_index = category.projects.findIndex(
					(elem) => elem.id === project_id
				);
				if (project_index !== -1) {
					setCategoryInfo({
						id: category.id,
						title: category.category_title,
					});
					setCurrentProject(category.projects[project_index]);
					let variableArray: TaskInterface[] = [];
					//prettier-ignore
					category.projects[project_index].sub_categories.forEach((sub_category) =>
            sub_category.tasks.forEach((task) =>
              (variableArray = [...variableArray, task])
            )
          );
					setTaskArray(variableArray);
				}
			});
		}
	}, [match, projectStore]);

	return (
		<>
			<div style={Theme.page} className='project_container'>
				{categoryInfo && currentProject && (
					<>
						<div className='project_header'>
							<div className='project_route_text_container'>
								<p
									style={
										Theme.p_opacity
									}>{`${categoryInfo.title} / ${currentProject.project_title}`}</p>
							</div>
						</div>
						<div className='project_content'>
							{currentProject.sub_categories.map((subCategory) => (
								<SubCategory
									key={subCategory.id}
									categoryId={categoryInfo.id}
									projectId={currentProject.id}
									subCategory={subCategory}
									tasks={subCategory.tasks}
								/>
							))}
						</div>
						<div className='project_widgets'>
							<ProgressCircle data={taskArray} size={150} strokeSize={20} />
						</div>
						<div style={Theme.border_color} className='project_footer'></div>
					</>
				)}
			</div>
		</>
	);
};
