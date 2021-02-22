import { useEffect, useState } from "react";
import { useTheme } from "../../Store/useTheme";
import { TaskInterface } from "../Data";
import { calculateProgress, ProgressInterface } from "./utility";
import "./style.css";
export const ProgressBar = ({
  data,
  size,
}: {
  data: TaskInterface[];
  size: number;
}) => {
  const { Theme } = useTheme();
  const [progress, setProgress] = useState<ProgressInterface>(() =>
    calculateProgress({ data })
  );

  useEffect(() => {
    if (data) {
      const { completed, done, percent } = calculateProgress({ data });
      setProgress({
        total: data.length,
        completed: completed,
        percent: percent,
        done: done,
      });
    }
  }, [data]);

  return (
    <div
      className='progress_bar_container'
      style={{ height: size, margin: size }}>
      <svg width={"100%"} height={size}>
        <rect
          rx={size / 2}
          ry={size / 2}
          width={"100%"}
          height={size}
          style={Theme.progressBar_static}
        />
        <rect
          rx={size / 2}
          ry={size / 2}
          width={`${progress.percent}%`}
          height={size}
          style={
            progress.done
              ? Theme.progressBar_completed
              : Theme.progressBar_dynamic
          }
        />
      </svg>
    </div>
  );
};
