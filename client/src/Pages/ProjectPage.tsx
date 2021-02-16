import { ProjectNavigation } from "../Components/Project_Components/ProjectNavigation";
import { useProjectStore } from "../Store/useProjectStore";
import { ProjectNavigation } from "../Components/Project_Components/ProjectNavigation";

export const ProjectPage = () => {
  const { projectStore } = useProjectStore();

  return (
    <div className="Page_container ProjectPage">
      <ProjectNavigation {...projectStore} />
    </div>
  );
};
