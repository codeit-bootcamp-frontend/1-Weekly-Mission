export type Folder = {
  id: number;
  createdAt: string;
  name: string;
  userId: number;
  link_count: number;
};

export type SelectedFolderId = number | "all";
