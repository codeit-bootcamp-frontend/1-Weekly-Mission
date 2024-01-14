import { ALL_LINKS_ID } from "@/constants/constants";
import { Folder, Link, User } from "@/types/type";
import { getSession } from "next-auth/react";
const BASE_URL = "https://bootcamp-api.codeit.kr/api/linkbrary/v1";

export async function getUser(accessToken: string) {
  const response = await fetch(`${BASE_URL}/users`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response.json();
}

export const checkEmailDuplicate = async (email: string) => {
  const response = await fetch(`${BASE_URL}/users/check-email`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  const data = await response.json();

  if (response.ok) {
    return data;
  } else {
    throw new Error(data.message || "알 수 없는 에러가 발생했습니다.");
  }
};

export const signIn = async ({ email, password }: { email?: string; password?: string }) => {
  const response = await fetch(`${BASE_URL}/auth/sign-in`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  return response;
};

export const signUp = async ({ email, password }: { email: string; password: string }) => {
  const response = await fetch(`${BASE_URL}/auth/sign-up`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();
  if (response.ok) {
    return data;
  } else {
    throw new Error(data.message || "알 수 없는 에러가 발생했습니다.");
  }
};

export const getFolders = async () => {
  return fetchWithToken("folders", "GET");
};

export const getSharedFolder = async (folderId: string): Promise<{ folder: Folder; links: Link[]; user: User }> => {
  const [folderRes, linksRes] = await Promise.all([
    fetch(`${BASE_URL}/folders/${folderId}`),
    fetch(`${BASE_URL}/folders/${folderId}/links`),
  ]);
  const [folder] = await folderRes.json();
  const links = await linksRes.json();
  const userRes = await fetch(`${BASE_URL}/users/${folder.user_id}`);
  const [user] = await userRes.json();

  return { folder, links, user: { ...user, profileImageSource: user.image_source } };
};

export const getLinks = async (folderId: string) => {
  const queryString = folderId === ALL_LINKS_ID ? "links" : `folders/${folderId}/links`;
  return fetchWithToken(queryString, "GET");
};

async function fetchWithToken(url: string, method: string, body?: Record<string, unknown>) {
  const session = await getSession();
  const token = session?.tokens.accessToken;

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  const fetchOptions = {
    method: method.toUpperCase(),
    headers: headers,
    body: body ? JSON.stringify(body) : null,
  };
  const response = await fetch(`${BASE_URL}/${url}`, fetchOptions);
  if (response.status === 204) {
    return null;
  }

  if (!response.ok) {
    throw new Error("데이터를 불러오는 데 실패했습니다.");
  }
  return response.json();
}

export const postFolder = async (name: string) => {
  await fetchWithToken("folders", "POST", { name });
};

export const deleteFolder = async (id: string) => {
  await fetchWithToken(`folders/${id}`, "DELETE");
};

export const putFolder = async (id: string, name: string) => {
  await fetchWithToken(`folders/${id}`, "PUT", { name });
};

export const postLink = async (url: string, folderId: string) => {
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    url = "https://" + url;
  }
  await fetchWithToken("links", "POST", { url, folderId });
};

export const postLinks = async (url: string, folderIds: string[]) => {
  await Promise.all(folderIds.map(async (folderId) => await postLink(url, folderId)));
};

export const deleteLink = async (id: string) => {
  await fetchWithToken(`links/${id}`, "DELETE");
};
