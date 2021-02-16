import { TaskInterface } from "../Task_Component/TaskProps";

export const dataArray = [
  { id: 1, title: "AniShare", status: false, category: "Projects", tasks: [] },
  { id: 2, title: "Tennis", status: true, category: "Training", tasks: [] },
  { id: 3, title: "Comicon", status: false, category: "Meetings", tasks: [] },
  { id: 4, title: "Dinner", status: false, category: "Family", tasks: [] },
  { id: 5, title: "ShoppingList", status: true, category: "Wife", tasks: [] },
  { id: 6, title: "Agenda", status: false, category: "Personal", tasks: [] },
  { id: 7, title: "twitter", status: false, category: "Projects", tasks: [] },
];

export interface ListInterface {
  id: number;
  title: string;
  status: boolean;
  category: string;
  tasks: TaskInterface[] | [];
}
