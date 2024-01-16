// "전체" 폴더 타입
export interface InitialFolderType {
  name: string;
}

// 유저가 만든 폴더 타입
export interface FolderType extends InitialFolderType {
  id: number;
  created_at: string;
  favorite: boolean;
  link_count: number;
}

export type FoldersArray = (FolderType | InitialFolderType)[] | [];

export type FolderListStoreType = {
  folderList: FoldersArray;
  setFolderList: (newFolderList: FoldersArray) => void;
};
