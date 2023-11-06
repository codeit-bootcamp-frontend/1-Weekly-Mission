import { fetchClientJson } from "utils/apiClient.js";

const getSampleUserFolder = async () => {
  const { folder } = await fetchClientJson({
    url: "sample/folder",
    method: "GET",
  });
  return folder;
};

export { getSampleUserFolder };
