import { ITask } from "./TaskBook.tsx";

export function filterTask(tasks: ITask[], filterRules: boolean) {
  return tasks.filter((task) => {
    if (!filterRules) {
      return true;
    } else if (filterRules) {
      return !task.isDone;
    }
  });
}
