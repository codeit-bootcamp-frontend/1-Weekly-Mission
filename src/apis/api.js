const BASE_URL = `https://bootcamp-api.codeit.kr`;
const USER_ID = `users/1`;

export async function getUser() {
  const response = await fetch(`${BASE_URL}/api/${USER_ID}`);
  const body = await response.json();
  return body;
}

export async function getAllFolders() {
  const response = await fetch(`${BASE_URL}/api/${USER_ID}/folders`);
  const body = await response.json();
  return body;
}

export async function getAllCards(id = "") {
  let url = "";
  if (id === "") {
    url = `${BASE_URL}/api/${USER_ID}/links`;
  } else {
    const query = `?folderId=${id}`;
    url = `${BASE_URL}/api/${USER_ID}/links${query}`;
  }
  const response = await fetch(`${url}`);
  const body = await response.json();
  return body;
}
