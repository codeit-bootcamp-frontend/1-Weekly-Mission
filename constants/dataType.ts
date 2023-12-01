export interface Data {
  type: string;
}

export interface UserDataType {
  id: number;
  created_at: string;
  name: string;
  image_source: string | null;
  email: string;
  auth_id: string;
  profileImageSource: undefined;
}

export interface UserType extends Data {
  type: 'user';
  data: UserDataType[];
}

export interface FolderType {
  id: number;
  created_at: string;
  name: string;
  user_id: number;
  link: {
    count: number;
  };
}

export interface FolderListType extends Data {
  type: 'folder_list';
  data: FolderType[];
}

export interface LinkType {
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

export interface LinkListType extends Data {
  type: 'link_list';
  data: LinkType[];
}
