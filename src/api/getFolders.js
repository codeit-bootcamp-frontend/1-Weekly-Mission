export async function getFolders() {
  try {
    const response = await fetch(
      `https://bootcamp-api.codeit.kr/api/sample/folder`
    );
    const body = await response.json();
    const result = await body.folder;
    return result;
  } catch (error) {
    console.log('error', error);
  }
}
