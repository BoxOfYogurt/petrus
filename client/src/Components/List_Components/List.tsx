import { useState } from "react";
import { useTheme } from "../../Store/useTheme";
import { ListInterface, TaskInterface } from "../../Types/ListInterface";

export const ListContent = () => {
  const [tasks, setTasks] = useState<ListInterface | []>([]);
  const { Theme } = useTheme();
  return (
    <div style={Theme.list_bg}>
      <section></section>
    </div>
  );
};

export const CreateList = () => {
  return <h1>CreateList</h1>;
};
