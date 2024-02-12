import React, { FC, useEffect } from "react";
import { useCounter } from "./useCounter";

interface CounterButtonProps {
  title: string;
}
const CounterButton: FC<CounterButtonProps> = ({ title }) => {
  const { counter, upCounter } = useCounter();

  useEffect(() => {
    console.log("component did mount");
    return () => {
      console.log("component did dismount");
    };
  }, []);

  useEffect(() => {
    console.log("update counter");
  }, [counter]);

  return <button onClick={upCounter}>{counter > 0 ? counter : title}</button>;
};

export default CounterButton;
