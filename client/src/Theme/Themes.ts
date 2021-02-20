export enum ThemeAction {
  SET_DARK_THEME = "SET_DARK_THEME",
  SET_LIGHT_THEME = "SET_LIGHT_THEME",
}
export interface ThemeTypes {
  name: ThemeAction;
  page: { backgroundColor: string };
  border_color: { borderColor: string };
  navigation_primary: { backgroundColor: string };
  navigation_secondary: { backgroundColor: string };
  svg_default: { fill: string };
  svg_remove: { fill: string };
  svg_stroke: string;
  bg_highLight: { backgroundColor: string };
  bg_red: { backgroundColor: string };
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
}
const GlobalColors = {
  dark_page: "#454955ff",
  dark_primary: "#0d0a0bff",
  dark_secondary: "#262933",
  dark_accent: "#1f2124",
  dark_highlight: "#68b0abff",
  dark_text: "",
  light_primary: "grey",
  light_secondary: "lightgrey",
  light_accent: "white",
  light_highlight: "#dba159ff",
  error_red: "#ff1919",
};

export const DarkTheme = {
  name: ThemeAction.SET_DARK_THEME,
  page: { backgroundColor: GlobalColors.dark_page },
  border_color: { borderColor: GlobalColors.dark_highlight },
  navigation_primary: { backgroundColor: GlobalColors.dark_primary },
  navigation_secondary: { backgroundColor: GlobalColors.dark_secondary },
  svg_default: { fill: "#68b0abff" },
  svg_remove: { fill: GlobalColors.error_red },
  svg_stroke: GlobalColors.dark_highlight,
  bg_highLight: { backgroundColor: GlobalColors.dark_highlight },
  bg_red: { backgroundColor: GlobalColors.error_red },
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
};
export const LightTheme = {
  name: ThemeAction.SET_LIGHT_THEME,
  page: { backgroundColor: "#f3eff5ff" },
  border_color: { borderColor: GlobalColors.light_highlight },
  navigation_primary: { backgroundColor: GlobalColors.light_primary },
  navigation_secondary: { backgroundColor: "#ebe7ee" },
  svg_default: { fill: "#dba159ff" },
  svg_remove: { fill: "#ff1919" },
  svg_stroke: GlobalColors.light_highlight,
  bg_highLight: { backgroundColor: GlobalColors.light_highlight },
  bg_red: { backgroundColor: GlobalColors.error_red },
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
};
