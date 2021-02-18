import { useEffect, useState } from "react";
import { Link, match, useRouteMatch } from "react-router-dom";
import { FocusInterface } from "../../Pages/ProjectPage";
import { useTheme } from "../../Store/useTheme";
import { CategoriesInterface, ProjectsInterface } from "../Data";
import "./css/projectNavigation.css";

export const ProjectNavigation = ({
  categories,
  currentRoute,
}: {
  categories: CategoriesInterface[];
  currentRoute: match<{ projectId: string }> | null;
}) => {
  const { Theme } = useTheme();
  const [isFocused, setIsFocused] = useState<FocusInterface>({});

  useEffect(() => {
    if (currentRoute) {
      if (currentRoute.params) {
        let project_id = parseInt(currentRoute.params.projectId);
        categories.forEach((category, category_index) => {
          let project_index = category.projects.findIndex(
            (elem) => elem.id === project_id
          );
          if (project_index !== -1) {
            const payload = {
              category_idx: category_index,
              project_idx: project_index,
              category_id: categories[category_index].id,
              project_id: project_id,
            };
            setIsFocused(payload);
          }
        });
      }
    }
  }, [categories, currentRoute]);
  return (
    <nav style={Theme.sub_nav} className="category_navigation">
      {categories.map((category, idx) => (
        <Category
          key={category.id}
          category={category}
          isFocused={isFocused}
          index={idx}
        />
      ))}
    </nav>
  );
};

const Category = ({
  category,
  index,
  isFocused,
}: {
  category: CategoriesInterface;
  index: number;
  isFocused: FocusInterface;
}) => {
  const [caretPos, setCatetPos] = useState({
    top: "0.5em",
    transform: "rotate(90deg)",
  });

  useEffect(() => {
    if (isFocused.category_idx === index) {
      if (isFocused.project_idx !== undefined) {
        let position = (isFocused.project_idx + 1) * 2 + 0.5;
        setCatetPos({ top: `${position}em`, transform: " rotate(0deg)" });
      }
    } else {
      setCatetPos({ top: "0.5em", transform: "rotate(90deg)" });
    }
  }, [isFocused, setCatetPos, index]);
  return (
    <ul className="category_navigation_ul">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="category_navigation_svg caret_svg"
        fill={category.color_code}
        style={caretPos}
      >
        <title>Current List</title>
        <path d="M9,17.879V6.707A1,1,0,0,1,10.707,6l5.586,5.586a1,1,0,0,1,0,1.414l-5.586,5.586A1,1,0,0,1,9,17.879Z" />
      </svg>
      <li className="category_navigation_header_container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="category_navigation_svg"
          fill={category.color_code}
        >
          <title>{category.category_title}</title>
          <path d="M19,0H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V5A5.006,5.006,0,0,0,19,0Zm3,19a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2H19a3,3,0,0,1,3,3Z" />
        </svg>
        <h2
          className="category_navigation_title"
          style={{ color: category.color_code }}
        >
          {category.category_title.toUpperCase()}
        </h2>
        <CategorySettingsWidget
          selected={category.color_code}
          id={category.id}
        />
      </li>
      {category.projects.map((project) => (
        <ProjectNavigationItem
          key={project.id}
          project={project}
          isFocused={isFocused}
        />
      ))}
    </ul>
  );
};

const ProjectNavigationItem = ({
  project,
  isFocused,
}: {
  project: ProjectsInterface;
  isFocused: FocusInterface;
}) => {
  const { Theme } = useTheme();
  const { url } = useRouteMatch();

  return (
    <li className="project_navigation_item">
      <Link className="project_navigation_link" to={`${url}/${project.id}`}>
        <h3
          style={
            isFocused.project_id === project.id ? Theme.p_highLight : Theme.p
          }
          className="project_navigation_title"
        >
          {project.project_title}
        </h3>
      </Link>
    </li>
  );
};

const CategorySettingsWidget = ({
  selected,
  id,
}: {
  selected: string;
  id: number;
}) => {
  return (
    <>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="setting_navigation_svg"
        >
          <title>settings</title>
          <circle cx="12" cy="2" r="2" />
          <circle cx="12" cy="12" r="2" />
          <circle cx="12" cy="22" r="2" />
        </svg>
      </div>
    </>
  );
};
