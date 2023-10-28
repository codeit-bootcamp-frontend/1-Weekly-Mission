import { fetchClientJson } from "utils/apiClient.js";

const getUserFolderList = async (userId) => {
  const { data } = await fetchClientJson({
    url: `users/${userId}/folders`,
    method: "GET",
  });
  return data;
};

export { getUserFolderList };
