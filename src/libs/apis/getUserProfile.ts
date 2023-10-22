import { instance } from "libs/api";

async function getUserProfile() {
  const response = await instance.get<{}, User>("/api/users");

  return response;
}

export default getUserProfile;
