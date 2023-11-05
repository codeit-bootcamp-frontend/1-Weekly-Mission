import { createContext, useContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState("");
  const [folderId, setFolderId] = useState("");

  return (
    <UserContext.Provider
      value={{
        userId,
        setUserId,
        folderId,
        setFolderId,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUserId = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("반드시 UserProvider 안에서 사용해야 합니다.");
  }

  return context.userId;
};

const useSetUserId = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("반드시 UserProvider 안에서 사용해야 합니다.");
  }

  return context.setUserId;
};

const useFolderId = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("반드시 UserProvider 안에서 사용해야 합니다.");
  }

  return context.folderId;
};

const useSetFolderId = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("반드시 LocaleProvider 안에서 사용해야 합니다.");
  }

  return context.setFolderId;
};

export { UserContext, UserProvider, useUserId, useSetUserId, useFolderId, useSetFolderId };
