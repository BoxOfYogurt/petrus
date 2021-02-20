import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../../Store/useTheme";
import { ThemeAction } from "../../Theme/Themes";
import "../../Css/navigation.css";
import { useEffect, useState } from "react";
import { ReactComponent as DashBoardIcon } from "../../Svg/DashBoardIcon.svg";
import { ReactComponent as ProjectIcon } from "../../Svg/ProjectIcon.svg";
import { ReactComponent as CalendarIcon } from "../../Svg/CalendarIcon.svg";
import { ReactComponent as NoteIcon } from "../../Svg/NoteIcon.svg";
import { ReactComponent as ThemeIcon } from "../../Svg/ThemeIcon.svg";
import { ReactComponent as SignOutIcon } from "../../Svg/SignOutIcon.svg";

interface ActiveLink {
  top: string;
}

export const Navigation = () => {
  const { Theme, changeTheme } = useTheme();
  const [active, changeActive] = useState<ActiveLink>({ top: "0em" });
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname.includes("/notes")) {
      changeActive({ top: "9em" });
    } else if (pathname.includes("/calendar")) {
      changeActive({ top: "6em" });
    } else if (pathname.includes("/project")) {
      changeActive({ top: "3em" });
    } else {
      changeActive({ top: "0em" });
    }
  }, [pathname]);
  return (
    <>
      <nav style={Theme.navigation_primary} className='main_nav'>
        <ul className='main_navigation_list'>
          <span
            className='nav_marker'
            style={{ ...active, ...Theme.nav_marker }}></span>
          <li className='main_navigation_item'>
            <Link className='main_nav_link' to='/'>
              <DashBoardIcon style={Theme.svg_default} className='icon_svg' />
            </Link>
          </li>
          <li className='main_navigation_item'>
            <Link className='main_nav_link' to='/project'>
              <ProjectIcon style={Theme.svg_default} className='icon_svg' />
            </Link>
          </li>
          <li className='main_navigation_item'>
            <Link className='main_nav_link' to='/calendar'>
              <CalendarIcon style={Theme.svg_default} className='icon_svg' />
            </Link>
          </li>
          <li className='main_navigation_item'>
            <Link className='main_nav_link' to='/notes'>
              <NoteIcon style={Theme.svg_default} className='icon_svg' />
            </Link>
          </li>
          <li
            className='main_navigation_item'
            onClick={() => {
              Theme.name === ThemeAction.SET_DARK_THEME
                ? changeTheme(ThemeAction.SET_LIGHT_THEME)
                : changeTheme(ThemeAction.SET_DARK_THEME);
            }}>
            <div className='main_nav_link'>
              <ThemeIcon style={Theme.svg_default} className='icon_svg' />
            </div>
          </li>
          <li className='main_navigation_item'>
            <Link className='main_nav_link' to='/enter'>
              <SignOutIcon
                style={{ ...Theme.svg_default, transform: "rotate(180deg)" }}
                className='icon_svg'
              />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
