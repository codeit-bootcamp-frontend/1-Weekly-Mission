// camel case, snake case의 차이로 인해 우선 모두 옵셔널으로 받아오도록 함..
// sample/folder
export interface SampleOwnerType {
  id: number;
  name: string;
  profileImageSource: string | null;
}
export interface SampleLinksType {
  id: number;
  createdAt?: string;
  url: string;
  title: string | null;
  description: string | null;
  imageSource?: string;

  image_source?: string;
  created_at?: string;
}
export interface SampleFolderDataType {
  id: number;
  name: string;
  owner: SampleOwnerType;
  links: SampleLinksType[];
}
export interface SampleFolderType {
  folder: SampleFolderDataType;
}

// sample/user
export interface SampleUserType {
  id: number;
  name: string;
  email: string;
  profileImageSource?: string;

  image_source?: string;
}

// users/1
export interface UsersDataType {
  id: number;
  created_at: string;
  name: string;
  image_source?: string;
  email: string;
  auth_id: string;

  profileImageSource?: string;
}
export interface UsersType {
  data: UsersDataType[];
}

// users/1/folders
export interface FoldersDataType {
  id: number;
  created_at: string;
  name: string;
  user_id: number;
  link: {
    count: number;
  };
}
export interface FoldersType {
  data: FoldersDataType[];
}

// users/1/links
export interface LinksDataType {
  id: number;
  created_at: string;
  updated_at: string | null;
  url: string;
  title: string | null;
  description: string | null;
  image_source?: string;
  folder_id: number | null;

  createdAt?: string;
  imageSource?: string;
}
export interface LinksType {
  data: LinksDataType[];
}
