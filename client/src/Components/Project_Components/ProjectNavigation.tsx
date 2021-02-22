import { useEffect, useState } from "react";
import { Link, match, useRouteMatch } from "react-router-dom";
import { FocusInterface } from "../../Pages/ProjectPage";
import { useTheme } from "../../Store/useTheme";
import { CategoryInterface, ProjectInterface } from "../Data";

import { ReactComponent as SquareIcon } from "../../Svg/SquareIcon.svg";
import { ReactComponent as CaretIcon } from "../../Svg/CaretIcon.svg";
import { ReactComponent as VerticalDotsIcon } from "../../Svg/VerticalDotsIcon.svg";
import { SettingModule } from "../../Widgets/SettingsModule";
import "./css/projectNavigation.css";
import { useToggle } from "../../Hooks/useToggle";
import { useProjectStore } from "../../Store/useProjectStore";

export const ProjectNavigation = ({
  categories,
  currentRoute,
}: {
  categories: CategoryInterface[];
  currentRoute: match<{ projectId: string }> | null;
}) => {
  const { Theme } = useTheme();
  const [isFocused, setIsFocused] = useState<FocusInterface>({});

  useEffect(() => {
    if (currentRoute) {
      if (currentRoute.params) {
        let project_id = currentRoute.params.projectId;
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
    <nav style={Theme.navigation_secondary} className='category_navigation'>
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
  category: CategoryInterface;
  index: number;
  isFocused: FocusInterface;
}) => {
  const { switchValue, handleSwitch } = useToggle(false);
  const { projectDispatch } = useProjectStore();
  const [caretPos, setCatetPos] = useState({
    top: "0.5em",
    transform: "rotate(90deg)",
  });

  const handleChange = (id: string) => {};

  const handleDelete = (id: string) => {};
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
    <ul className='category_navigation_ul'>
      <CaretIcon
        className='category_navigation_svg caret_svg'
        fill={category.color_code}
        style={caretPos}
      />
      <li className='category_navigation_header_container'>
        <div className='category_navigation_header_item'>
          <SquareIcon
            className='category_navigation_svg'
            fill={category.color_code}
          />
        </div>
        <div className='category_navigation_header_item'>
          <h2
            className='category_navigation_title'
            style={{ color: category.color_code }}>
            {category.category_title.length > 20
              ? `${category.category_title.toUpperCase().slice(0, 20)}...`
              : `${category.category_title.toUpperCase()}`}
          </h2>
        </div>
        <div className='category_navigation_header_item'>
          <VerticalDotsIcon
            className='setting_navigation_svg'
            onClick={() => handleSwitch(!switchValue)}
          />
          {switchValue && (
            <SettingModule
              options={[
                { text: "Rename...", handleOption: handleChange },
                { text: "Delete...", handleOption: handleDelete },
              ]}
              id={category.id}
            />
          )}
        </div>
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
  project: ProjectInterface;
  isFocused: FocusInterface;
}) => {
  const { Theme } = useTheme();
  const { url } = useRouteMatch();

  return (
    <li className='project_navigation_item'>
      <Link className='project_navigation_link' to={`${url}/${project.id}`}>
        <h3
          style={
            isFocused.project_id === project.id ? Theme.p_highLight : Theme.p
          }
          className='project_navigation_title'>
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
  id: string;
}) => {
  return (
    <>
      <div className='category_setting_container'>
        <VerticalDotsIcon className='setting_navigation_svg' />
      </div>
    </>
  );
};
