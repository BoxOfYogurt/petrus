import { SubCategoryInterface, TaskInterface } from "../Data";
import { ProgressBar } from "../Progress_Components/ProgressBar";
import { Task } from "./Task";

import "./css/subCategory.css";
import { useTheme } from "../../Store/useTheme";

export const SubCategory = ({
  categoryId,
  projectId,
  subCategory,
  tasks,
}: {
  categoryId: string;
  projectId: string;
  subCategory: SubCategoryInterface;
  tasks: TaskInterface[];
}) => {
  const { Theme } = useTheme();

  return (
    <>
      <div className='subcategory_container'>
        <div className='subcategory_header'>
          <div>
            <h3 style={Theme.p} className='subcategory_title'>
              {subCategory.sub_category_title}
            </h3>

            <div className='subcategory_svg_container'>{/* svg */}</div>
          </div>
          <ProgressBar data={tasks.map((task) => task)} size={5} />
        </div>
        <ul className=''>
          {tasks.map((task) => (
            <Task
              key={task.id}
              categoryId={categoryId}
              projectId={projectId}
              subCategoryId={subCategory.id}
              task={task}
            />
          ))}
        </ul>
      </div>
    </>
  );
};
