import { fetchClientJson } from "../../utils/apiClient";

const getSampleUserFolder = async () => {
  const result = await fetchClientJson({
    url: "sample/folder",
    method: "GET",
  });
  const folder = result.folder;
  return folder;
};

const getSampleUserProfile = async () => {
  const profile = await fetchClientJson({
    url: "sample/user",
    method: "GET",
  });
  return profile;
};

export { getSampleUserFolder, getSampleUserProfile };
