import { useTheme } from "../../Store/useTheme";
import { TaskInterface } from "../Data";
import "./style.css";
import { useEffect, useState } from "react";
import { ReactComponent as CheckIcon } from "../../Svg/CheckIcon.svg";
import { calculateProgress } from "./utility";

interface ProgressInterface {
  total: number;
  completed: number;
  percent: number;
  done: boolean | undefined | null;
}

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
  const [progress, setProgress] = useState<ProgressInterface>({
    total: 0,
    completed: 0,
    percent: 0,
    done: undefined,
  });
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
      <div className='progress_circle_container'>
        {progress.percent === 100 ? (
          <div
            className='progress_circle_center'
            style={Theme.navigation_secondary}>
            <CheckIcon className='svg_checkicon' />
          </div>
        ) : null}
        <svg className='circle_svg' width={size} height={size}>
          <circle
            className='circle_static'
            fill={"transparent"}
            strokeOpacity={0.5}
            strokeWidth={strokeSize}
            stroke={Theme.svg_stroke}
            cx={size / 2}
            cy={size / 2}
            r={radius}></circle>
          <circle
            className='circle_dynamic'
            fill={"transparent"}
            strokeWidth={strokeSize}
            stroke={`hsl(120,100%, ${100 - progress.percent / 2}%)`}
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeDashoffset={offset}
            strokeDasharray={circumference}>
            <title>ForeGround</title>
          </circle>
        </svg>
      </div>
    </>
  );
};
