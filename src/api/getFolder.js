import API_ENDPOINTS from "./common";

const baseUrl = API_ENDPOINTS.baseUrl;
const endpoint = API_ENDPOINTS.sample.folder;

const getFolder = async () => {
  const response = await fetch(baseUrl + endpoint);
  const body = await response.json();
  return body;
};

export default getFolder;
