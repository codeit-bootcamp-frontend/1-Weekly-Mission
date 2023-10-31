import { requestAPI } from '../api';

// 특정 유저(userID)가 가지고 있는 특정 폴더(folderID) 내에 저장된 링크를 받아온다
const getLinksByUsersFolder = async (userID, folderID) => {
  if (folderID === '0' || !folderID) {
    const response = await requestAPI(`users/${userID}/links`);
    return response;
  } else {
    const response = await requestAPI(
      `users/${userID}/links?folderId=${folderID}`
    );
    return response;
  }
};

export default getLinksByUsersFolder;
