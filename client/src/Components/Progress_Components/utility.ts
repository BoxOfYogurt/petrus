import { TaskInterface } from "../Data";

export const calculateProgress = ({ data }: { data: TaskInterface[] }) => {
  let completed: number = 0;
  let percent: number = 0;
  let done: boolean = false;
  data.forEach((item) => (item.completed ? completed++ : null));
  if (completed) {
    percent = (completed / data.length) * 100;
  }
  if (percent === 100) {
    done = true;
  }

  return { completed, percent, done };
};
