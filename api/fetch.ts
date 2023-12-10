import useAsync from "@/hooks/useAsync";
import { fetchGet } from "./api";
import {
  FolderItem,
  UserProfileItem,
  UserLinksItem,
  SampleFolderItem,
  UserProfileSampleItem,
} from "../types/api";

const useFetchSampleFolder = () => {
  return useAsync(() => fetchSampleFolder(), []);
};

const fetchSampleFolder = () =>
  fetchGet("/api/sample/folder") as Promise<{ folder: SampleFolderItem }>;

const useFetchUserProfileSample = () => {
  return useAsync(() => fetchUserProfileSample(), []);
};

const fetchUserProfileSample = () =>
  fetchGet("/api/sample/user") as Promise<UserProfileSampleItem>;

const useFetchUserProfile = (userId: number) => {
  return useAsync(() => fetchUserProfile(userId), [userId]);
};

const fetchUserProfile = (userId: number) =>
  fetchGet(`/api/users/${userId}`) as Promise<{ data: UserProfileItem[] }>;

const useFetchUserFolders = (userId: number) => {
  return useAsync(() => fetchUserFolders(userId), [userId]);
};

const fetchUserFolders = (userId: number) =>
  fetchGet(`/api/users/${userId}/folders`) as Promise<{
    data: FolderItem[];
  }>;

const useFetchUserLinks = (
  userId: number,
  folderId: number | undefined = undefined
) => {
  const query = `/api/users/${userId}/links${
    folderId ? `?folderId=${folderId}` : ""
  }`;

  return useAsync(() => fetchUserLinks(query), [userId, folderId]);
};

const fetchUserLinks = (query: string) =>
  fetchGet(query) as Promise<{ data: UserLinksItem[] }>;

export {
  useFetchSampleFolder,
  useFetchUserProfileSample,
  useFetchUserProfile,
  useFetchUserFolders,
  useFetchUserLinks,
};
