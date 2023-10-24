const BASE_URL = "https://bootcamp-api.codeit.kr";

const commonFetchFunction = async (url, method, headers, body) => {
  let options = {
    method: method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: JSON.stringify(body),
  };

  const res = await fetch(BASE_URL + url, options);
  const data = await res.json();
  if (res.ok) {
    return data;
  } else {
    throw new Error(res.status + data.error.message);
  }
};

// POST
const fetchPost = async (url, body, headers = {}) => {
  return await commonFetchFunction(url, "POST", headers, body);
};

// GET
const fetchGet = async (url, headers = {}) => {
  return await commonFetchFunction(url, "GET", headers);
};

// PUT
const fetchPut = async (url, body, headers = {}) => {
  return await commonFetchFunction(url, "PUT", headers, body);
};

// DELETE
const fetchDelete = async (url, headers = {}) => {
  return await commonFetchFunction(url, "DELETE", headers);
};

export { fetchPost, fetchGet, fetchPut, fetchDelete };
