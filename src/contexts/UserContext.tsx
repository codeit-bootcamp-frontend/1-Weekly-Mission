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

const useUserId = (): number | null => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("반드시 UserProvider 안에서 사용해야 합니다.");
  }

  return context.userId;
};

const useSetUserId = (): Dispatch<SetStateAction<number | null>> => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("반드시 UserProvider 안에서 사용해야 합니다.");
  }

  return context.setUserId;
};

const useFolderId = (): number | null => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("반드시 UserProvider 안에서 사용해야 합니다.");
  }

  return context.folderId;
};

const useSetFolderId = (): Dispatch<SetStateAction<number | null>> => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("반드시 UserProvider 안에서 사용해야 합니다.");
  }

  return context.setFolderId;
};

export {
  UserContext,
  UserProvider,
  useUserId,
  useSetUserId,
  useFolderId,
  useSetFolderId,
};
