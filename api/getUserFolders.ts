import API_ENDPOINTS from "./endpoints";

interface Props {
  userId: number;
}

async function getUserFolders({ userId }: Props): Promise<UserFolderData> {
  const baseUrl = API_ENDPOINTS.baseUrl;
  const endpoint = API_ENDPOINTS.user.folders.getUserFolders({
    userId,
  });
  const response = await fetch(baseUrl + endpoint);
  const body: UserFolderData = await response.json();
  return body;
}

export default getUserFolders;
