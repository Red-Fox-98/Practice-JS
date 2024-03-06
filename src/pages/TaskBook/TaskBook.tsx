import { FC, useMemo, useRef, useState } from "react";
import Style from "./TaskBook.module.scss";
import Task from "../../widgets/Task/Task.tsx";
import { filterTask } from "./helpers.tsx";

export interface ITask {
  id: number;
  isDone: boolean;
  name: string;
}

const TaskBook: FC = () => {
  const [tasks, setTask] = useState<ITask[]>([]);
  const newId = useRef<number>(0);
  const [isDone, setIsDone] = useState(false);

  const createNewTask = () => {
    const newTask: ITask = {
      id: newId.current,
      name: "",
      isDone: false
    };

    newId.current += 1;
    setTask((prevState) => [...prevState, newTask]);
  };

  const changeTask = (newValue: ITask) => {
    setTask((prevState) => {
      const newData = [...prevState];
      const index = prevState.findIndex((task) => task.id === newValue.id);
      if (index < 0) return prevState;
      newData[index] = newValue;
      return newData;
    });
  };

  const filteredTasks = useMemo(() => filterTask(tasks, isDone), [tasks, isDone]);

  const deleteTask = (idValue: number) => {
    setTask((prevState) => {
      const data = [...prevState];
      const index = prevState.findIndex((task) => task.id === idValue);
      if (index < 0) return prevState;
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
          <input
            type={"checkbox"}
            className={Style.checkbox}
            onChange={(event) => setIsDone(event.currentTarget.checked)}
          />
          <label>только НЕ выполненные задачи</label>
        </div>
      </div>
      <div>
        {filteredTasks.map((task) => (
          <Task key={task.id} data={task} onChange={changeTask} onRemove={deleteTask} />
        ))}
      </div>
    </div>
  );
};

export default TaskBook;
