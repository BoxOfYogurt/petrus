import { useEffect, useState } from "react";
import { useTheme } from "../../Store/useTheme";
const DayArray = ["Mon", "Thu", "Wed", "Tue", "Fri", "Sat", "Sun"];

export const MonthArray = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
interface InitialDateProp {
  year: number;
  month: number;
}
interface CalendarConfig {
  Year: number;
  MonthName: string;
  MonthIndex: number;
  DayName: string;
  DayIndex: number;
  DayDate: number;
  FullDate: Date;
  MonthDays: number;
}
const createCalendarArray = ({ year, month }: InitialDateProp) => {
  let monthArray: CalendarConfig[] = [];

  for (let i = 1; i <= new Date(year, month + 1, 0).getDate(); i++) {
    let day = {
      Year: year,
      MonthName: MonthArray[month],
      MonthIndex: month,
      DayName: DayArray[new Date(year, month, i).getDay()],
      DayIndex: new Date(year, month, i).getDay(),
      DayDate: i,
      FullDate: new Date(year, month, i),
      MonthDays: new Date(year, month + 1, 0).getDate(),
    } as CalendarConfig;

    monthArray.push(day);
  }

  return monthArray;
};
interface MonthsInterface {
  prev: {
    year: number;
    month: number;
  };
  selected: {
    year: number;
    month: number;
  };
  next: {
    year: number;
    month: number;
  };
}
const combineMonthsArray = ({ prev, selected, next }: MonthsInterface) => {
  const previousMonthArray = createCalendarArray(prev);
  const selectedMonthArray = createCalendarArray(selected);
  const nextMonthArray = createCalendarArray(next);

  let prevSpliceArray = previousMonthArray.splice(
    previousMonthArray.length - (selectedMonthArray[0].DayIndex - 1),
    selectedMonthArray[0].DayIndex - 1
  );
  let nextSpliceArray = nextMonthArray.splice(
    0,
    42 - (selectedMonthArray[0].DayIndex + selectedMonthArray[0].MonthDays - 1)
  );
  return [...prevSpliceArray, ...selectedMonthArray, ...nextSpliceArray];
};
const mapAdjecentMonts = ({ year, month }: InitialDateProp) => {
  switch (month) {
    case 11:
      return combineMonthsArray({
        prev: {
          year: year,
          month: month - 1,
        },
        selected: {
          year: year,
          month: month,
        },
        next: {
          year: year + 1,
          month: 0,
        },
      });

    case 0:
      return combineMonthsArray({
        prev: {
          year: year - 1,
          month: 11,
        },
        selected: {
          year: year,
          month: month,
        },
        next: {
          year: year,
          month: month + 1,
        },
      });

    default:
      return combineMonthsArray({
        prev: {
          year: year,
          month: month - 1,
        },
        selected: {
          year: year,
          month: month,
        },
        next: {
          year: year,
          month: month + 1,
        },
      });
  }
};

const initialDate: InitialDateProp = {
  year: new Date().getFullYear(),
  month: new Date().getMonth(),
};
const getDateToday = () => {
  const day = new Date();
  return new Date(day.getFullYear(), day.getMonth(), day.getDate());
};
export const CalendarWidget = () => {
  const { Theme } = useTheme();
  const [today, setToday] = useState<Date>(getDateToday());
  console.log(today.toDateString());
  const [selected, setSelected] = useState(initialDate);
  const [calendar, setCalendar] = useState<CalendarConfig[]>(() =>
    mapAdjecentMonts(selected)
  );
  const handleChange = (direction: string) => {
    switch (direction) {
      case "next":
        if (selected.month === 11) {
          setSelected({ month: 0, year: selected.year + 1 });
        } else {
          setSelected({ ...selected, month: selected.month + 1 });
        }
        break;
      case "prev":
        if (selected.month === 0) {
          setSelected({ month: 11, year: selected.year - 1 });
        } else {
          setSelected({ ...selected, month: selected.month - 1 });
        }
        break;
      default:
        console.log("something went wrong");
    }
  };
  useEffect(() => {
    setCalendar(mapAdjecentMonts(selected));
    setToday(getDateToday());
  }, [selected]);
  return (
    <section className="cal_arr_container">
      <section className="cal_arr_inputs">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={Theme.nav_svg}
          className="cal_arrows_svg"
          onClick={() => handleChange("prev")}
          viewBox="0 0 24 24"
        >
          <title>Previous Month</title>
          <g id="_01_align_center" data-name="01 align center">
            <path d="M16.752,23.994,6.879,14.121a3,3,0,0,1,0-4.242L16.746.012,18.16,1.426,8.293,11.293a1,1,0,0,0,0,1.414l9.873,9.873Z" />
          </g>
        </svg>
        <h1 className="cal_month_h1" style={Theme.h2}>
          {MonthArray[selected.month]}
        </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={Theme.nav_svg}
          className="cal_arrows_svg"
          onClick={() => handleChange("next")}
          viewBox="0 0 24 24"
        >
          <title>Next Month</title>
          <g id="_01_align_center" data-name="01 align center">
            <path d="M7.412,24,6,22.588l9.881-9.881a1,1,0,0,0,0-1.414L6.017,1.431,7.431.017l9.862,9.862a3,3,0,0,1,0,4.242Z" />
          </g>
        </svg>
      </section>

      <section className="cal_arr_section">
        <div className="calendar_Array">
          {DayArray.map((day, index) => {
            return (
              <div key={index} className="calendar_item">
                <p style={Theme.p_highLight} className="dateName_p">
                  {day}
                </p>
              </div>
            );
          })}
          {calendar.map((day) => {
            return (
              <div
                className="calendar_item"
                key={day.FullDate.toDateString()}
                style={
                  day.MonthIndex === selected.month
                    ? { color: "black" }
                    : { color: "black", opacity: "0.5" }
                }
              >
                <p style={Theme.p} className="dateNumber_p">
                  <title>{today.toDateString()}</title>
                  {day.DayDate}
                </p>
                {day.FullDate.toDateString() === today.toDateString() ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    style={Theme.nav_svg}
                    className="today_svg"
                    viewBox="0 0 24 24"
                  >
                    <title>{today.toDateString()}</title>
                    <path d="M19,0H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V5A5.006,5.006,0,0,0,19,0Zm3,19a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2H19a3,3,0,0,1,3,3Z" />
                  </svg>
                ) : null}
              </div>
            );
          })}
        </div>
      </section>
    </section>
  );
};
