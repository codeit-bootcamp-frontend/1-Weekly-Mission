async function requestAPI(url) {
  const response = await fetch(
    `https://bootcamp-api.codeit.kr/api/sample/${url}`
  );
  const result = await response.json();
  return result;
}

export async function getFolder() {
  const data = await requestAPI('folder');
  return data;
}

export async function getUser() {
  const data = await requestAPI('user');
  return data;
}
