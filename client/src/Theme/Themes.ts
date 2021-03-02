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
	progressBar_dynamic: {
		fill: string;
		borderRadius: string;
	};
	progressBar_completed: {
		fill: string;
		borderRadius: string;
	};
	progressBar_static: { fill: string; borderRadius: string };
}
const GlobalColors = {
	rich_black: "#0d0a0bff",
	ghost_white: "#f3eff5ff",
	dark_page: "#454955ff",
	dark_secondary: "#262933",
	dark_accent: "#1f2124",
	dark_highlight: "#68b0abff",
	dark_text: "",
	light_primary: "grey",
	light_secondary: "#ebe7ee",
	light_accent: "white",
	light_highlight: "#373563",
	error_red: "#ff1919",
	completed: "#2ce310",
};

//#dba159ff

export const DarkTheme = {
	name: ThemeAction.SET_DARK_THEME,
	page: { backgroundColor: GlobalColors.dark_page },
	border_color: { borderColor: GlobalColors.dark_highlight },
	navigation_primary: { backgroundColor: GlobalColors.rich_black },
	navigation_secondary: { backgroundColor: GlobalColors.dark_secondary },
	svg_default: { fill: "#68b0abff" },
	svg_remove: { fill: GlobalColors.error_red },
	svg_stroke: GlobalColors.dark_highlight,
	bg_highLight: { backgroundColor: GlobalColors.dark_highlight },
	bg_red: { backgroundColor: GlobalColors.error_red },
	nav_marker: { backgroundColor: "aqua" },
	h2: { color: GlobalColors.ghost_white },
	p: { color: GlobalColors.ghost_white },
	p_highLight: { color: GlobalColors.dark_highlight },
	p_opacity: { color: GlobalColors.rich_black, opacity: 0.7 },
	p_underline: {
		color: GlobalColors.ghost_white,
		textDecoration: "underline",
		textDecorationColor: GlobalColors.dark_highlight,
	},
	progressBar_dynamic: {
		fill: GlobalColors.dark_highlight,
		borderRadius: "50%",
	},
	progressBar_completed: {
		fill: GlobalColors.completed,
		borderRadius: "50%",
	},
	progressBar_static: {
		fill: GlobalColors.dark_secondary,
		borderRadius: "50%",
	},
};
export const LightTheme = {
	name: ThemeAction.SET_LIGHT_THEME,
	page: { backgroundColor: GlobalColors.ghost_white },
	border_color: { borderColor: GlobalColors.light_highlight },
	navigation_primary: { backgroundColor: GlobalColors.light_primary },
	navigation_secondary: { backgroundColor: GlobalColors.light_secondary },
	svg_default: { fill: GlobalColors.light_highlight },
	svg_remove: { fill: "#ff1919" },
	svg_stroke: GlobalColors.light_highlight,
	bg_highLight: { backgroundColor: GlobalColors.light_highlight },
	bg_red: { backgroundColor: GlobalColors.error_red },
	nav_marker: { backgroundColor: "lightcoral" },
	h2: { color: GlobalColors.rich_black },
	p: { color: GlobalColors.rich_black },
	p_highLight: { color: GlobalColors.light_highlight },
	p_opacity: { color: GlobalColors.rich_black, opacity: 0.7 },
	p_underline: {
		color: GlobalColors.rich_black,
		textDecoration: "underline",
		textDecorationColor: GlobalColors.light_highlight,
	},
	progressBar_dynamic: {
		fill: GlobalColors.light_highlight,
		borderRadius: "50%",
	},
	progressBar_completed: {
		fill: GlobalColors.completed,
		borderRadius: "50%",
	},
	progressBar_static: {
		fill: GlobalColors.light_secondary,
		borderRadius: "50%",
	},
};
