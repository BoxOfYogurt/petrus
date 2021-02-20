import { ProjectNavigation } from "../Components/Project_Components/ProjectNavigation";
import { useProjectStore } from "../Store/useProjectStore";
import "../Css/projectPage.css";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { Project } from "../Components/Project_Components/Project";
import { useTheme } from "../Store/useTheme";

export interface FocusInterface {
  category_idx?: number;
  project_idx?: number;
  category_id?: number;
  project_id?: number;
}
export const ProjectPage = () => {
  const { Theme } = useTheme();
  const { projectStore } = useProjectStore();
  let { path } = useRouteMatch();
  let match = useRouteMatch<{ projectId: string }>("/project/:projectId");

  return (
    <div className='Page_container ProjectPage'>
      <ProjectNavigation categories={projectStore} currentRoute={match} />
      <Switch>
        <Route exact path={path}>
          <div style={Theme.page}></div>
        </Route>
        <Route exact path={`${path}/createlist`}>
          <h1>CreateList</h1>
        </Route>
        <Route path={`${path}/:projectId`}>
          <Project currentRoute={match} />
        </Route>
      </Switch>
    </div>
  );
};
