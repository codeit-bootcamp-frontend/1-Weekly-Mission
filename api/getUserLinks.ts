import API_ENDPOINTS from "./endpoints";

interface getUserLinksProps {
  userId: number;
  folderId: number | null;
}

async function getUserLinks({
  userId,
  folderId,
}: getUserLinksProps): Promise<LinksData> {
  const baseUrl = API_ENDPOINTS.baseUrl;
  const endpoint = API_ENDPOINTS.user.links.getUserLinks({ userId });
  const query = folderId ? `?folderId=${folderId}` : "";
  const response = await fetch(baseUrl + endpoint + query);
  const body: LinksData = await response.json();
  return body;
}

export default getUserLinks;
