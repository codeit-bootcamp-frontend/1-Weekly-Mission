const requestAPI = async ({ url, method, data }) => {
  try {
    const response = await fetch(`https://bootcamp-api.codeit.kr/api/${url}`, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.status !== 200) {
      throw new Error(response.status);
    }
    const parsedData = await response.json();
    return parsedData;
  } catch (error) {
    throw error;
  }
};

const checkToken = (token) => {
  return localStorage.getItem(token);
};

export { requestAPI, checkToken };
