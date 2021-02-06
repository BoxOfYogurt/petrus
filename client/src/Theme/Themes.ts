export enum ThemeAction {
  SET_DARK_THEME = "SET_DARK_THEME",
  SET_LIGHT_THEME = "SET_LIGHT_THEME",
}

export interface ThemeTypes {
  name: ThemeAction;
  main_nav: { backgroundColor: string };
  sub_nav: { backgroundColor: string };
  nav_svg: { fill: string };
  list_bg: { backgroundColor: string };
  nav_marker: { backgroundColor: string };
  h2: { color: string };
  p: { color: string };
  p_highLight: { color: string };
}

export const DarkTheme = {
  name: ThemeAction.SET_DARK_THEME,
  main_nav: { backgroundColor: "#0d0a0bff" },
  sub_nav: { backgroundColor: "#454955ff" },
  nav_svg: { fill: "#68b0abff" },
  list_bg: { backgroundColor: "blue" },
  nav_marker: { backgroundColor: "aqua" },
  h2: { color: "#f3eff5ff" },
  p: { color: "white" },
  p_highLight: { color: "#68b0abff" },
};
export const LightTheme = {
  name: ThemeAction.SET_LIGHT_THEME,
  main_nav: { backgroundColor: "grey" },
  sub_nav: { backgroundColor: "lightgrey" },
  nav_svg: { fill: "#dba159ff" },
  list_bg: { backgroundColor: "blue" },
  nav_marker: { backgroundColor: "lightcoral" },
  h2: { color: "#0d0a0bff" },
  p: { color: "black" },
  p_highLight: { color: "#dba159ff" },
};
