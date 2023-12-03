import api from './utils/api';
import { SharedFolder } from '@/types/Folder.types';

export const getSharedFolderApi = () =>
  api<SharedFolder>({
    url: '/sample/folder',
    method: 'get',
  });
