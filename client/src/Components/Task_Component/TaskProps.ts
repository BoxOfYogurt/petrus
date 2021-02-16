export interface TaskInterface {
  id: number;
  taskTitle: string;
  completed: boolean;
  deadline?: Date;
  level: string;
}
