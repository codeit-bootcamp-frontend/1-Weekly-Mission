import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

type FolderId = number | "all";

interface UserContextProps {
  userId: string | null;
  setUserId: Dispatch<SetStateAction<string | null>>;
  folderId: FolderId;
  setFolderId: Dispatch<SetStateAction<FolderId>>;
}

interface UserProviderProps {
  children: ReactNode;
}

const UserContext = createContext<UserContextProps>({
  userId: null,
  setUserId: () => {},
  folderId: "all",
  setFolderId: () => {},
});

const UserProvider = ({ children }: UserProviderProps) => {
  const [userId, setUserId] = useState<string | null>(null);
  const [folderId, setFolderId] = useState<FolderId>("all");

  const contextValue: UserContextProps = {
    userId,
    setUserId,
    folderId,
    setFolderId,
  };
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("반드시 UserProvider 안에서 사용해야 합니다.");
  }
  return context;
};

const useUserId = (): string | null => useUser().userId;

const useSetUserId = (): Dispatch<SetStateAction<string | null>> =>
  useUser().setUserId;

const useFolderId = (): FolderId => useUser().folderId;

const useSetFolderId = (): Dispatch<SetStateAction<FolderId>> =>
  useUser().setFolderId;

export {
  UserContext,
  UserProvider,
  useUserId,
  useSetUserId,
  useFolderId,
  useSetFolderId,
};
