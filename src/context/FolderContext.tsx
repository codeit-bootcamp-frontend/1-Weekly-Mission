import React, { ReactNode, createContext, useState } from "react";

interface ChildrenProp {
  children: ReactNode;
}

export type FolderContextType = {
  folderId: number;
  changeFolderId: (newId: number) => void;
};

// Context 생성
export const FolderContext = createContext<FolderContextType | undefined>(undefined);

// Provider를 사용하여 데이터 제공
export const FolderProvider = ({ children }: ChildrenProp) => {
  const [folderId, setFolderId] = useState(0);

  // 데이터 업데이트 콜백 함수
  const changeFolderId = (newId: number) => {
    setFolderId(newId);
  };

  const value: FolderContextType = {
    folderId,
    changeFolderId,
  };

  return <FolderContext.Provider value={value}>{children}</FolderContext.Provider>;
};
