import { Switch, Route, useRouteMatch } from "react-router-dom";

import { ListNavigation } from "../Components/List_Components/ListNavigation";
import { ListContent, CreateList } from "../Components/List_Components/List";
import { CreateListWidget } from "../Widgets/CreateListWidget";

import "../Css/listPage.css";
import { useTheme } from "../Store/useTheme";

const dataArray = [
  { id: 1, title: "AniShare", status: false, category: "Projects", tasks: [] },
  { id: 2, title: "Tennis", status: true, category: "Training", tasks: [] },
  { id: 3, title: "Comicon", status: false, category: "Meetings", tasks: [] },
  { id: 4, title: "Dinner", status: false, category: "Family", tasks: [] },
  { id: 5, title: "ShoppingList", status: true, category: "Wife", tasks: [] },
  { id: 6, title: "Agenda", status: false, category: "Personal", tasks: [] },
  { id: 7, title: "twitter", status: false, category: "Projects", tasks: [] },
];

export const ListPage = () => {
  const { Theme } = useTheme();
  let { path, url } = useRouteMatch();
  console.log(path, url);
  return (
    <div style={Theme.page} className="Page_container listPage">
      <nav className="sub_nav" style={Theme.sub_nav}>
        <ListNavigation items={dataArray} url={url} />
        <CreateListWidget />
      </nav>
      <Switch>
        <Route exact path={path}>
          <h1>if no list...</h1>
        </Route>
        <Route path={`${path}/:listId`}>
          <ListContent />
        </Route>
        <Route path={`${path}/createlist`}>
          <CreateList />
        </Route>
      </Switch>
    </div>
  );
};
