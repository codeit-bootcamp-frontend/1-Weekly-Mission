import API_ENDPOINTS from "./endpoints";

const getUserFolder = async ({ userId, folderId }) => {
  const baseUrl = API_ENDPOINTS.baseUrl;
  const endpoint = API_ENDPOINTS.user.folders.getUserFolder.replace("{userId}", userId).replace("{folderId}", folderId);
  const response = await fetch(baseUrl + endpoint);
  const body = await response.json();
  return body;
};

export default getUserFolder;
