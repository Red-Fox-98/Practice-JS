import { FC } from "react";
import { onButtonClick } from "./helpers";

const TaskRunButton: FC = () => {
  return <button onClick={onButtonClick}>Run Tasks</button>;
};
export default TaskRunButton;
