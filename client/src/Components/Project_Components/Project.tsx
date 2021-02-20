import "./css/project.css";
import { useEffect, useState } from "react";
import { match } from "react-router-dom";
import { useProjectStore } from "../../Store/useProjectStore";
import { useTheme } from "../../Store/useTheme";
import { ProjectInterface, SubCategoryInterface, TaskInterface } from "../Data";

//Components
import { SubCategory } from "./SubCategory";
import { ProgressCircle } from "../Progress_Components/ProgressCircle";

interface RequiredCategoryInfoInterface {
  id: number;
  title: string;
}

export const Project = ({
  currentRoute,
}: {
  currentRoute: match<{ projectId: string }> | null;
}) => {
  const { projectStore } = useProjectStore();
  const { Theme } = useTheme();

  const [
    categoryInfo,
    setCategoryInfo,
  ] = useState<RequiredCategoryInfoInterface>();
  const [currentProject, setCurrentProject] = useState<ProjectInterface>();
  const [
    focusedCategory,
    setFocusedCategory,
  ] = useState<SubCategoryInterface | null>(null);
  const [taskArray, setTaskArray] = useState<TaskInterface[] | []>([]);

  const handleFocusedCategory = (CategoryData: SubCategoryInterface) => {
    setFocusedCategory(CategoryData);
  };
  const handleFocusedCategoryLeave = () => {
    setFocusedCategory(null);
  };

  useEffect(() => {
    if (currentRoute) {
      if (currentRoute.params) {
        let project_id = parseInt(currentRoute.params.projectId);
        projectStore.forEach((category, category_index) => {
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
            category.projects[
              project_index
            ].sub_categories.forEach((sub_category) =>
              sub_category.tasks.forEach(
                (task) => (variableArray = [...variableArray, task])
              )
            );
            setTaskArray(variableArray);
          }
        });
      }
    }
  }, [currentRoute, projectStore]);

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
                />
              ))}
            </div>
            <div className='project_widgets'>
              <ProgressCircle data={taskArray} size={150} strokeSize={20} />
            </div>
            <div className='project_footer'></div>
          </>
        )}
      </div>
    </>
  );
};
