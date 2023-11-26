import useAsync from '../hooks/useAsync';
import { fetchGet } from './api';

export interface FolderItem {
  id: number;
  created_at: string;
  name: string;
  user_id: number;
  link: {
    count: number;
  };
}

export interface SampleFolderItem {
  id: number;
  name: string;
  owner: {
    id: number;
    name: string;
    profileImageSource: string;
  };
  links: {
    id: number;
    createdAt: string;
    url: string;
    title: string;
    description: string;
    imageSource: string;
  }[];
}

interface UserProfileItem {
  id: number;
  created_at: string;
  name: string;
  image_source: string;
  email: string;
  auth_id: string;
}

interface UserProfileSampleItem {
  id: number;
  name: string;
  email: string;
  profileImageSource: string;
}

export interface UserLinksItem {
  id: number;
  created_at: string;
  updated_at: string;
  url: string;
  title: string;
  description: string;
  image_source: string;
  folder_id: number;
}

const useFetchSampleFolder = () => {
  return useAsync(() => fetchSampleFolder(), []);
};

const fetchSampleFolder = () =>
  fetchGet('/api/sample/folder') as Promise<{ folder: SampleFolderItem }>;

const useFetchUserProfileSample = () => {
  return useAsync(() => fetchUserProfileSample(), []);
};

const fetchUserProfileSample = () =>
  fetchGet('/api/sample/user') as Promise<UserProfileSampleItem>;

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
  folderId: number | undefined = undefined,
) => {
  let query: string;
  if (folderId) {
    query = `/api/users/${userId}/links?folderId=${folderId}`;
  } else {
    query = `/api/users/${userId}/links`;
  }

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
