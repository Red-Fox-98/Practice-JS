import { FC, useEffect, useRef, useState } from "react";
import Style from "./TaskBook.module.scss";
import Task from "../../widgets/Task/Task.tsx";
import task from "../../widgets/Task/Task.tsx";

export interface ITask {
  id: number;
  isDone: boolean;
  name: string;
}

const TaskBook: FC = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const newId = useRef<number>(0);

  const createNewTask = () => {
    const newTask: ITask = {
      id: newId.current,
      name: "",
      isDone: false
    };

    newId.current += 1;
    setTasks((prev) => [...prev, newTask]);
  };

  const handleChange = <TKey extends keyof ITask>(
    id: number,
    key: TKey,
    newValue: ITask[TKey]
  ): void => {
    tasks[id][key] = newValue;
  };

  return (
    <div className={Style.screen}>
      <div className={Style.task}>
        <button className={Style.button} onClick={createNewTask}>
          Создать
        </button>
        <div>
          <input className={Style.checkbox} type={"checkbox"} />
          <label>только НЕ выполненные задачи</label>
        </div>
      </div>
      <div>
        {tasks.map((task) => (
          <Task key={task.id} data={task} onChange={handleChange} />
        ))}
      </div>
    </div>
  );
};

export default TaskBook;
