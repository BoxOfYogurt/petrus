import { useTheme } from "../Store/useTheme";
import { Switch, Route, useRouteMatch } from "react-router-dom";
/* LISTSTORE */
import { useProjectStore } from "../Store/useProjectStore";
/* COMPONENTS */
import { ListNavigation } from "../Components/List_Components/ListNavigation";
import { List } from "../Components/List_Components/List";
import { CreateList } from "../Components/List_Components/CreateList";
import { CreateListWidget } from "../Widgets/CreateListWidget";

import "../Css/listPage.css";

export const ListPage = () => {
  const { projectStore } = useProjectStore();
  const { Theme } = useTheme();
  let { path, url } = useRouteMatch();

  return (
    <div style={Theme.page} className="Page_container listPage">
      <nav className="sub_nav" style={Theme.sub_nav}>
        <ListNavigation items={listStore} url={url} />
        <CreateListWidget url={url} />
      </nav>
      <Switch>
        <Route exact path={path}>
          <h1>if no list...</h1>
        </Route>
        <Route exact path={`${path}/createlist`}>
          <CreateList />
        </Route>
        <Route path={`${path}/:listId`}>
          <List />
        </Route>
      </Switch>
    </div>
  );
};
