type TimeStamp = { created_at: string };

export type User = { id: number; name: string; email: string; image_source: string };

export type UserById = User & TimeStamp;

type Folder = { id: number; favorite: boolean; name: string } & TimeStamp;

export type Folders = { link_count: number } & Folder;

export type FolderById = {
  user_id: number;
} & Folder;

export type Link = {
  description: string;
  favorite: boolean;
  id: number;
  image_source: string;
  title: string;
  url: string;
} & TimeStamp;

export type Token = { accessToken: string; refreshToken: string };
