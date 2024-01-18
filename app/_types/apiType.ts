import { FolderType, LinkType, UserType } from "./type";

export type ResGetFolders = FolderType[];

export interface ReqPostFolders {
  name: string;
}
export type ResPostFolders = [FolderType];

export interface ReqPutFolders {
  name: string;
}
export type ResPutFolders = [FolderType];

export type ResGetLinks = LinkType[];

export interface ReqPostLinks {
  url: string;
  folderId: number;
}
export interface ResPostLinks extends LinkType {}

export interface ReqPutLinks {
  favorite: boolean;
}
export interface ResPutLinks extends LinkType {}

export type ResGetUser = UserType[];

export interface ReqPostCheckEmail {
  email: string;
}
export interface ResPostCheckEmail {
  isUsableEmail: boolean;
}
