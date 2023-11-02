import { createContext, useState } from "react";

export const FolderContext = createContext();

export function FolderContextProvider({ defaultValue = [], children }) {
  const [folderNameList, setFolderNameList] = useState(defaultValue);

  const handleFolderUpdate = (folderList) => {
    const folderNames = folderList.map((folder) => folder.name);
    setFolderNameList(folderNames);
  };

  return (
    <FolderContext.Provider value={{ folderNameList, handleFolderUpdate }}>
      {children}
    </FolderContext.Provider>
  );
}
