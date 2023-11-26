import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface UserContextProps {
  userId: number | null;
  setUserId: Dispatch<SetStateAction<number | null>>;
  folderId: number | null;
  setFolderId: Dispatch<SetStateAction<number | null>>;
}

const UserContext = createContext<UserContextProps>({
  userId: null,
  setUserId: () => {},
  folderId: null,
  setFolderId: () => {},
});

interface UserProviderProps {
  children: ReactNode;
}

const UserProvider = ({ children }: UserProviderProps) => {
  const [userId, setUserId] = useState<number | null>(null);
  const [folderId, setFolderId] = useState<number | null>(null);

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

const useUserId = (): number | null => useUser().userId;

const useSetUserId = (): Dispatch<SetStateAction<number | null>> =>
  useUser().setUserId;

const useFolderId = (): number | null => useUser().folderId;

const useSetFolderId = (): Dispatch<SetStateAction<number | null>> =>
  useUser().setFolderId;

export {
  UserContext,
  UserProvider,
  useUserId,
  useSetUserId,
  useFolderId,
  useSetFolderId,
};
