import { useState } from "react";

export const useCounter = () => {
  const [counter, setCounter] = useState(0);

  const upCounter = (): void => {
    setCounter((prev) => prev + 1);
  };
  return {
    counter,
    upCounter
  };
};
