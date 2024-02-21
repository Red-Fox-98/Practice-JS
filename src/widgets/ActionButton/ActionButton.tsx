import { FC } from "react";
import Style from "./ActionButton.module.scss";

export type Action = "+" | "-" | "*" | "/";

export interface ActionButtonProps {
  type: Action;
  onClick?: (type: Action) => void;
}

const ActionButton: FC<ActionButtonProps> = ({ type, onClick }) => {
  return (
    <button className={Style.button} onClick={() => onClick?.(type)}>
      {type}{" "}
    </button>
  );
};

export default ActionButton;
