import { createContext, useState } from "react";

export const LoginInfoContext = createContext();

export const LoginInfoProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);

  const ChangeLoginInfo = (newIdInfo) => {
    setUserId(newIdInfo);
  };

  return <LoginInfoContext.Provider value={{ userId, ChangeLoginInfo }}>{children}</LoginInfoContext.Provider>;
};
