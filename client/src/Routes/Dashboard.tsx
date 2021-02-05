import { Switch, Route, useRouteMatch } from "react-router-dom";

import { Categories } from "../Components/SubNavigation/Categories";
import { List, CreateList } from "../Components/List_Components/List";
import { CreateListWidget } from "../Widgets/SubWidgets/CreateListWidget";

import "../Css/dashboard.css";
import { useTheme } from "../Store/useTheme";

const dataArray = [
  { id: 1, title: "AniShare", status: false, category: "Projects" },
  { id: 2, title: "Tennis", status: true, category: "Training" },
  { id: 3, title: "Comicon", status: false, category: "Meetings" },
  { id: 4, title: "Dinner", status: false, category: "Family" },
  { id: 5, title: "ShoppingList", status: true, category: "Wife" },
  { id: 6, title: "Agenda", status: false, category: "Personal" },
  { id: 7, title: "twitter", status: false, category: "Projects" },
];

export const Dashboard = () => {
  const { Theme } = useTheme();
  let { path, url } = useRouteMatch();
  console.log(path, url);
  return (
    <div className="dashboard_container">
      <nav className="sub_nav" style={Theme.sub_nav}>
        <Categories items={dataArray} url={url} />
        <CreateListWidget />
      </nav>
      <Switch>
        <Route exact path={path}>
          <h1>if no list...</h1>
        </Route>
        <Route path={`${path}/:listId`}>
          <List list={dataArray[1]} />
        </Route>
        <Route path={`${path}/createlist`}>
          <CreateList />
        </Route>
      </Switch>
    </div>
  );
};
