import { fetchClientJson } from "utils/apiClient.js";

const getUserProfile = async (userId) => {
  const profile = await fetchClientJson({
    url: `users/${userId}`,
    method: "GET",
  });
  return profile;
};

export default getUserProfile;
