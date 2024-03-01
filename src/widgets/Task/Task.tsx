import { FC } from "react";
import { ITask } from "../../pages/TaskBook/TaskBook.tsx";

const Task: FC<ITask> = ({ id, isDone, name }) => {
  console.log(id);
  return (
    <div>
      <input key={id} value={id ?? ""} type={"text"} />
    </div>
  );
};

export default Task;
