export type FolderMenuListProps = {
  name: string;
  user_id: number;
  links?: Links;
  id?: number;
  created_at?: string;
};

export type Links = {
  data: FolderData;
};

export type FolderData = {
  folder: Folder[];
};

export type Folder = {
  id: number;
  created_at: string;
  updated_at: any;
  url: string;
  title: string;
  description: string;
  image_source?: string;
  folder_id: number;
};
