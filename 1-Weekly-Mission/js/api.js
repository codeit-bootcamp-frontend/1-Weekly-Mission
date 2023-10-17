const BASE_URL = "https://bootcamp-api.codeit.kr/api";

const fetchClient = async (url, method, body) => {
  const response = await fetch(`${BASE_URL}/${url}`, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (response.status === 400) {
    throw new Error(response.status);
  } else if (response.status === 200) {
    window.location.href = "./folder.html";
  }

  return response;
};

export { fetchClient };
