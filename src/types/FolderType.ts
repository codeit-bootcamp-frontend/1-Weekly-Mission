export interface FolderType {
  id: number | null;
  created_at?: string;
  favorite?: boolean;
  name: string;
}

export type FolderListStoreType = {
  folderList: [FolderType] | [];
  setFolderList: (newFolderList: [FolderType] | []) => void;
};
