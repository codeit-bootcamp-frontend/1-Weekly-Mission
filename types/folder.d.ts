// sample folder
interface Folder {
  folder: FolderData;
}

interface FolderData {
  id: number;
  name: string;
  owner: Owner;
  links: FolderLinks[];
  count: number;
}

interface Owner {
  id: number;
  name: string;
  profileImageSource: string;
}

interface FolderLinks {
  id?: number;
  createdAt: string;
  url: string;
  title?: string;
  description: string;
  imageSource: string;
}

// user folder
interface UserFolderData {
  data: UserFolder[];
}

interface UserFolders {
  created_at: string;
  favorite: boolean;
  id: number;
  link_count: number;
  name: string;
}

interface UserFolder {
  id: number;
  created_at: string;
  favorite: boolean;
  name: string;
  user_id: number;
}
