import { Action } from "../../widgets/ActionButton/ActionButton.tsx";

export const helpers = (action: Action) => {
  const methods: Record<Action, (a: number, b: number) => number> = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b
  };

  return methods[action];
};
