import { Categories } from "../Components/SubNavigation/Categories";

const dataArray = [
  { id: 1, title: "AniShare", status: false, category: "Projects" },
  { id: 2, title: "Tennis", status: true, category: "Training" },
  { id: 3, title: "Comicon", status: false, category: "Meetings" },
  { id: 4, title: "Dinner", status: false, category: "Family" },
  { id: 5, title: "ShoppingList", status: true, category: "Wife" },
  { id: 6, title: "Agenda", status: false, category: "Personal" },
  { id: 7, title: "twitter", status: false, category: "Projects" },
];

export const Dashboard = () => {
  return (
    <>
      <Categories items={dataArray} />
    </>
  );
};
