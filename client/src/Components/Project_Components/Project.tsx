import "./css/project.css";
import { useEffect, useState } from "react";
import { match } from "react-router-dom";
import { useProjectStore } from "../../Store/useProjectStore";
import { useTheme } from "../../Store/useTheme";
import { ProjectsInterface } from "../Data";

//Components
import { SubCategory } from "./SubCategory";

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
  const [currentProject, setCurrentProject] = useState<ProjectsInterface>();

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
            setCurrentProject(
              projectStore[category_index].projects[project_index]
            );
          }
        });
      }
    }
  }, [currentRoute, projectStore]);
  return (
    <>
      <div className='project_container'>
        {categoryInfo && currentProject && (
          <>
            <div className='project_header'>
              <div className='Project_route_text_container'>
                <p
                  style={Theme.p_opacity}
                >{`${categoryInfo.title} / ${currentProject.project_title}`}</p>
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
            <div className='project_footer'></div>
          </>
        )}
      </div>
    </>
  );
};
