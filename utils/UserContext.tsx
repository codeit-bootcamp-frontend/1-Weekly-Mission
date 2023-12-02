import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";
import { UserInfoProps } from "@/types/type";

interface UserContextType {
  user: UserInfoProps | null;
  setUser: Dispatch<SetStateAction<UserInfoProps | null>>;
}

const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
});

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserInfoProps | null>(null);

  const value = {
    user,
    setUser,
  };

  return <UserContext.Provider value={value}> {children}</UserContext.Provider>;
};
