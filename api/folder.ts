type UserRequest = {
  userId: number;
  folderId?: string;
};
// User
type getUserResponse = {
  data: UserProfile[];
};

export type UserProfile = {
  id: number;
  created_at: string;
  name: string;
  image_source: string;
  email: string;
  auth_id: string;
};

// Folder
type getUserFolderResponse = {
  data: UserFolder[];
};

export type UserFolder = {
  id: number;
  created_at?: string;
  name: string;
  user_id?: number;
  link?: Link;
};

export type Link = {
  count: number;
};

// FolderLinks

type getUserFolderLinksResponse = {
  data: FolderLinks[];
};

export type FolderLinks = {
  id: number;
  created_at: string;
  updated_at: any;
  url: string;
  title: string;
  description: string;
  image_source: string;
  folder_id: number;
};

const baseUrl = new URL("https://bootcamp-api.codeit.kr");
const getUrl = (path: string) => new URL(path, baseUrl);

export const fetchUserData = async ({ userId }: UserRequest) => {
  const requestUrl = getUrl(`/api/users/${userId}`);
  const response = await fetch(requestUrl, {
    method: "GET",
  });
  if (response.status === 200) {
    const jsonData = await response.json();
    return jsonData as Promise<getUserResponse>;
  }
};

export const fetchUserFolderData = async ({ userId }: UserRequest) => {
  const requestUrl = getUrl(`/api/users/${userId}/folders`);
  const response = await fetch(requestUrl, {
    method: "GET",
  });
  if (response.status === 200) {
    const jsonData = await response.json();
    return jsonData as Promise<getUserFolderResponse>;
  }
};

export const fetchFolderLinks = async ({ userId, folderId }: UserRequest) => {
  const requestUrl = getUrl(
    `api/users/${userId}/links${folderId ? `?folderId=${folderId}` : ""}`
  );
  const response = await fetch(requestUrl, {
    method: "GET",
  });
  if (response.status === 200) {
    const jsonData = await response.json();
    return jsonData as Promise<getUserFolderLinksResponse>;
  }
};
