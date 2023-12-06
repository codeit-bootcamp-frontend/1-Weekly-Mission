import { API } from "../config";

export interface Folder {
  id: number;
  created_at: string;
  name: string;
  user_id: number;
  link: {
    count: number;
  };
}

export async function getFolder({ id }: { id: number }) {
  const res = await fetch(`${API.baseURL}/users/${id}/folders`);
  const folders = await res.json();
  if (res?.status === 200) return folders.data as Folder[] | [];
  return [];
}
