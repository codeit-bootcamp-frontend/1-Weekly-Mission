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
interface UserFolder {
  data: UserFolderData[];
}

interface UserFolderData {
  id: number;
  created_at: string;
  name: string;
  image_source: string;
  email: string;
  auth_id: string;
}
