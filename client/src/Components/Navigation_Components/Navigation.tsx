import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../../Store/useTheme";
import { ThemeAction } from "../../Theme/Themes";
import "../../Css/navigation.css";
import { useEffect, useState } from "react";

interface ActiveLink {
  top: string;
}

export const Navigation = () => {
  const { Theme, changeTheme } = useTheme();
  const [active, changeActive] = useState<ActiveLink>({ top: "0em" });
  const { pathname } = useLocation();
  useEffect(() => {
    switch (pathname) {
      case "/":
        changeActive({ top: "0em" });
        break;
      case "/list":
        changeActive({ top: "3em" });
        break;
      case "/calendar":
        changeActive({ top: "6em" });
        break;
      case "/notes":
        changeActive({ top: "9em" });
        break;
      default:
        console.log("something is Wrong");
        break;
    }
  }, [pathname]);
  return (
    <>
      <nav style={Theme.main_nav} className="main_nav">
        <ul className="main_navigation_list">
          <span
            className="nav_marker"
            style={{ ...active, ...Theme.nav_marker }}
          ></span>
          <li className="main_navigation_item">
            <Link className="main_nav_link" to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={Theme.nav_svg}
                className="icon_svg"
                viewBox="0 0 24 24"
              >
                <title>DashBoard</title>
                <path d="M2,11H13a2,2,0,0,0,2-2V2a2,2,0,0,0-2-2H2A2,2,0,0,0,0,2V9A2,2,0,0,0,2,11ZM2,2H13V9H2Z" />
                <path d="M22,0H19a2,2,0,0,0-2,2V9a2,2,0,0,0,2,2h3a2,2,0,0,0,2-2V2A2,2,0,0,0,22,0Zm0,9H19V2h3Z" />
                <path d="M5,13H2a2,2,0,0,0-2,2v7a2,2,0,0,0,2,2H5a2,2,0,0,0,2-2V15A2,2,0,0,0,5,13Zm0,9H2V15H5Z" />
                <path d="M22,13H11a2,2,0,0,0-2,2v7a2,2,0,0,0,2,2H22a2,2,0,0,0,2-2V15A2,2,0,0,0,22,13Zm0,9H11V15H22Z" />
              </svg>
            </Link>
          </li>
          <li className="main_navigation_item">
            <Link className="main_nav_link" to="/list">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={Theme.nav_svg}
                className="icon_svg"
                viewBox="0 0 24 24"
              >
                <title>lists</title>
                <g id="_01_align_center" data-name="01 align center">
                  <path d="M23.944,7.662,12,.5.056,7.662,12,14.828ZM12,2.828l8.056,4.834L12,12.5,3.944,7.662Z" />
                  <polygon points="24 13.965 12 21.165 0 13.965 0 16.298 12 23.497 24 16.298 24 13.965" />
                  <polygon points="24 9.634 21.485 11.143 21.485 11.143 12 16.834 2.515 11.143 2.515 11.143 0 9.634 0 11.966 12 19.166 24 11.966 24 9.634" />
                </g>
              </svg>
            </Link>
          </li>
          <li className="main_navigation_item">
            <Link className="main_nav_link" to="/calendar">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={Theme.nav_svg}
                className="icon_svg"
                viewBox="0 0 24 24"
              >
                <title>calendar</title>
                <path d="M19,2H18V1a1,1,0,0,0-2,0V2H8V1A1,1,0,0,0,6,1V2H5A5.006,5.006,0,0,0,0,7V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V7A5.006,5.006,0,0,0,19,2ZM2,7A3,3,0,0,1,5,4H19a3,3,0,0,1,3,3V8H2ZM19,22H5a3,3,0,0,1-3-3V10H22v9A3,3,0,0,1,19,22Z" />
                <circle cx="12" cy="15" r="1.5" />
                <circle cx="7" cy="15" r="1.5" />
                <circle cx="17" cy="15" r="1.5" />
              </svg>
            </Link>
          </li>
          <li className="main_navigation_item">
            <Link className="main_nav_link" to="/notes">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={Theme.nav_svg}
                className="icon_svg"
                viewBox="0 0 24 24"
              >
                <title>notes</title>
                <path d="M17,14a1,1,0,0,1-1,1H8a1,1,0,0,1,0-2h8A1,1,0,0,1,17,14Zm-4,3H8a1,1,0,0,0,0,2h5a1,1,0,0,0,0-2Zm9-6.515V19a5.006,5.006,0,0,1-5,5H7a5.006,5.006,0,0,1-5-5V5A5.006,5.006,0,0,1,7,0h4.515a6.958,6.958,0,0,1,4.95,2.05l3.484,3.486A6.951,6.951,0,0,1,22,10.485ZM15.051,3.464A5.01,5.01,0,0,0,14,2.684V7a1,1,0,0,0,1,1h4.316a4.983,4.983,0,0,0-.781-1.05ZM20,10.485c0-.165-.032-.323-.047-.485H15a3,3,0,0,1-3-3V2.047C11.838,2.032,11.679,2,11.515,2H7A3,3,0,0,0,4,5V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3Z" />
              </svg>
            </Link>
          </li>
          <li
            className="main_navigation_item"
            onClick={() => {
              Theme.name === ThemeAction.SET_DARK_THEME
                ? changeTheme(ThemeAction.SET_LIGHT_THEME)
                : changeTheme(ThemeAction.SET_DARK_THEME);
            }}
          >
            <div className="main_nav_link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={Theme.nav_svg}
                className="icon_svg"
                viewBox="0 0 24 24"
              >
                <title>21 opacity</title>
                <g id="_01_align_center" data-name="01 align center">
                  <path d="M4.309,5.608,2.772,4.329A11.945,11.945,0,0,0,.71,7.924l1.881.68A9.945,9.945,0,0,1,4.309,5.608Z" />
                  <path d="M2,12a10.1,10.1,0,0,1,.148-1.722L.177,9.936a12.137,12.137,0,0,0,0,4.142l1.97-.344A10.115,10.115,0,0,1,2,12Z" />
                  <path d="M8.507,2.627,7.808.753a11.95,11.95,0,0,0-3.574,2.1l1.3,1.524A9.96,9.96,0,0,1,8.507,2.627Z" />
                  <path d="M4.244,21.157a11.957,11.957,0,0,0,3.577,2.095l.7-1.875a9.931,9.931,0,0,1-2.98-1.746Z" />
                  <path d="M2.6,15.408l-1.88.681a11.98,11.98,0,0,0,2.066,3.593L4.317,18.4A9.97,9.97,0,0,1,2.6,15.408Z" />
                  <path d="M12,0A12.107,12.107,0,0,0,9.829.2l.36,1.968A10.033,10.033,0,0,1,12,2V22a10.033,10.033,0,0,1-1.811-.164L9.829,23.8A12.01,12.01,0,0,0,24,12,12.013,12.013,0,0,0,12,0Z" />
                </g>
              </svg>
            </div>
          </li>
          <li className="main_navigation_item">
            <Link className="main_nav_link" to="/enter">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{ ...Theme.nav_svg, transform: "rotate(180deg)" }}
                className="icon_svg"
                viewBox="0 0 24 24"
              >
                <title>sign_out</title>
                <g id="_01_align_center" data-name="01 align center">
                  <path d="M2,21V3A1,1,0,0,1,3,2H8V0H3A3,3,0,0,0,0,3V21a3,3,0,0,0,3,3H8V22H3A1,1,0,0,1,2,21Z" />
                  <path d="M23.123,9.879,18.537,5.293,17.123,6.707l4.264,4.264L5,11l0,2,16.443-.029-4.322,4.322,1.414,1.414,4.586-4.586A3,3,0,0,0,23.123,9.879Z" />
                </g>
              </svg>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
