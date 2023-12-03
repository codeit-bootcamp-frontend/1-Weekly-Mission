import api from './utils/api';
import { DEFAULT_USER_ID } from './config/default';
import { Link, SharedFolder } from '@/types/Folder.types';

export const getSharedFolderApi = () =>
  api<SharedFolder>({
    url: '/sample/folder',
    method: 'get',
  });

export const getLinksApi = (folderId: string) =>
  api<{ data: Link[] }>({
    url: `/users/${DEFAULT_USER_ID}/links`,
    method: 'get',
    params: { folderId },
  });
