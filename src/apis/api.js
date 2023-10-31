const APIpoint = 'https://bootcamp-api.codeit.kr/api/';

async function requestAPI(url, body) {
  const response = await fetch(`${APIpoint}${url}`, body);
  const result = await response.json();
  return result;
}

// getSample
const getSample = async () => {
  const data = await requestAPI('sample/folder');
  return data;
};

const getSampleUsersFolderLists = async () => {
  const data = await requestAPI('users/1/folders');
  return data;
};

const getUsersFolderLinkItems = async (folderID) => {
  if (folderID === '0' || !folderID) {
    const data = await requestAPI(`users/1/links`);
    return data;
  } else {
    const data = await requestAPI(`users/1/links?folderId=${folderID}`);
    return data;
  }
};

// getUser : 진짜 토큰으로 진짜 유저 요청
const getUser = async () => {
  const data = await requestAPI('users', {
    method: 'GET',
    headers: {
      Authorization: localStorage.getItem('accessToken'),
    },
  });

  return data;
};

const saveTokenToLocalStorage = async (responseData) => {
  const { data } = await responseData.json();
  const accessToken = data?.accessToken;
  const refreshToken = data?.refreshToken;
  localStorage.setItem('accessToken', accessToken);
  localStorage.setItem('refreshToken', refreshToken);
};

const requestSign = async (signType, data) => {
  const responseData = await fetch(`${APIpoint}sign-${signType}`, {
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
