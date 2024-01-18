import * as T from "@/types/apiType";
import { AuthType, TokenType } from "@/types/type";
import { request } from "./fetch";

const auth = {
  signin: async (body: AuthType) => await request.post<TokenType>("/auth/sign-in", body),
  signup: async (body: AuthType) => await request.post<TokenType>("/auth/sign-up", body),
  checkEmailDuplicate: async (body: T.ReqPostCheckEmail) => await request.post<T.ResPostCheckEmail>("/users/check-email", body),
};

const user = {
  getUser: async () => await request.get<T.ResGetUser>("/users"),
  getUserById: async (userId: number) => await request.get<T.ResGetUser>(`/users/${userId}`),
};

const folder = {
  getFolders: async () => await request.get<T.ResGetFolders>("/folders"),
  getFolderById: async (folderId: number) => await request.get<T.ResGetFolders>(`/folders/${folderId}`),
  deleteFolder: async (folderId: number) => await request.delete(`/folders/${folderId}`),
  changeFolderName: async (folderId: number, body: T.ReqPutFolders) => await request.put(`/folders/${folderId}`, body),
};

const link = {
  getLinks: async () => await request.get<T.ResGetLinks>("/links"),
  getLinksById: async (folderId: number) => await request.get<T.ResGetLinks>(`/folders/${folderId}/links`),
  createLink: async (body: T.ReqPostLinks) => await request.post<T.ResPostLinks>("/links", body),
  deleteLink: async (linkId: number) => await request.delete(`/links/${linkId}`),
  setFavoriteLink: async (linkId: number, body: T.ReqPutLinks) => request.put<T.ResPutLinks>(`/links/${linkId}`, body),
};

const API = {
  auth,
  user,
  folder,
  link,
};

export default API;
