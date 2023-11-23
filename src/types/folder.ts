export interface LinkData {
  id: number;
  folder_id: number;
  title: string;
  description: string;
  created_at: string;
  updated_at: string | null;
  image_source: string;
  url: string;
}

export interface FolderData {
  id: number;
  user_id: number;
  name: string;
  created_at: string;
  link: {
    count: number;
  };
}

export type FolderNameData = Omit<FolderData, "created_at">;
