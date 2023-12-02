import {
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface loginState {
  isLogin: boolean;
  setIsLogin: (value: SetStateAction<boolean>) => void;
}

interface Props {
  children: ReactNode;
}

export const LoginContext = createContext<loginState | null>(null);

export function LoginProvider({ children }: Props) {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <LoginContext.Provider value={{ isLogin, setIsLogin }}>
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
