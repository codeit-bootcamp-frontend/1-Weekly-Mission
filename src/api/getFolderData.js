import API_URL from "./constant";

async function getFolderData() {
  try {
    const response = await fetch(`${API_URL}sample/folder`);
    const body = await response.json();
    return body;
  } catch (error) {
    console.log(error);
  }
}

export default getFolderData;
