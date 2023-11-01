import requestAPI from '../api';

const getFolderListsByUser = async (userID) => {
  const { result } = await requestAPI(`users/${userID}/folders`);
  return result;
};

export default getFolderListsByUser;
