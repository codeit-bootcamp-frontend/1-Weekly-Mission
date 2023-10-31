import { DOMAIN_URL } from "common/constants/domain";
import { END_POINT } from "common/constants/endpoints";

const { sample } = END_POINT;
const headers = { "Content-Type": "application/json; charset=utf-8" };

export async function getUser(userId) {
  const res = await fetch(`${DOMAIN_URL}/api/users/${userId}`, {
    headers,
  });

  if (!res) {
    throw new Error("에러가 발생했습니다.");
  }
  const data = await res.json();
  return data;
}

export async function getFolder() {
  const res = await fetch(`${DOMAIN_URL}${sample.folder}`, {
    headers,
  });

  if (!res) {
    throw new Error("에러가 발생했습니다.");
  }
  const data = await res.json();
  return data;
}

export async function getAllFolders(userId) {
  const res = await fetch(`${DOMAIN_URL}/api/users/${userId}/folders`, {
    headers,
  });

  if (!res) {
    throw new Error("에러가 발생했습니다.");
  }
  const data = await res.json();
  return data;
}

export async function getAllLinks(userId, folderId = "") {
  const QUERY_STRING = folderId ? `?folderId=${folderId}` : "";

  const res = await fetch(`${DOMAIN_URL}/api/users/${userId}/links${QUERY_STRING}`, {
    headers,
  });

  if (!res) {
    throw new Error("에러가 발생했습니다.");
  }
  const data = await res.json();
  return data;
}
