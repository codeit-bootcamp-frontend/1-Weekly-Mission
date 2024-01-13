import { ReactNode, createContext, useState } from "react";

interface Context {
  selectedFolderName: string;
  updateFolderName: (category: string) => void;
}

interface Props {
  children: ReactNode;
}

export const FolderContext = createContext<Context>({
  selectedFolderName: "",
  updateFolderName: () => null,
});

export function FolderContextProvider({ children }: Props) {
  const DEFAULT = "전체";
  const [selectedFolderName, setSelectedFolderName] = useState(DEFAULT);

  const updateFolderName = (category: string) => {
    setSelectedFolderName(category);
  };

  return (
    <FolderContext.Provider value={{ selectedFolderName, updateFolderName }}>
      {children}
    </FolderContext.Provider>
  );
}
