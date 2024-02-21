import React, { FC } from "react";
import Style from "../../pages/Calculator/calculator.module.scss";

// Пользователь может вводить только целые числа
interface NumberInputProps {
  value: number;
  onChange: (newValue: number) => void;
}
const NumberInput: FC<NumberInputProps> = ({}) => {
  return <div></div>;
};
export default NumberInput;
