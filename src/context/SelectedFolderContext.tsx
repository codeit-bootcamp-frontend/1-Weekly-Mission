import { ReactNode, createContext, useState } from "react";
import { DEFAULT } from "@/common/constants";

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
  const [selectedFolderName, setSelectedFolderName] = useState(DEFAULT);

  const updateFolderName = (category: string) => {
    setSelectedFolderName(category ? category : DEFAULT);
  };

  return (
    <FolderContext.Provider value={{ selectedFolderName, updateFolderName }}>
      {children}
    </FolderContext.Provider>
  );
}
