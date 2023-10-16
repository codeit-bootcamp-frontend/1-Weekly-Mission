const requestAPI = async (url, data) => {
  const response = await fetch(`https://bootcamp-api.codeit.kr/api/${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response;
};

const checkToken = (token) => {
  return localStorage.getItem(token);
};

export { requestAPI, checkToken };
