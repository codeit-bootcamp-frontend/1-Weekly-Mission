const url = 'https://bootcamp-api.codeit.kr/api';

// getSample (user, floder)
const getSample = async (type) => {
  const response = await fetch(`${url}/sample/${type}`);
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

export { getSample, requestSign };
