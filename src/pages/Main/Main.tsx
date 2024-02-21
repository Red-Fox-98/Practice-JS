import { useState } from "react";
import CounterButton from "../../widgets/CounterButton/CounterButton";
import Styles from "./main.module.scss";
import TaskRunButton from "../../widgets/TaskRunButton/TaskRunButton";

const Main: React.FC = () => {
  const [title, setTitle] = useState("Счетчик");

  const [isShowCounter, setIsShowCounter] = useState(true);
  const toggleShowCounter = (): void => {
    setIsShowCounter((prev) => !prev);
  };

  return (
    <div className={Styles.screen}>
      <TaskRunButton />
      <button
        className={Styles.button}
        onClick={() => {
          setTitle("Счетчик2");
        }}
      >
        Click me!
      </button>
      <button onClick={toggleShowCounter}>Toggle counter</button>
      {isShowCounter && <CounterButton title={title} />}
    </div>
  );
};

export default Main;
