async function requestAPI(url) {
  const response = await fetch(`https://bootcamp-api.codeit.kr/api/users/1`);
  const result = await response.json();
  return result;
}

export async function getProfileData() {
  const body = await requestAPI("user");
  const result = body?.data[0];
  return result;
}
