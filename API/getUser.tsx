import { apiConfig } from "./apiConfig";

export type SpecificUserData = {
  id: number;
  created_at: string;
  name: string;
  image_source: string;
  email: string;
  auth_id: string;
};

export type SpecificUserDataResult = {
  data: SpecificUserData[];
};

const getSpecificUserData = async (userID: number) => {
  const BASE_URL: string = apiConfig.baseUrl;
  const endpoints: string = apiConfig.endpoints.user.specificUserData(userID);

  const response = await fetch(`${BASE_URL}${endpoints}`);
  const result: SpecificUserDataResult = await response.json();
  return result;
};

export default getSpecificUserData;
