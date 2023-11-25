export enum URLS {
  SHARED_USER = "SHARED_USER",
  SHARED_FOLDER = "SHARED_FOLDER",
  SHARED_FOLDERNAME = "SHARED_FOLDERNAME",
  FOLDER_USER = "FOLDER_USER",
  FOLDER_CATEGORY = "FOLDER_CATEGORY",
  FOLDER_LINKS = "FOLDER_LINKS",
  DEFAULT = "DEFAULT",
}

type LinkData = {
  id: number;
  created_at: string;
  updated_at: string | null;
  url: string;
  title: string;
  description: string;
  image_source: string;
  folder_id: number;
};

interface Link {
  path: URLS.FOLDER_LINKS;
  data: LinkData[];
}

export type FolderData = {
  id: number;
  created_at: string;
  name: string;
  user_id: number;
  link: {
    count: number;
  };
};

interface Folder {
  path: URLS.FOLDER_CATEGORY;
  data: FolderData[];
}

type UserData = {
  id: number;
  created_at: string;
  name: string;
  image_source: string;
  email: string;
  auth_id: string;
};

interface User {
  path: URLS.FOLDER_USER;
  data: UserData[];
}

interface SampleUser {
  path: URLS.SHARED_USER;
  id: number;
  name: string;
  email: string;
  profileImageSource: string;
}

type SampleLink = {
  id: number;
  createdAt: string;
  url: string;
  title: string;
  description: string;
  imageSource: string;
};

interface SampleFolder {
  path: URLS.SHARED_FOLDER | URLS.SHARED_FOLDERNAME;
  folder: {
    id: number;
    name: string;
    owner: {
      id: number;
      name: string;
      profileImageSource: string;
    };
    links: SampleLink[];
  };
}

export type Action = SampleUser | SampleFolder | User | Folder | Link;

export type UrlType = keyof typeof URLS;

export type MakeURL = (path: UrlType, id?: number) => string;

interface Rentity {
  id: number;
  name: string;
  email: string;
  profileImg: string;
}

interface RsampleUser extends Rentity {
  path: URLS.SHARED_USER;
}

interface RsampleFolder {
  path: URLS.SHARED_FOLDER;
  links: SampleLink[];
}

interface RsampleFolderName {
  path: URLS.SHARED_FOLDERNAME;
  folderName: string;
  owner: {
    id: number;
    name: string;
    profileImageSource: string;
  };
}

interface Ruser extends Rentity {
  path: URLS.FOLDER_USER;
}

export type Return = RsampleUser | RsampleFolder | RsampleFolderName | Ruser | Folder | Link | undefined;

export interface ReduceData {
  (action: Action): Return;
}

export type Rgeneric<T> = T extends URLS.SHARED_USER
  ? RsampleUser
  : T extends URLS.SHARED_FOLDER
  ? RsampleFolder
  : T extends URLS.SHARED_FOLDERNAME
  ? RsampleFolderName
  : T extends URLS.FOLDER_USER
  ? Ruser
  : T extends URLS.FOLDER_CATEGORY
  ? Folder
  : T extends URLS.FOLDER_LINKS
  ? Link
  : undefined;
