import { DOMAIN_URL } from "./constants";

const headers = { "Content-Type": "application/json; charset=utf-8" };

export async function getUser(userId: number) {
  const res = await fetch(`${DOMAIN_URL}/api/users/${userId}`, {
    headers,
  });

  const data = await res.json();
  return data;
}

export async function getFolder() {
  const res = await fetch(`${DOMAIN_URL}$/api/sample/folder`, {
    headers,
  });

  const data = await res.json();
  return data;
}

export async function getAllFolders(userId: number) {
  const res = await fetch(`${DOMAIN_URL}/api/users/${userId}/folders`, {
    headers,
  });

  const data = await res.json();
  return data;
}

export async function getAllLinks(userId: number, folderId = "") {
  const QUERY_STRING = folderId ? `?folderId=${folderId}` : "";

  const res = await fetch(
    `${DOMAIN_URL}/api/users/${userId}/links${QUERY_STRING}`,
    {
      headers,
    }
  );

  const data = await res.json();
  return data;
}
