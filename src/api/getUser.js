import API_ENDPOINTS from "./common";

const baseUrl = API_ENDPOINTS.baseUrl;
const endpoint = API_ENDPOINTS.sample.user;

const getUser = async () => {
  const response = await fetch(baseUrl + endpoint);
  const body = await response.json();
  return body;
};

export default getUser;
