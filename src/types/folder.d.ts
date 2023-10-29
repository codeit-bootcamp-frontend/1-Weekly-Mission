// sample folder
interface Folder {
  folder: FolderData;
}

interface FolderData {
  id: number;
  name: string;
  owner: OwnerData;
  links: LinksData[];
  count: number;
}

interface OwnerData {
  id: number;
  name: string;
  profileImageSource: string;
}

interface LinksData {
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
  user_id: number;
}
