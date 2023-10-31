import { API } from "../config";

export async function getFolder({ id }) {
  const res = await fetch(`${API.baseURL}/users/${id}/folders`);
  const folders = await res.json();
  if (res?.status === 200) return folders.data;
  return null;
}
