import { API } from "../config";

export async function getLink({ id, folderId = " " }) {
  const res = await fetch(
    `${API.baseURL}/users/${id}/links?folderId=${folderId}`
  );
  const links = await res.json();
  if (res?.status === 200) return links.data;
  return null;
}
