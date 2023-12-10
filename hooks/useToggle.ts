import { MouseEvent, useState } from "react";

const useToggle = (value = false) => {
  const [isOn, setIsOn] = useState(value);

  const toggle = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsOn((curValue) => !curValue);
  };

  return { isOn, toggle };
};

export default useToggle;
