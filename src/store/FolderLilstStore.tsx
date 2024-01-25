/* 폴더리스트 전역 상태관리 */

import { FoldersArray } from "@/types/FolderType";
import { create } from "zustand";

type FolderListStore = {
  folderList: FoldersArray;
  setFolderList: any;
};

export const useFolderListStore = create<FolderListStore>()((set) => ({
  folderList: [],

  setFolderList: (newFolderList: any) => {
    set((state) => ({
      ...state,
      folderList: [...newFolderList],
    }));
  },
}));
