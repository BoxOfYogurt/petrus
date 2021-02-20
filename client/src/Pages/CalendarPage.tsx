import { CalendarNavigation } from "../Components/Calendar_Components/CalendarNavigation";
import { useTheme } from "../Store/useTheme";

export const CalendarPage = () => {
  const { Theme } = useTheme();
  return (
    <div style={Theme.page} className='Page_container calendarPage'>
      <CalendarNavigation />
      <div>Content for /Calendar</div>
    </div>
  );
};
