import useAsync from "../hooks/useAsync";
import { fetchGet } from "./api";

const useFetchSampleFolder = () => {
  const [state, refetch] = useAsync(() => fetchGet("/api/sample/folder"), []);
  return state;
};

const useFetchUserProfileSample = () => {
  const [state, refetch] = useAsync(() => fetchGet("/api/sample/user"), []);
  return state;
};

const useFetchUserProfile = (userId) => {
  console.log(1);
  const [state, refetch] = useAsync(() => fetchGet(`/api/users/${userId}`));
  return state;
};

const useFetchUserFolders = (userId) => {
  const [state, refetch] = useAsync(() =>
    fetchGet(`/api/users/${userId}/folders`)
  );
  return state;
};

const useFetchUserLinks = (userId, folderId = undefined) => {
  let query;
  if (folderId) {
    query = `/api/users/${userId}/links?folderId=${folderId}`;
  } else {
    query = `/api/users/${userId}/links`;
  }
  const [state, refetch] = useAsync(() => fetchGet(query));
  return state;
};

export {
  useFetchSampleFolder,
  useFetchUserProfileSample,
  useFetchUserProfile,
  useFetchUserFolders,
  useFetchUserLinks,
};
