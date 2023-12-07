import { useState } from "react";

const useToggle = (value = false): [boolean, object] => {
  const [isOn, setIsOn] = useState<boolean>(value);
  const toggle = () => setIsOn((curValue) => !curValue);
  return [isOn, toggle];
};

export default useToggle;
