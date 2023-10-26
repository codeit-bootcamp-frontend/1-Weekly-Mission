const url = 'https://bootcamp-api.codeit.kr/api';

const getSampleUser = async () => {
  const response = await fetch(`${url}/sample/user`);
  const data = response.json();
  return data;
};

const getSampleFolder = async () => {
  const response = await fetch(`${url}/sample/folder`);
  const data = response.json();
  return data;
};

const requestSign = async (signType, data) => {
  const responseData = await fetch(`${url}/sign-${signType}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return responseData;
};

const saveAccessTokenToLocalStorage = async (promise) => {
  const { data } = await promise.json();
  const accessToken = data?.accessToken;
  localStorage.setItem('accessToken', accessToken);
};

export {
  getSampleFolder,
  getSampleUser,
  requestSign,
  saveAccessTokenToLocalStorage,
};
