import { Folder, Link, User } from '@/types/Folder.types';
import { DEFAULT_USER_ID } from './config/default';
import api from './utils/api';

export const getLinksApi = (folderId: string) =>
  api<{ data: Link[] }>({
    url: `/users/${DEFAULT_USER_ID}/links`,
    method: 'get',
    params: { folderId },
  });

export const getFoldersApi = () =>
  api<{ data: Folder[] }>({
    url: `/users/${DEFAULT_USER_ID}/folders`,
    method: 'get',
  });

export const getFolderInfoApi = (folderId: string) =>
  api<{ data: Folder[] }>({
    url: `/folders/${folderId}`,
    method: 'get',
  });

export const getUserApi = () =>
  api<{ data: User[] }>({
    url: `/users/${DEFAULT_USER_ID}`,
    method: 'get',
  });
