import { UserInfoProps } from "@/types/type";
import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { axiosInstance } from "./axiosInstance";

interface AuthContextType {
  user: UserInfoProps | null;
  isPending: boolean;
  login: ({ email, password }: { email: string; password: string }) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isPending: true,
  login: () => {},
  logout: () => {},
});

export const useUser = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserInfoProps | null>(null);
  const [isPending, setIsPending] = useState(true);

  const getUser = async () => {
    setIsPending(true);
    let nextUser;
    try {
      const res = await axiosInstance.get("/users");
      nextUser = res.data.data[0];
    } finally {
      setUser(nextUser);
      setIsPending(false);
    }
  };

  const login = async ({ email, password }: { email: string; password: string }) => {
    const res = await axiosInstance.post("/sign-in", { email, password });
    const { accessToken, refreshToken } = res.data.data;
    window.localStorage.setItem("accessToken", accessToken);
    window.localStorage.setItem("refreshToken", refreshToken);
    getUser();
  };

  const logout = () => {
    setUser(null);
    setIsPending(false);
  };

  const value = { user, isPending, login, logout };
  useEffect(() => {
    const accessToken = window.localStorage.getItem("accessToken");
    if (accessToken) getUser();
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
