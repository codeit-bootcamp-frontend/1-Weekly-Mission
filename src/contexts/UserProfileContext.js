import React, { useContext, createContext, useState } from "react";

const UserProfileContext = createContext(null);

export function UserProfileContextProvider({ children }) {
  const [userProfile, setUserProfile] = useState({});
  return (
    <UserProfileContext.Provider
      children={children}
      value={{
        userProfile,
        setUserProfile,
      }}
    >
      {children}
    </UserProfileContext.Provider>
  );
}

export function useUserProfileContext() {
  const userProfileContext = useContext(UserProfileContext);
  if (!userProfileContext) {
    throw new Error("userProfileContext.Provider is not found");
  }
  return userProfileContext;
}
