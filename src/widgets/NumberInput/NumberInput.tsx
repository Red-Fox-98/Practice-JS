import React, { FC } from "react";

// Пользователь может вводить только целые числа
interface NumberInputProps {
  value: number;
  onChange: (newValue: number) => void;
}
const NumberInput: FC<NumberInputProps> = () => {
  return <div></div>;
};
export default NumberInput;
