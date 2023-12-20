import instance from "@/utils/interceptors";

export type ShareUser = {
  id: number;
  name: string;
  email: string;
  profileImageSource: string;
};

export type Owner = {
  id: number;
  name: string;
  profileImageSource: string;
};
export type LinkContents = {
  id: number;
  createdAt: string;
  url: string;
  title: string;
  description: string;
  imageSource: string;
};
export type FolderContents = {
  id: number;
  name: string;
  owner: Owner;
  links?: AuthShareLinks[];
  count?: number;
};

export type FolderContentsProps = {
  folder: FolderContents;
};

// 15-week

export type AuthShareUserData = {
  data: AuthShareUser[];
};

export type AuthShareUser = {
  id: number;
  created_at: string;
  name: string;
  image_source: string;
  email: string;
  auth_id: string;
};

export type AuthShareFolderData = {
  data: AuthShareFolder[];
};

export type AuthShareFolder = {
  id: number;
  created_at: string;
  name: string;
  user_id: number;
};

export type AuthUserError = {
  error: {
    message: string;
  };
};
export type AuthUser = {
  id: number;
  created_at: string;
  name: string;
  image_source: string;
  email: string;
  auth_id: string;
};

export type AuthShareLinks = {
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

export const getShareUserData = async () => {
  const requestUrl = getUrl("/api/sample/user");
  const response = await fetch(requestUrl, {
    method: "GET",
  });

  if (response.status === 200) {
    const jsonData = await response.json();
    return jsonData;
  }
};

export const getShareFolderData = async () => {
  const requestUrl = getUrl("/api/sample/folder");
  const response = await fetch(requestUrl, {
    method: "GET",
  });
  if (response.status === 200) {
    const jsonData = await response.json();
    return jsonData;
  }
};

//  15week 으로 인한 api변경..
export const getAuthShareUserData = async ({ userId }: { userId: number }) => {
  const requestUrl = getUrl(`/api/users/${userId}`);
  const response = await fetch(requestUrl, {
    method: "GET",
  });

  if (response.status === 200) {
    const jsonData = await response.json();
    return jsonData;
  }
};

export const getAuthSharedFolderData = async ({
  folderId,
}: {
  folderId: string | string[] | undefined;
}) => {
  const requestUrl = getUrl(`/api/folders/${folderId}`);
  const response = await fetch(requestUrl, {
    method: "GET",
  });

  if (response.status === 200) {
    const jsonData = await response.json();
    return jsonData;
  }
};

export const getAuthSharedLinksData = async ({
  userId,
  folderId,
}: {
  userId: number;
  folderId: string | string[] | undefined;
}) => {
  const requestUrl = getUrl(`/api/users/${userId}/links?folderId=${folderId}`);
  const response = await fetch(requestUrl, {
    method: "GET",
  });

  if (response.status === 200) {
    const jsonData = await response.json();
    return jsonData;
  }
};

// data: {error: message} => 401엘어
// https://bootcamp-api.codeit.kr/docs 에서 인증이 필요한(자물쇠 아이콘이 있음) api의 경우 Authorization 리퀘스트 헤더에 “Bearer {accessToken}”을 함께 보내야 합니다.
export const getCurrentUser = async () => {
  const requestUrl = getUrl(`api/users`);
  const response = await instance.get(requestUrl.toString());
  const result = await response.data;
  return result;
};
