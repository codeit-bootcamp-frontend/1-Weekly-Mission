import instance from "@/utils/interceptors";

type UserRequest = {
  userId: number;
  folderId?: string;
};
// User

export type UserProfile = {
  id: number;
  created_at: string;
  name: string;
  image_source: string;
  email: string;
  auth_id: string;
};

// Folder

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

export type FolderLinks = {
  id: number;
  created_at: string;
  updated_at: any;
  url: string;
  title?: string;
  description?: string;
  image_source?: string;
  folder_id?: number;
};

// 15week type변경

export type FolderDataProps = {
  data: FolderData;
};

export type FolderData = {
  folder: Folder[];
};

export type Folder = {
  id: number;
  created_at: string;
  name: string;
  user_id: number;
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
    return jsonData;
  }
};

export const fetchUserFolderData = async ({ userId }: UserRequest) => {
  const requestUrl = getUrl(`/api/users/${userId}/folders`);
  const response = await fetch(requestUrl, {
    method: "GET",
  });
  if (response.status === 200) {
    const jsonData = await response.json();
    return jsonData;
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
    return jsonData;
  }
};

// 15 weekly mission 으로 인한 API변경

export const AuthFolderData = async () => {
  const requestUrl = getUrl("/api/folders");
  const response = await instance.get(requestUrl.toString());
  const result = await response.data;
  return result;
};

// https://bootcamp-api.codeit.kr/api/links?folderId=1

// export const AuthFolderLinks = async (
//   accessToken: string,
//   folderId?: string
// ) => {
//   const requestUrl = getUrl(`/api/links?folderId=${folderId}`);
//   try {
//     const response = await fetch(requestUrl, {
//       method: "GET",
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//       },
//     });
//     const result = await response.json();
//     return result;
//   } catch (error) {
//     return error;
//   }
// };

export const AuthFolderLinks = async (folderId?: string) => {
  const folderIdParam = folderId ? `$folderId=${folderId}` : "";
  const requestUrl = getUrl(`/api/links?${folderIdParam}`);
  const response = await instance.get(requestUrl.toString());
  const result = await response.data;
  return result;
};
