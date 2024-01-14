export type Folder = {
  id: number;
  createdAt: string;
  name: string;
  userId: number;
  link_count: number;
};

export type SelectedFolderId = number | "all";

export type Return_folder = {
  id: number;
  created_at: string;
  name: string;
  user_id: number;
  favorite: boolean;
};
