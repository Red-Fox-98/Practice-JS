import { FC, useState } from "react";
import Style from "./TaskBook.module.scss";

const TaskBook: FC = () => {
  return (
    <div className={Style.screen}>
      <div className={Style.task}>
        <button className={Style.button}>Создать</button>
        <input className={Style.checkbox} type={"checkbox"} />
        только НЕ выполненные задачи
      </div>
      <div>tasks</div>
    </div>
  );
};

export default TaskBook;
