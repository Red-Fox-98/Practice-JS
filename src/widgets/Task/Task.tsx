import { FC } from "react";
import { ITask } from "../../pages/TaskBook/TaskBook.tsx";
import Style from "./Task.module.scss";

interface TaskProps {
  data: ITask;
  onChange: <TKey extends keyof ITask>(id: number, key: TKey, newValue: ITask[TKey]) => void;
  onRemove?: (idTask: number) => void;
}

const Task: FC<TaskProps> = ({ data, onChange }) => {
  return (
    <div className={Style.task}>
      <input
        type={"checkbox"}
        onChange={(event) => onChange(data.id, "isDone", event.currentTarget.checked)}
      />
      <input
        className={Style.input}
        onChange={(event) => onChange(data.id, "name", event.currentTarget.value)}
      />
      <button className={Style.button}>X</button>
    </div>
  );
};

export default Task;
