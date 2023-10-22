import { useState } from "react";

// Button click event visible event에 사용할 custom hook
const useToggle = (value = false) => {
  const [isShow, setIsShow] = useState(value);
  const toggle = () => setIsShow((curValue) => !curValue);
  return [isShow, toggle];
};

export default useToggle;
