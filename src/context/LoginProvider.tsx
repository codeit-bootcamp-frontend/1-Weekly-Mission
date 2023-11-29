import React, { createContext, useState, ReactNode } from "react";

interface ChildrenProp {
  children: ReactNode;
}

export type LoginInfo = {
  userId: number | undefined;
  changeLoginInfo: (newIdInfo: number) => void;
};

export const LoginInfoContext = createContext<LoginInfo | undefined>(undefined);

export const LoginInfoProvider = ({ children }: ChildrenProp) => {
  const [userId, setUserId] = useState<number | undefined>(undefined);

  const changeLoginInfo = (newIdInfo: number) => {
    setUserId(newIdInfo);
  };

  const value: LoginInfo = {
    userId,
    changeLoginInfo,
  };

  return <LoginInfoContext.Provider value={value}>{children}</LoginInfoContext.Provider>;
};

// 한 곳에서 로그인하면 유지되게 하고 싶은데 일단 보류 중입니다..
