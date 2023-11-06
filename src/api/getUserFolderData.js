import API_URL from "./constant";

async function getFolderList() {
  try {
    const response = await fetch(`${API_URL}users/1/folders`);
    const body = await response.json();
    return body;
  } catch (error) {
    console.log(error);
  }
}

async function getFolderLinks(query) {
  try {
    const response = await fetch(`${API_URL}users/1/links${query}`);
    const body = await response.json();
    return body;
  } catch (error) {
    console.log(error);
  }
}

export { getFolderList, getFolderLinks };
