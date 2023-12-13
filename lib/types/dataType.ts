type CommonData<T> = { data: T[] };

export interface UserData {
  id: number;
  created_at: string;
  name: string;
  image_source: string | null;
  email: string;
  auth_id: string;
  profileImageSource: undefined;
}

export interface FolderData {
  id: number;
  created_at: string;
  name: string;
  user_id: number;
  link: {
    count: number;
  };
}

export interface LinkData {
  id: number;
  created_at: string;
  updated_at: string | null;
  url: string;
  title: string | null;
  description: string | null;
  image_source: string | null;
  folder_id: number | null;
  createdAt: undefined;
  imageSource: undefined;
}

export type UserList = CommonData<UserData>;
export type FolderList = CommonData<FolderData>;
export type LinkList = CommonData<LinkData>;
