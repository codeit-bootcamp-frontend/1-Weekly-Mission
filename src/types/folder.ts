export interface Folder {
  id: number;
  name: string;
  link_count: number;
  favorite: boolean;
  created_at: string;
}

export type FolderData = Omit<Folder, " link_count"> & {
  user_id: number;
};
