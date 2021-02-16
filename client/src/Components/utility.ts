export const getDateToday = () => {
  const day = new Date();
  return new Date(day.getFullYear(), day.getMonth(), day.getDate());
};

export const getCurrentWeek = () => {
  const today = getDateToday();
  const startOfWeekDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 1 - today.getDay()
  );
  const endOfWeekDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - today.getDay() + 7
  );

  let currentWeek = [];
  for (let i = startOfWeekDate.getDate(); i <= endOfWeekDate.getDate(); i++) {
    let date = new Date(today.getFullYear(), today.getMonth(), i);
    currentWeek.push(date);
  }

  return currentWeek;
};

export const checkDateToCurrentWeek = (date: Date): boolean => {
  const today = getDateToday();

  return true;
};
