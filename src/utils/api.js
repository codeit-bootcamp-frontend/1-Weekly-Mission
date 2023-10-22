const API_URL = "https://bootcamp-api.codeit.kr/api";

async function getUserFolder() {
  try {
    const response = await fetch(`${API_URL}/sample/folder`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status !== 200) {
      throw new Error(response.status);
    }

    const result = await response.json();
    const folder = result.folder;
    return folder;
  } catch (error) {
    alert("페이지를 불러오지 못했습니다.");
  }
}

async function getUserData() {
  try {
    const response = await fetch(`${API_URL}/sample/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status !== 200) {
      throw new Error(response.status);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    alert("페이지를 불러오지 못했습니다.");
  }
}

export { getUserFolder, getUserData };
