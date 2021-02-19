import { useEffect, useState } from "react";
import { match } from "react-router-dom";
import { useProjectStore } from "../../Store/useProjectStore";
import { ProjectsInterface } from "../Data";
import "./css/project.css";

export const Project = ({
  currentRoute,
}: {
  currentRoute: match<{ projectId: string }> | null;
}) => {
  const { projectStore } = useProjectStore();
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
            setCurrentProject(
              projectStore[category_index].projects[project_index]
            );
            console.log(projectStore[category_index].projects[project_index]);
          }
        });
      }
    }
  }, [currentRoute, projectStore]);
  return (
    <div className='project_container'>
      <div className='project_header'>
        <div>
          <h2>Project Title</h2>
        </div>
      </div>
      <div className='project_content'>
        {JSON.stringify(currentProject, null, 2)}
      </div>
      <div className='project_footer'></div>
    </div>
  );
};

const SubCategories = () => {};

const Tasks = () => {};
