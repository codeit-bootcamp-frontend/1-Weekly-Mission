import { apiConfig } from "./apiConfig";

const BASE_URL: string = apiConfig.baseUrl;
const endpoints: string = apiConfig.endpoints.user.currentUserData;

export type CurrentUserData = {
  id: number;
  created_at: string;
  name: string;
  image_source: string;
  email: string;
  auth_id: string;
};

export type CurrentUserDataResult = {
  data: CurrentUserData[];
};

const getCurrentUserData = async (accessToken: string) => {
  const data: { method: string; headers: any } = {
    method: "GET",
    headers: {
      Authorization: accessToken,
    },
  };
  const response = await fetch(`${BASE_URL}${endpoints}`, data);
  const result: CurrentUserDataResult = await response.json();
  return result;
};

export default getCurrentUserData;
