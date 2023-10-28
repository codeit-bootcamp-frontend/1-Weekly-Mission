import { fetchClientJson } from "utils/apiClient.js";

export const getFolderLinkList = async (userId, folderId) => {
  const query = folderId ? `?folderId=${folderId}` : "";

  const result = await fetchClientJson({
    url: `users/${userId}/links${query}`,
    method: "GET",
  });
  return result.data;
};
