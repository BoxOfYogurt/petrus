import "../../Css/task.css";
import { useState } from "react";
import { TaskInterface } from "../Data";

export const Task = ({
  categoryId,
  projectId,
  subCategoryId,
  task,
}: {
  categoryId: number;
  projectId: number;
  subCategoryId: number;
  task: TaskInterface;
}) => {
  const [currentTask, setTask] = useState<TaskInterface>(task);

  return (
    <>
      <div className='task_container'>
        <div className='task_completed'>
          {currentTask.completed ? <h2>Completed</h2> : <h2>False</h2>}
        </div>
        <div className='task_importance'>{/* SVGComponent Here */}</div>
        <div className='task_title'>{currentTask.task_title}</div>
        <div className='task_options_container'>
          {/* SVGComponent options Here === modul or 3 svg icons??? */}
        </div>
      </div>
    </>
  );
};
