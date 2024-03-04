import { FC } from "react";
import { ITask } from "../../pages/TaskBook/TaskBook.tsx";
import Style from "./Task.module.scss";

interface TaskProps {
  data: ITask;
  onChange: (newValue: ITask) => void;
  onRemove?: (idTask: number) => void;
}

const Task: FC<TaskProps> = ({ data, onChange }) => {
  const handleChange = <TKey extends keyof ITask>(key: TKey, newValue: ITask[TKey]): void => {
    onChange({ ...data, [key]: newValue });
  };

  return (
    <div className={Style.task}>
      <input
        type={"checkbox"}
        checked={data.isDone}
        onChange={(event) => handleChange("isDone", event.currentTarget.checked)}
      />
      <input
        className={Style.input}
        value={data.name}
        onChange={(event) => handleChange("name", event.currentTarget.value)}
      />
      <button className={Style.button}>X</button>
    </div>
  );
};

export default Task;
