import { createContext, useState } from "react";

export const FolderContext = createContext();

export function FolderContextProvider({ defaultValue = [], children }) {
  const [folderNameList, setFolderNameList] = useState(defaultValue);

  const handleFolderUpdate = (folderList) => {
    const newFolderList = folderList.map((folder) => {
      const { name, link, user_id, id } = folder;
      return { name, link, user_id, id };
    });

    setFolderNameList(newFolderList);
  };

  return (
    <FolderContext.Provider value={{ folderNameList, handleFolderUpdate }}>
      {children}
    </FolderContext.Provider>
  );
}
