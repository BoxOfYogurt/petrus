import { CategoryInterface } from "../Data";

export interface InitialDateProp {
  year: number;
  month: number;
}
export interface MonthsInterface {
  prev: InitialDateProp;
  selected: InitialDateProp;
  next: InitialDateProp;
}

export const DayArray = ["Mon", "Thu", "Wed", "Tue", "Fri", "Sat", "Sun"];

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

export interface CalendarConfig {
  year: number;
  monthName: string;
  monthIndex: number;
  dayName: string;
  dayIndex: number;
  dayDate: number;
  fullDate: Date;
  monthDays: number;
}
