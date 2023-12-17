const BASE_URL = "https://bootcamp-api.codeit.kr";

type methodType = "POST" | "GET" | "PATCH" | "PUT" | "DELETE";

interface CommonFetchFuncProps {
  url: string;
  method: methodType;
  headers: Record<string, string>;
  body?: object | null;
}

const commonFetchFunction = async ({
  url,
  method,
  headers,
  body = null,
}: CommonFetchFuncProps) => {
  const options = {
    method: method,
    headers: {
      "Content-Type": "application/json",
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
  }
  throw new Error(res.status + data.error.message);
  // const status = res.status;
  // const errorMsg = data.error.message;
  // return { errorMsg, status };
};

// POST
const fetchPost = async (url: string, body: object, headers = {}) => {
  return await commonFetchFunction({ url, method: "POST", headers, body });
};

// GET
const fetchGet = async (url: string, headers = {}) => {
  return await commonFetchFunction({ url, method: "GET", headers });
};

// PUT
const fetchPut = async (url: string, body: object, headers = {}) => {
  return await commonFetchFunction({ url, method: "PUT", headers, body });
};

// DELETE
const fetchDelete = async (url: string, headers = {}) => {
  return await commonFetchFunction({ url, method: "DELETE", headers });
};

export { fetchPost, fetchGet, fetchPut, fetchDelete };
