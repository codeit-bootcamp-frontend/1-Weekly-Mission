import { fetchClientJson } from "utils/apiClient.js";

const getUserProfile = async (userID) => {
  const profile = await fetchClientJson({
    url: `users/${userID}`,
    method: "GET",
  });
  return profile;
};

export default getUserProfile;
