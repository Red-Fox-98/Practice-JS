import { FC } from "react";
import Style from "./NumberInput.module.scss";

// Пользователь может вводить только целые числа
interface NumberInputProps {
  value: number | undefined;
  onChange: (newValue: number | undefined) => void;
}

const NumberInput: FC<NumberInputProps> = ({ value, onChange }) => {
  const handleChangeValue = (newValue: string): void => {
    if (Number.isNaN(+newValue)) {
      return;
    }

    onChange(newValue == "" ? undefined : +newValue.trim());
  };

  return (
    <input
      className={Style.input}
      value={String(value ?? "")}
      onChange={(event) => handleChangeValue(event.currentTarget.value)}
      placeholder={"Введите число"}
    />
  );
};
export default NumberInput;
