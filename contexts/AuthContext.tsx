import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import fetcher from "@/lib/axios";
import saveTokens from "@/utils/saveTokens";
import removeTokens from "@/utils/removeTokens";

interface UserInfoProps {
  email: string;
  id: number;
  image_source: string;
  name: string;
}

interface UserInfoData {
  data: UserInfoProps[];
}

interface LoginProps {
  email: string;
  password: string;
}

interface AuthContextProps {
  user: UserInfoProps | null;
  isPending: boolean;
  login: ({ email, password }: LoginProps) => Promise<boolean>;
  logout: () => void;
}

interface Token {
  accessToken: string;
  refreshToken: string;
}

interface TokenData {
  data: Token;
}

interface LoginProps {
  email: string;
  password: string;
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
  isPending: true,
  login: async () => false,
  logout: () => {},
});

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserInfoProps | null>(null);
  const [isPending, setIsPending] = useState(true);

  const getUser = async () => {
    setIsPending(true);
    let nextUser;

    try {
      const response = await fetcher<UserInfoData>({
        url: "/users",
        method: "get",
      });
      nextUser = response.data.data[0];
    } finally {
      if (nextUser) {
        setUser(nextUser);
        setIsPending(false);
      }
    }
  };

  const login = async ({ email, password }: LoginProps) => {
    try {
      const response = await fetcher<TokenData>({
        url: "/sign-in",
        method: "post",
        data: { email, password },
      });
      const { accessToken, refreshToken } = response.data.data;
      saveTokens({ accessToken, refreshToken });
      getUser();
      return true;
    } catch (error) {
      return false;
    }
  };

  const logout = () => {
    removeTokens();
    setUser(null);
    setIsPending(false);
  };

  const contextValue = { user, isPending, login, logout };

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) getUser();
  }, []);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("반드시 AuthProvider 안에서 사용해야 합니다.");
  }
  return context;
};

export { AuthContext, AuthProvider, useAuthContext };
