import { FolderListStoreType, FoldersArray } from "@/types/FolderType";
import { create } from "zustand";

export const useFolderListStore = create<FolderListStoreType>((set) => ({
  folderList: [],
  setFolderList: (newFolderList: FoldersArray) =>
    set((state) => ({ ...state, folderList: [...newFolderList] })),
}));
