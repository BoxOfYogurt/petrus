import { SubCategoriesInterface } from "../Data";
import { Task } from "./Task";

export const SubCategory = ({
  categoryId,
  projectId,
  subCategory,
}: {
  categoryId: number;
  projectId: number;
  subCategory: SubCategoriesInterface;
}) => {
  return (
    <>
      <div>
        <div>
          <h3>{subCategory.sub_category_title}</h3>
        </div>
        <div>
          {subCategory.tasks.map((task) => (
            <Task
              key={task.id}
              categoryId={categoryId}
              projectId={projectId}
              subCategoryId={subCategory.id}
              task={task}
            />
          ))}
        </div>
      </div>
    </>
  );
};
