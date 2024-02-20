import React, { FC, useState } from "react";
import Style from "./calculator.module.scss";
import ActionButton, { Action } from "../../widgets/ActionButton/ActionButton";

/*
    Создать калькулятор

    Дизайн: 2 строки ввода, кнопки с действиями, результат

    Действия: +-/*
    
    Важно: в строки ввода можно ввести тоьлко целые числа (НЕ буквы, НЕ десятичные числа)

    путь выполнения:
    1. +Создать кнопки с действиями и проверить, что они нажимаются (например при нажатии логировать фразу)
    2. Создать инпуты и проверить, что введеный текст сохраняется (<input onChange={(event) => handleInputUpdate(event.currentTarget.value)} />)
    3. Добавить валидацию на инпуты. Валидация должна ЗАПРЕЩАТЬ ввод не валидного символа, а не "красить" инпут в красный цвет
    4. "Собрать" кнопки и строки в единую систему

    Необходимые компоненты:
    1. Компонент для поля ввода
    2. Компонент для кнопки (в нее в пропсах нужно передавать действие, за которое она отвечает)
    3. Компонент для результата, который будет все считать и выводить ответ
*/
console.log();
const Calculator: FC = () => {
  const [firstValue, setFirstValue] = useState("");
  const [secondValue, setSecondValue] = useState("");

  const onActionClick = (action: Action): void => {
    console.log(action);
    switch (action) {
      case "+":
        break;
      default:
        break;
    }
  };

  const handleChangeFirstValue = (newValue: string): void => {
    console.log(newValue);
    if (Number.isNaN(+newValue)) {
      return;
    }
    setFirstValue(newValue.trim());
  };

  return (
    <div className={Style.screen}>
      <input
        className={Style.input}
        value={firstValue}
        onChange={(event) => handleChangeFirstValue(event.currentTarget.value)}
        placeholder='Введите число'
      />
      <input className={Style.input} type='number' placeholder='Введите число' />

      <div className={Style.buttons}>
        <ActionButton type={"+"} onClick={onActionClick} />
        <ActionButton type={"-"} onClick={onActionClick} />
        <ActionButton type={"*"} onClick={onActionClick} />
        <ActionButton type={"/"} onClick={onActionClick} />
      </div>

      <input className={Style.output} type='text' readOnly={true} />
    </div>
  );
};
export default Calculator;
