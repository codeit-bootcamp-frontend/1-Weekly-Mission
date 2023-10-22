const BASE_URL = "https://bootcamp-api.codeit.kr";

const commonFetchFunction = async (url, options) => {
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
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: JSON.stringify(body),
  };
  return await commonFetchFunction(url, options);
};

// GET
const fetchGet = async (url, headers = {}) => {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  };
  return await commonFetchFunction(url, options);
};

// PUT
const fetchPut = async (url, body, headers = {}) => {
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: JSON.stringify(body),
  };

  return await commonFetchFunction(url, options);
};

// DELETE
const fetchDelete = async (url, headers = {}) => {
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  };

  return await commonFetchFunction(url, options);
};

export { fetchPost, fetchGet, fetchPut, fetchDelete };
