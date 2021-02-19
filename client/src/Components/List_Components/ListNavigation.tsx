import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../Store/useTheme";
import { ListInterface } from "./ListProps";
import "../../Css/listNavigation.css";

export const ListNavigation = ({
  items,
  url,
}: {
  items: ListInterface[];
  url: string;
}) => {
  const { Theme } = useTheme();
  const [categories, setCategories] = useState<string[]>([]);
  useEffect(() => {
    setCategories(ReduceCategories({ items }));
  }, [items]);

  return (
    <>
      {categories.map((category, index) => {
        return (
          <ul className='category_container' key={index}>
            <li className='category_header'>
              <h2 className='category_header_text' style={Theme.h2}>
                {category}
              </h2>
            </li>
            {items.map((list) =>
              list.category === category ? (
                <li key={list.id}>
                  <Link className='list_link' to={`${url}/${list.id}`}>
                    <p style={Theme.p}>{list.title}</p>
                  </Link>
                </li>
              ) : null
            )}
          </ul>
        );
      })}
    </>
  );
};

const ReduceCategories = ({ items }: { items: ListInterface[] }) => {
  let categoryArray: string[] = [];
  items.forEach((item) => {
    if (categoryArray.includes(item.category, 0)) {
    } else {
      categoryArray.push(item.category);
    }
  });
  return categoryArray;
};
