import { useState } from 'react';

// Button click event visible event에 사용할 custom hook
const useToggle = (value = false) => {
  const [isOn, setIsOn] = useState(value);
  const toggle = () => setIsOn((curValue) => !curValue);
  return [isOn, toggle];
};

export default useToggle;
