import { ReactNode, createContext, useState } from "react";
import { FolderData, FolderNameData } from "types/folder";

interface Context {
  folderNameList: FolderNameData[];
  handleFolderUpdate: (folderList: FolderData[]) => void;
}

interface Props {
  children: ReactNode;
}

export const FolderContext = createContext<Context>({
  folderNameList: [],
  handleFolderUpdate: () => null,
});

export function FolderContextProvider({ children }: Props) {
  const [folderNameList, setFolderNameList] = useState<FolderNameData[]>([]);

  const handleFolderUpdate = (folderList: FolderData[]) => {
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
