import API_ENDPOINTS from "./endpoints";

interface FolderAPIResponse {}

const baseUrl = API_ENDPOINTS.baseUrl;
const endpoint = API_ENDPOINTS.sample.getSampleFolder;

async function getFolder(): Promise<FolderAPIResponse> {
  const response = await fetch(baseUrl + endpoint);
  const body: FolderAPIResponse = await response.json();
  return body;
}

export default getFolder;
