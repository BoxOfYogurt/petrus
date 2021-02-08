export enum ThemeAction {
  SET_DARK_THEME = "SET_DARK_THEME",
  SET_LIGHT_THEME = "SET_LIGHT_THEME",
}

export interface ThemeTypes {
  name: ThemeAction;
  page: { backgroundColor: string };
  main_nav: { backgroundColor: string };
  sub_nav: { backgroundColor: string };
  nav_svg: { fill: string };
  list_bg: { backgroundColor: string };
  nav_marker: { backgroundColor: string };
  h2: { color: string };
  p: { color: string };
  p_highLight: { color: string };
  p_opacity: { color: string; opacity: number };
  p_underline: {
    color: string;
    textDecoration: string;
    textDecorationColor: string;
  };
  svg_remove: { fill: string };
}

export const DarkTheme = {
  name: ThemeAction.SET_DARK_THEME,
  page: { backgroundColor: "#262933" },
  main_nav: { backgroundColor: "#0d0a0bff" },
  sub_nav: { backgroundColor: "#454955ff" },
  nav_svg: { fill: "#68b0abff" },
  list_bg: { backgroundColor: "#262933" },
  nav_marker: { backgroundColor: "aqua" },
  h2: { color: "#f3eff5ff" },
  p: { color: "#f3eff5ff" },
  p_highLight: { color: "#68b0abff" },
  p_opacity: { color: "#0d0a0bff", opacity: 0.7 },
  p_underline: {
    color: "#f3eff5ff",
    textDecoration: "underline",
    textDecorationColor: "#68b0abff",
  },
  svg_remove: { fill: "#ff1919" },
};
export const LightTheme = {
  name: ThemeAction.SET_LIGHT_THEME,
  page: { backgroundColor: "#bbb8bd" },
  main_nav: { backgroundColor: "grey" },
  sub_nav: { backgroundColor: "lightgrey" },
  nav_svg: { fill: "#dba159ff" },
  list_bg: { backgroundColor: "#bbb8bd" },
  nav_marker: { backgroundColor: "lightcoral" },
  h2: { color: "#0d0a0bff" },
  p: { color: "#0d0a0bff" },
  p_highLight: { color: "#dba159ff" },
  p_opacity: { color: "#0d0a0bff", opacity: 0.7 },
  p_underline: {
    color: "#0d0a0bff",
    textDecoration: "underline",
    textDecorationColor: "#dba159ff",
  },
  svg_remove: { fill: "#ff1919" },
};
