export async function getUsersData() {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/sample/user"
  );
  if (response.status === 200) {
    const jsonData = await response.json();
    return jsonData;
  }
}
