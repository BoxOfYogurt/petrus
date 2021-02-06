import { useTheme } from "../../Store/useTheme";
import { ListInterface } from "../../Types/ListInterface";

export const ListContent = ({ list }: { list: ListInterface }) => {
  const { Theme } = useTheme();
  return (
    <div style={Theme.list_bg}>
      <section>{list.title}</section>
    </div>
  );
};

export const CreateList = () => {
  return <h1>CreateList</h1>;
};
