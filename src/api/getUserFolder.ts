import API_ENDPOINTS from "./endpoints";

interface Props {
  userId: number;
  folderId: number;
}

interface FolderAPIResponse {}

const getUserFolder = async ({
  userId,
  folderId,
}: Props): Promise<FolderAPIResponse> => {
  const baseUrl = API_ENDPOINTS.baseUrl;
  const endpoint = API_ENDPOINTS.user.folders.getUserFolder({
    userId,
    folderId,
  });
  const response = await fetch(baseUrl + endpoint);
  const body: FolderAPIResponse = await response.json();
  return body;
};

export default getUserFolder;
