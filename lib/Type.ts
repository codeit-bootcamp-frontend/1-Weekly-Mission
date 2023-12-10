//Prop

export interface UserDataProps {
  userData: UserData;
}

//User
export interface UserData {
  id: number;
  name: string;
  email: string;
  profileImageSource?: string;
}

//Link
export interface Link {
  id: number;
  createdAt?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
  url: string;
  title: string | null;
  description: string | null;
  image_source: string | null;
  imageSource: string | null;
  folder_id?: number | null;
}

//User Folder
export interface UserFolder {
  id: number;
  created_at: string;
  name: string;
  user_id: number;
  link: {
    count: number;
  };
}

export interface UserFolderList {
  data: UserFolder[];
}

export interface UserFolerLinks {
  data: Link[];
}

//SharedFoler

export interface Owner {
  id: number;
  name: string;
  profileImageSource: string;
}

export interface SharedFolder {
  id: number;
  name: string;
  owner: Owner;
  links: Link[];
  count: number;
}

export interface SharedFolderData {
  folder?: SharedFolder;
}
