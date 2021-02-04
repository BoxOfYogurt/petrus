import { useEffect, useState } from "react";

interface SortedListItems {
  id: number;
  title: string;
  status: boolean;
  category: string;
}
const ReduceCategories = ({ items }: { items: SortedListItems[] }) => {
  let categoryArray: string[] = [];
  items.forEach((item) => {
    if (categoryArray.includes(item.category, 0)) {
    } else {
      categoryArray.push(item.category);
    }
  });
  return categoryArray;
};
export const Categories = ({ items }: { items: SortedListItems[] }) => {
  const [categories, setCategories] = useState<string[]>([]);
  useEffect(() => {
    setCategories(ReduceCategories({ items }));
  }, [items]);

  return (
    <>
      <nav className="sub_nav">
        {categories.map((category, index) => {
          return (
            <div key={index}>
              <ul>
                <h2 style={{ marginLeft: 0 }}>{category}</h2>
                {items.map((list) =>
                  list.category === category ? (
                    <li key={list.id}>{list.title}</li>
                  ) : null
                )}
              </ul>
            </div>
          );
        })}
      </nav>
    </>
  );
};
