import API_ENDPOINTS from "./endpoints";

interface Props {
  userId: number;
}

async function getUser({ userId }: Props): Promise<UserData> {
  const baseUrl = API_ENDPOINTS.baseUrl;
  const endpoint = API_ENDPOINTS.user.getUser({ userId });
  const response = await fetch(baseUrl + endpoint);
  const body: UserData = await response.json();
  return body;
}

export default getUser;
