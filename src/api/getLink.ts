import { API } from "../config";

interface GetLinkRequest {
  id: number;
  folderId?: string;
}

export interface Link {
  id: number;
  created_at: string;
  updated_at: null;
  url: string;
  title: string;
  description: string;
  image_source: string;
  folder_id: number;
}

export async function getLink({ id, folderId }: GetLinkRequest) {
  const res = await fetch(
    `${API.baseURL}/users/${id}/links?folderId=${folderId}`
  );
  const links = await res.json();
  if (res?.status === 200) return (links?.data || []) as Link[] | [];
  return [];
}
