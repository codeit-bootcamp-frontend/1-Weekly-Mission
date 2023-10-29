import { API } from "../config";

export async function getUser({ id }) {
  const userRes = await fetch(`${API.users}/${id}`);
  const userInfo = await userRes.json();
  if (userRes?.status === 200) return userInfo.data[0];
  return null;
}
