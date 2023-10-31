import { requestAPI } from '../api';

const getFolderListsByUser = async (userID) => {
  const response = await requestAPI(`users/${userID}/folders`);
  return response;
};

export default getFolderListsByUser;
