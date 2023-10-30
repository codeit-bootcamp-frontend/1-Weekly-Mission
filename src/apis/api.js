const url = 'https://bootcamp-api.codeit.kr/api';

// getSample (type == user, folder)
const getSample = async (type) => {
  const response = await fetch(`${url}/sample/${type}`);
  const data = response.json();
  return data;
};

const getSampleUsersFolderLists = async () => {
  const response = await fetch(`${url}/users/1/folders`);
  const data = response.json();
  return data;
};

const getUsersFolderLinkItems = async (folderID) => {
  let response;

  if (folderID === '0' || !folderID) {
    response = await fetch(`${url}/users/1/links`);
  } else {
    response = await fetch(`${url}/users/1/links?folderId=${folderID}`);
  }
  const data = response.json();
  return data;
};

// getUser : 진짜 토큰으로 진짜 유저 요청
const getUser = async () => {
  const response = await fetch(`${url}/users`, {
    method: 'GET',
    headers: {
      Authorization: localStorage.getItem('accessToken'),
    },
  });
  const data = response.json();
  return data;
};

const saveTokenToLocalStorage = async (promise) => {
  const { data } = await promise.json();
  const accessToken = data?.accessToken;
  const refreshToken = data?.refreshToken;
  localStorage.setItem('accessToken', accessToken);
  localStorage.setItem('refreshToken', refreshToken);
};

const requestSign = async (signType, data) => {
  const responseData = await fetch(`${url}/sign-${signType}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  await saveTokenToLocalStorage(responseData);

  return responseData;
};

export {
  getSample,
  getSampleUsersFolderLists,
  getUsersFolderLinkItems,
  getUser,
  requestSign,
};
