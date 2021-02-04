import { createContext, useContext, useState } from "react";

export enum ThemeAction {
  SET_DARK_THEME = "SET_DARK_THEME",
  SET_LIGHT_THEME = "SET_LIGHT_THEME",
}

const DarkTheme = {
  name: ThemeAction.SET_DARK_THEME,
  main_nav: { backgroundColor: "red" },
  sub_nav: { backgroundColor: "grey" },
  nav_svg: { fill: "white" },
  listItem: {},
  p: { color: "white" },
};
const LightTheme = {
  name: ThemeAction.SET_LIGHT_THEME,
  main_nav: { backgroundColor: "grey" },
  sub_nav: { backgroundColor: "lightgrey" },
  nav_svg: { fill: "black" },
  listItem: {},
  p: { color: "white" },
};

interface ThemeTypes {
  name: ThemeAction;
  main_nav: { backgroundColor: string };
  sub_nav: { backgroundColor: string };
  nav_svg: { fill: string };
}

interface ThemeContextInterface {
  Theme: ThemeTypes;
  changeTheme: (theme: ThemeAction) => void;
}
const ThemeContext = createContext<ThemeContextInterface>(
  {} as ThemeContextInterface
);
const initialValue = DarkTheme;
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [Theme, setTheme] = useState<ThemeTypes>(initialValue);

  const changeTheme = (theme: ThemeAction) => {
    switch (theme) {
      case ThemeAction.SET_DARK_THEME:
        setTheme(DarkTheme);
        break;
      case ThemeAction.SET_LIGHT_THEME:
        setTheme(LightTheme);
        break;
      default:
        break;
    }
  };

  return (
    <ThemeContext.Provider value={{ Theme, changeTheme }} children={children} />
  );
};

export const useTheme = () => useContext(ThemeContext);
// import { Switch } from "react-router-dom";
// import { convertTypeAcquisitionFromJson } from "typescript";

// interface ThemeProviderInterface {
//   children: React.ReactNode;
// }
// export const ThemeProvider = ({ children }: ThemeProviderInterface) => {
//    const Reducer = React.Reducer<S, A> = () => {
//       switch (action.type) {
//          case Action.SET_LIGHT_THEME:
//             return {

//             }
//       }
//    }

//    const [theme, themeDispatch] = React.useReducer<T, A> (Reducer, initalTheme)

//    return <ThemeContext.Provider value={{theme, themeDispatch}} children={children}/>
// };

// const Theme_Light = {
//    'button' : "#ffff",
//    'main_color_1' : "",
//    'accent_color_1' : "",
//    'accent_color_2' : ""
// }

// const Reducer: React.Reducer<IState, IAction> = (state, action) => {
//   switch (action.theme) {
//     case ThemeAction.SET_DARK_THEME:
//       return {
//         state: DarkTheme,
//       };
//     case ThemeAction.SET_LIGHT_THEME:
//       return {
//         state: action.theme,
//       };
//   }
// };
// const [themeStore, themeDispatch] = useReducer<
//   React.Reducer<IState, IAction>
// >(Reducer, initialValue);
