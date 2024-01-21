// sample folder
export interface Folder {
  folder: FolderData;
}

export interface FolderData {
  id: number;
  name: string;
  owner: Owner;
  links: FolderLinks[];
  count: number;
}

export interface Owner {
  id: number;
  name: string;
  profileImageSource: string;
}

export interface FolderLinks {
  id?: number;
  createdAt: string;
  url: string;
  title?: string;
  description: string;
  imageSource: string;
}

// user folder
export interface UserFolderData {
  data: UserFolder[];
}

export interface UserFolders {
  created_at: string;
  favorite: boolean;
  id: number;
  link_count: number;
  name: string;
}

export interface UserFolder {
  id: number;
  created_at: string;
  favorite: boolean;
  name: string;
  user_id: number;
}
