const requestSign = async (url, data) => {
  const postedData = await fetch(`https://bootcamp-api.codeit.kr/api/${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return postedData;
};

const saveAccessTokenToLocalStorage = async (promise) => {
  const { data } = await promise.json();
  const accessToken = data?.accessToken;
  localStorage.setItem('accessToken', accessToken);
};

export { requestSign, saveAccessTokenToLocalStorage };
