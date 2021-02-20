import "./css/task.css";
import { useEffect, useState } from "react";
import { TaskInterface } from "../Data";
import { ReactComponent as CheckBoxIcon } from "../../Svg/CheckBoxIcon.svg";
import { ReactComponent as SquareIcon } from "../../Svg/SquareIcon.svg";

import { useTheme } from "../../Store/useTheme";
import { useProjectStore } from "../../Store/useProjectStore";
import { ActionType } from "../../Store/useProjectStore";
import { useToggle } from "../../Hooks/useToggle";
import { DeadlineWidget } from "../../Widgets/DeadlineWidget";

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
  const { Theme } = useTheme();
  const { projectDispatch } = useProjectStore();
  const [currentTask, setCurrentTask] = useState<TaskInterface>(task);
  const { switchValue, handleSwitch } = useToggle(false);

  const handleCompleted = () => {
    // console.log("before ", currentTask.completed);
    setCurrentTask({ ...currentTask, completed: !currentTask.completed });
    // console.log("after ", currentTask.completed);
    //Make a call to the Db with the new Data,
  };

  useEffect(() => {
    projectDispatch({
      type: ActionType.UPDATE_TASK,
      category_id: categoryId,
      project_id: projectId,
      sub_category_id: subCategoryId,
      task_id: currentTask.id,
      task_payload: currentTask,
    });
  }, [categoryId, currentTask, projectDispatch, projectId, subCategoryId]);

  return (
    <>
      <li style={Theme.border_color} className='task_container'>
        <div className='task_completed' onClick={handleCompleted}>
          {currentTask.completed ? (
            <CheckBoxIcon className='task_svg' />
          ) : (
            <SquareIcon className='task_svg' />
          )}
        </div>
        <div className='task_title_container'>
          <h4 style={Theme.p} className='task_title_text'>
            {currentTask.task_title}
          </h4>
        </div>
        <div className='task_info'>
          <DeadlineWidget task={currentTask} />
        </div>
        <div className='task_options_container'>
          {/* SVGComponent options Here === modul or 3 svg icons??? */}
        </div>
      </li>
    </>
  );
};
