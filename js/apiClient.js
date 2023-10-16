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

const setAccessToken = (data) => {
  return localStorage.setItem("accessToken", data);
};

const getAccessToken = () => {
  return localStorage.getItem("accessToken");
};

export { requestAPI, setAccessToken, getAccessToken };
