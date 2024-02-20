import React, { FC } from "react";
import { render } from "react-dom";

export type Action = "+" | "-" | "*" | "/";

export interface ActionButtonProps {
  type: Action;
  onClick?: (type: Action) => void;
}

const ActionButton: FC<ActionButtonProps> = ({ type, onClick }) => {
  return <button onClick={() => onClick?.(type)}>{type}</button>;
};

export default ActionButton;
