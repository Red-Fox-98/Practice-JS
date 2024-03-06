import { ITask } from "./TaskBook.tsx";

export function filterTask(tasks: ITask[], filterIsDone: boolean) {
  return tasks.filter((task) => {
    if (filterIsDone) {
      return !task.isDone;
    }
    return true;
  });
}
