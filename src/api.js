export async function getUsers() {
  try {
    const response = await fetch(
      "https://bootcamp-api.codeit.kr/api/sample/user"
    );
    if (response.status === 200) {
      let jsonData = await response.json();
      return jsonData;
    }
    throw new Error(response.status);
  } catch (error) {
    alert(error);
  }
}

export async function getCardPics() {
  try {
    const response = await fetch(
      "https://bootcamp-api.codeit.kr/api/sample/folder"
    );
    if (response.status === 200) {
      let jsonData = await response.json();
      return jsonData;
    }
    throw new Error(response.status);
  } catch (error) {
    alert(error);
  }
}
