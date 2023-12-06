import { API } from "../config";

type GetUserResponse = {
  id: number;
  created_at: string;
  name: string;
  image_source: string;
  email: string;
  auth_id: string;
};

export async function getUser({ id }: { id: number }) {
  const userRes = await fetch(`${API.users}/${id}`);
  const userInfo = await userRes.json();
  if (userRes?.status === 200) return userInfo.data[0] as GetUserResponse;
  return null;
}
