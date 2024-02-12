import React, { useState } from "react";
import { onButtonClick } from "../../main";
import CounterButton from "../../widgets/CounterButton/CounterButton";
import Styles from "./main.module.scss";

const Main: React.FC = () => {
  const [title, setTitle] = useState("Счетчик");

  const [isShowCounter, setIsShowCounter] = useState(true);
  const toggleShowCounter = (): void => {
    setIsShowCounter((prev) => !prev);
  };

  return (
    <div className={Styles.screen}>
      <button
        className={Styles.button}
        onClick={() => {
          onButtonClick();
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
