import { Owner } from "./user";

export interface LinkData {
  id: number;
  folder_id?: number;
  title: string;
  description: string;
  created_at: string;
  updated_at?: string | null;
  image_source?: string;
  url: string;
}

export type SampleLinkData = Omit<LinkData, "folder_id" | "updated_at" | "image_source"> & {
  imageSource?: string;
};

export interface FolderData {
  id: number;
  user_id: number;
  name: string;
  created_at: string;
  link: {
    count: number;
  };
}

export interface SampleFolderData {
  id: number;
  count: number;
  name: string;
  links: SampleLinkData[];
  owner: Owner;
}

export type FolderNameData = Omit<FolderData, "created_at">;
