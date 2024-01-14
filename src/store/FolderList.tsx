import { FolderListStoreType, FolderType } from "@/types/FolderType";
import { create } from "zustand";

const INITIAL_FOLDER = {
  name: "전체",
};

export const useFolderListStore = create<FolderListStoreType>((set) => ({
  folderList: [],
  setFolderList: (newFolderList: [FolderType] | []) =>
    set((state) => ({ ...state, folderList: [...newFolderList] })),
}));
