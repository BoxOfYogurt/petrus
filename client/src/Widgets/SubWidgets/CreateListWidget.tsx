import { ThemeProvider, useTheme } from "../../Store/useTheme";

export const CreateListWidget = () => {
  const { Theme } = useTheme();
  return (
    <div>
      <svg
        id="Layer_1"
        data-name="Layer 1"
        style={Theme.nav_svg}
        className="sub_svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Zm1-11h4v2H13v4H11V13H7V11h4V7h2Z" />
      </svg>
    </div>
  );
};
