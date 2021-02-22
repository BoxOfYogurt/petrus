import { useTheme } from "../../Store/useTheme";
import { TaskInterface } from "../Data";
import "./style.css";
import { useEffect, useState } from "react";
import { ReactComponent as CheckIcon } from "../../Svg/CheckIcon.svg";
import { calculateProgress, ProgressInterface } from "./utility";

export const ProgressCircle = ({
  data,
  size,
  strokeSize,
}: {
  data: TaskInterface[];
  size: number;
  strokeSize: number;
}) => {
  const radius = size / 2 - strokeSize / 2;
  const circumference = 2 * Math.PI * radius;
  const [progress, setProgress] = useState<ProgressInterface>(() =>
    calculateProgress({ data })
  );
  const [offset, setOffset] = useState<number>(0);
  const { Theme } = useTheme();

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

  useEffect(() => {
    if (progress) {
      const progressOffset = ((100 - progress.percent) / 100) * circumference;
      setOffset(progressOffset);
    }
  }, [progress, circumference]);

  return (
    <>
      <div className='progress_circle_container' style={{ height: size }}>
        {progress.percent === 100 ? (
          <div
            className='progress_circle_center'
            style={{
              ...Theme.navigation_secondary,
              height: size / 3,
              width: size / 3,
              borderRadius: "50%",
            }}>
            <CheckIcon className='svg_checkicon' />
          </div>
        ) : null}
        <svg width={size} height={size}>
          <circle
            fill={"transparent"}
            strokeOpacity={0.5}
            strokeWidth={strokeSize}
            stroke={Theme.svg_stroke}
            cx={size / 2}
            cy={size / 2}
            r={radius}
          />
          <circle
            fill={"transparent"}
            strokeWidth={strokeSize}
            stroke={`hsl(120,100%, ${100 - progress.percent / 2}%)`}
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeDashoffset={offset}
            strokeDasharray={circumference}
          />
        </svg>
      </div>
    </>
  );
};
