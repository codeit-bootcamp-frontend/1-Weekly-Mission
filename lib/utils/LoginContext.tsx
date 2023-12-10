import {
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import { checkLocalStorage } from "./localStorage";

interface loginState {
  isLogin: boolean;
  setIsLogin: (value: SetStateAction<boolean>) => void;
  userEmail: string;
  setUserEmail: (value: SetStateAction<string>) => void;
}

interface Props {
  children: ReactNode;
}

export const LoginContext = createContext<loginState | null>(null);

export function LoginProvider({ children }: Props) {
  const [isLogin, setIsLogin] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const isLogin = checkLocalStorage();
    setIsLogin(isLogin);
  }, []);

  return (
    <LoginContext.Provider
      value={{ isLogin, setIsLogin, userEmail, setUserEmail }}
    >
      {children}
    </LoginContext.Provider>
  );
}

export function useLogin() {
  const logContext = useContext(LoginContext);
  if (!logContext) {
    throw new Error("LoginContext 안에서 써야 합니다");
  }

  return logContext;
}
