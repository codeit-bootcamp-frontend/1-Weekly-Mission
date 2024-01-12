import { ReactNode } from "react";

export interface LinkInfo {
  id: number;
  created_at: string;
  updated_at: string | null;
  url: string;
  title: string;
  description: string;
  image_source: string;
  folder_id: number;
}

export interface FolderInfo {}

export interface FolderName {
  id: number;
  created_at: string;
  name: string;
  user_id: number;
  link: {
    count: number;
  };
}

export interface ChildrenProps {
  children?: ReactNode;
}

export interface SampleFolder {
  folder: {
    id: number;
    name: string;
    owner: {
      id: number;
      name: string;
      profileImageSource: string;
    };
    links: SampleLinks[];
    count: number;
  };
}

export interface SampleLinks {
  id: number;
  createdAt: string;
  url: string;
  title: string;
  description: string;
  imageSource: string;
}

export interface SampleUser {
  id: number;
  created_at: string;
  name: string;
  image_source: string;
  email: string;
  auth_id: string;
}

export interface User {
  id: number;
  created_at: string;
  name: string;
  image_source: string;
  email: string;
}

export interface Folder {
  id: number;
  created_at: string;
  name: string;
  user_id: number;
}
