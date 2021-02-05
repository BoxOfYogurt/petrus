import { createContext, useContext, useState } from "react";
import {
  ThemeAction,
  DarkTheme,
  LightTheme,
  ThemeTypes,
} from "../Theme/Themes";

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
