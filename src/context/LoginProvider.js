import { createContext, useState } from "react";

export const LoginInfoContext = createContext();

export const LoginInfoProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);

  const ChangeLoginInfo = (newIdInfo) => {
    setUserId(newIdInfo);
  };

  return <LoginInfoContext.Provider value={{ userId, ChangeLoginInfo }}>{children}</LoginInfoContext.Provider>;
};

// 한 곳에서 로그인하면 유지되게 하고 싶은데 일단 보류 중입니다..
