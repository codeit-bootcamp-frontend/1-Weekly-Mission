import { string } from "yargs";

export interface FolderLinkData {
  id?: number;
  folder_id?: number;
  title: string;
  description: string;
  created_at?: string;
  updated_at?: string | null;
  image_source?: string;
  url: string;
}

export type SampleLinkData = Omit<
  FolderLinkData,
  "folder_id" | "updated_at" | "image_source"
> & {
  imageSource?: string;
};

export interface TabButtonData {
  id: number;
  user_id?: number;
  name?: string;
  created_at?: string;
  link?: {
    count: number;
  };
}

export interface UserLoginData {
  lists: {
    id?: number;
    auth_id?: string;
    name?: string;
    email?: string;
    image_source?: string;
    created_at?: string;
    userImage?: string;
    userEmail?: string;
  };
}
