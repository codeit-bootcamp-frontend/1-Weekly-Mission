const BASE_URL = "https://bootcamp-api.codeit.kr";

const fetchPost = async (url, body, headers = {}) => {
  const fullUrl = BASE_URL + url;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: JSON.stringify(body),
  };
  const res = await fetch(fullUrl, options);
  const data = await res.json();
  if (res.ok) {
    return data;
  } else {
    throw new Error(res.status + data.error.message);
  }
};

const fetchGet = async (url, headers = {}) => {
  const fullUrl = BASE_URL + url;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  };
  const res = await fetch(fullUrl, options);
  const data = await res.json();
  if (res.ok) {
    return data;
  } else {
    throw new Error(res.status + data.error.message);
  }
};

const fetchPut = async (url, body, headers = {}) => {
  const fullUrl = BASE_URL + url;
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: JSON.stringify(body),
  };
  const res = await fetch(fullUrl, options);
  const data = await res.json();
  if (res.ok) {
    return data;
  } else {
    throw new Error(res.status + data.error.message);
  }
};

const fetchDelete = async (url, headers = {}) => {
  const fullUrl = BASE_URL + url;
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  };
  const res = await fetch(fullUrl, options);
  const data = await res.json();
  if (res.ok) {
    return data;
  } else {
    throw new Error(res.status + data.error.message);
  }
};

export { fetchPost, fetchGet, fetchPut, fetchDelete };
