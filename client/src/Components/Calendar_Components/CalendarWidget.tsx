import { useEffect, useState } from "react";
import { useTheme } from "../../Store/useTheme";
import { getDateToday } from "../utility";
import { ReactComponent as ArrowLeftIcon } from "../../Svg/ArrowLeftIcon.svg";
import { ReactComponent as ArrowRightIcon } from "../../Svg/ArrowRightIcon.svg";
import { CalendarDay } from "./CalendarDay";
import {
	CalendarConfig,
	DayArray,
	InitialDateProp,
	MonthArray,
	MonthsInterface,
} from "./Calendar_utility";

const createCalendarArray = ({ year, month }: InitialDateProp) => {
	let monthArray: CalendarConfig[] = [];

	for (let i = 1; i <= new Date(year, month + 1, 0).getDate(); i++) {
		let day: CalendarConfig = {
			year: year,
			monthName: MonthArray[month],
			monthIndex: month,
			dayName: DayArray[new Date(year, month, i).getDay()],
			dayIndex: new Date(year, month, i).getDay(),
			dayDate: i,
			fullDate: new Date(year, month, i),
			monthDays: new Date(year, month + 1, 0).getDate(),
		};

		monthArray.push(day);
	}

	return monthArray;
};

const combineMonthsArray = ({ prev, selected, next }: MonthsInterface) => {
	const previousMonthArray = createCalendarArray(prev);
	const selectedMonthArray = createCalendarArray(selected);
	const nextMonthArray = createCalendarArray(next);

	let prevSpliceArray = previousMonthArray.splice(
		previousMonthArray.length - (selectedMonthArray[0].dayIndex - 1),
		selectedMonthArray[0].dayIndex - 1
	);
	let nextSpliceArray = nextMonthArray.splice(
		0,
		42 - (selectedMonthArray[0].dayIndex + selectedMonthArray[0].monthDays - 1)
	);
	return [...prevSpliceArray, ...selectedMonthArray, ...nextSpliceArray];
};

//Rework on mapAdjecentMonths
const mapAdjecentMonths = ({
	year,
	month,
}: InitialDateProp): CalendarConfig[] => {
	let payload: MonthsInterface = {
		prev: {
			year: year,
			month: month,
		},
		selected: {
			year: year,
			month: month,
		},
		next: {
			year: year,
			month: month,
		},
	};
	switch (month) {
		case 11:
			payload.prev.month = month - 1;
			payload.next.year = year + 1;
			payload.next.month = 0;
			return combineMonthsArray(payload);
		case 0:
			payload.prev.year = year - 1;
			payload.prev.month = 11;
			payload.next.month = month + 1;
			return combineMonthsArray(payload);

		default:
			payload.prev.month = month - 1;
			payload.next.month = month + 1;
			return combineMonthsArray(payload);
	}
};

const initialDate: InitialDateProp = {
	year: new Date().getFullYear(),
	month: new Date().getMonth(),
};

export const CalendarWidget = () => {
	const { Theme } = useTheme();
	const [today, setToday] = useState<Date>(getDateToday());
	const [selected, setSelected] = useState(initialDate);
	const [calendar, setCalendar] = useState<CalendarConfig[]>(() =>
		mapAdjecentMonths(selected)
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
		console.log(selected.year);
		setCalendar(mapAdjecentMonths(selected));
		setToday(getDateToday());
	}, [selected]);
	return (
		<section className='cal_arr_container'>
			<section className='cal_arr_inputs'>
				<ArrowLeftIcon
					onClick={() => handleChange("prev")}
					style={Theme.svg_default}
					className='cal_arrows_svg'
				/>
				<div className='cal_arr_text'>
					<h1 className='cal_month_h1' style={Theme.h2}>
						{MonthArray[selected.month]}
					</h1>
					<p
						style={{ ...Theme.p_opacity, ...Theme.p_highLight }}
						className='cal_year_p'>
						{selected.year}
					</p>
				</div>
				<ArrowRightIcon
					onClick={() => handleChange("next")}
					style={Theme.svg_default}
					className='cal_arrows_svg'
				/>
			</section>

			<section className='cal_arr_section'>
				<div className='calendar_Array'>
					{DayArray.map((day, index) => {
						return (
							<div key={index} className='calendar_item'>
								<p style={Theme.p_highLight} className='dateName_p'>
									{day}
								</p>
							</div>
						);
					})}
					{calendar.map((day) => {
						return (
							<CalendarDay
								key={day.fullDate.toDateString()}
								dateItem={day}
								selected={selected}
								today={today}
							/>
						);
					})}
				</div>
			</section>
		</section>
	);
};
