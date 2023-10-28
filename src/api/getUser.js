export async function getUser() {
  try {
    const response = await fetch(
      `https://bootcamp-api.codeit.kr/api/sample/user`
    );
    const body = await response.json();
    return body;
  } catch (error) {
    console.log(error);
  }
}
