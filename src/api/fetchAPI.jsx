async function fetchAPI(url) {
  const response = await fetch(
    `https://bootcamp-api.codeit.kr/api/sample/${url}`
  );
  const result = await response.json();
  return result;
}

export async function fetchFolder() {
  const data = await fetchAPI('folder');
  return data;
}
