import { FC, useEffect, useRef, useState } from "react";
import Style from "./TaskBook.module.scss";
import Task from "../../widgets/Task/Task.tsx";
import { Simulate } from "react-dom/test-utils";
import load = Simulate.load;

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

  const changeTask = (newValue: ITask) => {
    setTasks((prev) => {
      const newData = [...prev];
      const index = prev.findIndex((task) => task.id === newValue.id);
      if (index < 0) return prev;
      newData[index] = newValue;
      return newData;
    });
  };

  const deleteTask = (idValue: number) => {
    setTasks((prev) => {
      const data = [...prev];
      const index = prev.findIndex((task) => task.id === idValue);
      if (index < 0) return prev;
      data.splice(index, 1);
      return data;
    });
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
          <Task key={task.id} data={task} onChange={changeTask} onRemove={deleteTask} />
        ))}
      </div>
    </div>
  );
};

export default TaskBook;
