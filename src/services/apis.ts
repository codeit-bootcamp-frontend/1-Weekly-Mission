import { Folder, Link, User } from '@/types/Folder.types';
import { DEFAULT_USER_ID } from './config/default';
import api from './utils/api';

export const getSharedFolderInfoApi = (folderId: string) =>
  api<{ data: Folder[] }>({
    url: `/folders/${folderId}`,
    method: 'get',
  });

export const getSharedLinksApi = (folderId: string) =>
  api<{ data: Link[] }>({
    url: `/users/${DEFAULT_USER_ID}/links`,
    method: 'get',
    params: { folderId },
  });

export const getSharedUserApi = () =>
  api<{ data: User[] }>({
    url: `/users/${DEFAULT_USER_ID}`,
    method: 'get',
  });

export const getFoldersApi = (accessToken: string) =>
  api<{ data: Folder[] }>({
    url: `/folders`,
    method: 'get',
    headers: { Authorization: `Bearer ${accessToken}` },
  });

export const getLinksApi = (accessToken: string, folderId: string) =>
  api<{ data: Link[] }>({
    url: `/links`,
    method: 'get',
    params: { folderId },
  });
