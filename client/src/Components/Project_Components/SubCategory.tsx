import { SubCategoryInterface } from "../Data";
import { Task } from "./Task";

import "./css/subCategory.css";
import { useTheme } from "../../Store/useTheme";

export const SubCategory = ({
  categoryId,
  projectId,
  subCategory,
}: {
  categoryId: number;
  projectId: number;
  subCategory: SubCategoryInterface;
}) => {
  const { Theme } = useTheme();
  return (
    <>
      <div className='subcategory_container'>
        <div className='subcategory_header'>
          <h3 style={Theme.p} className='subcategory_title'>
            {subCategory.sub_category_title}
          </h3>
          <div className='subcategory_svg_container'>{/* svg */}</div>
        </div>
        <ul className=''>
          {subCategory.tasks.map((task) => (
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
