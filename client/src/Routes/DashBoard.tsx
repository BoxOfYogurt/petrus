import { useTheme } from "../Store/useTheme";

export const DashBoard = () => {
  const { Theme } = useTheme();
  return (
    <div style={Theme.page} className="Page_container">
      <h1> DashBoard</h1>
    </div>
  );
};
