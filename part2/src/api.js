async function requestAPI(url) {
  const response = await fetch(
    `https://bootcamp-api.codeit.kr/api/sample/${url}`
  );
  const result = await response.json();
  return result;
}

export async function getLogin() {
  const body = await requestAPI("user");
  return body;
}

export async function getFolder() {
  const body = await requestAPI("folder");
  return body;
}
