type Link = {
  id: number;
  created_at: string;
  updated_at: string | null;
  url: string;
  title: string;
  description: string;
  image_source: string | null;
  folder_id: number;
};

type FolderMenuBar = {
  folderId: number;
  folderName: string;
  links?: { data: { folder: Link[] } };
};

export type FolderMenuBarData = {
  [key: string]: FolderMenuBar;
};
