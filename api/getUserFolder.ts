import API_ENDPOINTS from "./endpoints";

interface Props {
  userId: number;
  folderId: number;
}

const getUserFolder = async ({
  userId,
  folderId,
}: Props): Promise<UserFolderData> => {
  const baseUrl = API_ENDPOINTS.baseUrl;
  const endpoint = API_ENDPOINTS.user.folders.getUserFolder({
    userId,
    folderId,
  });
  const response = await fetch(baseUrl + endpoint);
  const body: UserFolderData = await response.json();
  return body;
};

export default getUserFolder;
