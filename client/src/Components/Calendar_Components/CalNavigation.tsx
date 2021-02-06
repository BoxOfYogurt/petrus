import "../../Css/calendar.css";
import { useTheme } from "../../Store/useTheme";
import { CalendarWidget } from "./CalendarWidget";

export const CalNavigation = () => {
  const { Theme } = useTheme();
  return (
    <div style={Theme.sub_nav} className="cal_navigation_container">
      <section></section>
      <CalendarWidget />
    </div>
  );
};
