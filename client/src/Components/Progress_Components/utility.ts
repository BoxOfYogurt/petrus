import { TaskInterface } from "../Data";

export interface ProgressInterface {
  total: number;
  completed: number;
  percent: number;
  done: boolean | undefined | null;
}

export const calculateProgress = ({ data }: { data: TaskInterface[] }) => {
  let completed: number = 0;
  let percent: number = 0;
  let done: boolean = false;
  let total = 0;
  data.forEach((item) => (item.completed ? completed++ && total++ : total++));
  if (completed) {
    percent = (completed / data.length) * 100;
  }
  if (percent === 100) {
    done = true;
  }

  return { completed, percent, done, total };
};
