import { useState } from "react";

const useToggle = (value = false) => {
  const [isLogin, setIsLogin] = useState(value);
  const toggle = () => setIsLogin((curValue) => !curValue);
  return [isLogin, toggle];
};

export default useToggle;
