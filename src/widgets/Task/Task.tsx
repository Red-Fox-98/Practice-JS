import { FC } from "react";
import { ITask } from "../../pages/TaskBook/TaskBook.tsx";
import Style from "./Task.module.scss";

interface TaskProps {
  data: ITask;
}

const Task: FC<TaskProps> = ({ data }) => {
  return (
    <div className={Style.task}>
      <input type={"checkbox"} />
      <input value={data.name ?? ""} type={"text"} className={Style.input} readOnly={true} />
      <button className={Style.button}>X</button>
    </div>
  );
};

export default Task;
