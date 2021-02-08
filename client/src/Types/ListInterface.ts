export interface ListInterface {
  id: number;
  title: string;
  status: boolean;
  category: string;
  tasks: TaskInterface[] | [];
}

export interface TaskInterface {
  id: number;
  taskTitle: string;
  completed: boolean;
  deadline?: Date;
  level: string;
}
