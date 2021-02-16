import { CategoriesInterface } from "../ListData";

export const ProjectNavigation = (category: CategoriesInterface[]) => {
  return (
    <nav>
      {category.map((category, idx) => {
        return <Category key={category.id} {...category} />;
      })}
    </nav>
  );
};

const Category = (category: CategoriesInterface) => {
  return <ul></ul>;
};
