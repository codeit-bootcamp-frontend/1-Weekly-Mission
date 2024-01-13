import { PATHS } from "@/constants/path";

export type LinkData = {
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
  path: typeof PATHS.FOLDER_LINKS;
  data: LinkData[];
}

export type FolderData = {
  id: number;
  created_at: string;
  name: string;
  favorite: true;
  link_count: number;
};

interface Folder {
  path: typeof PATHS.FOLDER_CATEGORY;
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
  path: typeof PATHS.FOLDER_USER;
  data: UserData[];
}

interface SampleUser {
  path: typeof PATHS.SHARED_USER;
  id: number;
  name: string;
  email: string;
  profileImageSource: string;
}

export type SampleLink = {
  id: number;
  createdAt: string;
  url: string;
  title: string;
  description: string;
  imageSource: string;
};

interface SampleFolder {
  path: typeof PATHS.SHARED_FOLDER | typeof PATHS.SHARED_FOLDERNAME;
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

export type UrlType = keyof typeof PATHS;

export type MakeURL = (path: UrlType, id?: number) => string;

interface Rentity {
  id: number;
  name: string;
  email: string;
  profileImg: string;
}

interface RsampleUser extends Rentity {
  path: typeof PATHS.SHARED_USER;
}

export interface RsampleFolder {
  path: typeof PATHS.SHARED_FOLDER;
  links: SampleLink[];
}

interface RsampleFolderName {
  path: typeof PATHS.SHARED_FOLDERNAME;
  folderName: string;
  owner: {
    id: number;
    name: string;
    profileImageSource: string;
  };
}

interface Ruser extends Rentity {
  path: typeof PATHS.FOLDER_USER;
}

export interface Rlink {
  path: typeof PATHS.FOLDER_LINKS;
  links: LinkData[];
}

export type Rgeneric<T> = T extends typeof PATHS.SHARED_USER
  ? RsampleUser
  : T extends typeof PATHS.SHARED_FOLDER
  ? RsampleFolder
  : T extends typeof PATHS.SHARED_FOLDERNAME
  ? RsampleFolderName
  : T extends typeof PATHS.FOLDER_USER
  ? Ruser
  : T extends typeof PATHS.FOLDER_CATEGORY
  ? Folder
  : T extends typeof PATHS.FOLDER_LINKS
  ? Rlink
  : undefined;
