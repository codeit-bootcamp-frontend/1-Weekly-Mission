const BASE_URL = 'https://bootcamp-api.codeit.kr';

interface CommonFetchFuncProps {
  url: string;
  method: string;
  headers: object;
  body?: object | null;
}

const commonFetchFunction = async ({
  url,
  method,
  headers,
  body = null,
}: CommonFetchFuncProps) => {
  let options = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  };
  if (body !== null) {
    Object.assign(options, { body: JSON.stringify(body) });
  }

  const res = await fetch(BASE_URL + url, options);
  const data = await res.json();
  if (res.ok) {
    return data;
  } else {
    throw new Error(res.status + data.error.message);
  }
};

// POST
const fetchPost = async (url: string, body: object, headers = {}) => {
  return await commonFetchFunction({ url, method: 'POST', headers, body });
};

// GET
const fetchGet = async (url: string, headers = {}) => {
  return await commonFetchFunction({ url, method: 'GET', headers });
};

// PUT
const fetchPut = async (url: string, body: object, headers = {}) => {
  return await commonFetchFunction({ url, method: 'PUT', headers, body });
};

// DELETE
const fetchDelete = async (url: string, headers = {}) => {
  return await commonFetchFunction({ url, method: 'DELETE', headers });
};

export { fetchPost, fetchGet, fetchPut, fetchDelete };
