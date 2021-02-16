import { TaskInterface } from "../Task_Component/TaskProps";

export interface ListInterface {
  id: number;
  title: string;
  status: boolean;
  category: string;
  tasks: TaskInterface[] | [];
}
