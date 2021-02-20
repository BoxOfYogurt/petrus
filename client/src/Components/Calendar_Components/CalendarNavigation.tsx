import "../../Css/calendar.css";
import { useTheme } from "../../Store/useTheme";
import { CalendarWidget } from "./CalendarWidget";

export const CalendarNavigation = () => {
  const { Theme } = useTheme();
  return (
    <div
      style={Theme.navigation_secondary}
      className='cal_navigation_container'>
      <CalendarWidget />
    </div>
  );
};
