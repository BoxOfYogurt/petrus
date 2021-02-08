import { CalNavigation } from "../Components/Calendar_Components/CalNavigation";
import { useTheme } from "../Store/useTheme";

export const CalendarPage = () => {
  const { Theme } = useTheme();
  return (
    <div style={Theme.page} className="Page_container calendarPage">
      <CalNavigation />
      <div>Content for /Calendar</div>
    </div>
  );
};
