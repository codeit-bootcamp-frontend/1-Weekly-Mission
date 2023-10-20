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
    console.log(error);
  }
}

export default getUserFolder;
