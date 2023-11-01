import useAsync from '../hooks/useAsync';
import { fetchGet } from './api';

const useFetchSampleFolder = () => {
  return useAsync(() => fetchGet('/api/sample/folder'), []);
};

const useFetchUserProfileSample = () => {
  return useAsync(() => fetchGet('/api/sample/user'), []);
};

const useFetchUserProfile = (userId) => {
  return useAsync(() => fetchGet(`/api/users/${userId}`));
};

const useFetchUserFolders = (userId) => {
  return useAsync(() => fetchGet(`/api/users/${userId}/folders`));
};

const useFetchUserLinks = (userId, folderId = undefined) => {
  let query;
  if (folderId) {
    query = `/api/users/${userId}/links?folderId=${folderId}`;
  } else {
    query = `/api/users/${userId}/links`;
  }

  return useAsync(() => fetchGet(query));
};

export {
  useFetchSampleFolder,
  useFetchUserProfileSample,
  useFetchUserProfile,
  useFetchUserFolders,
  useFetchUserLinks,
};
