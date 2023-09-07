export enum TaskStatus {
  toDo = 'ToDo',
  inWork = 'InWork',
  finished = 'Finished',
}

export interface Task {
  id: number;
  taskName: string;
  taskStatus: TaskStatus;
}
