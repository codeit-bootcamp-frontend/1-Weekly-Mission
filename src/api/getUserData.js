import API_URL from "./constant";

async function getUserData() {
  try {
    const response = await fetch(`${API_URL}sample/user`);
    const body = await response.json();
    return body;
  } catch (error) {
    console.log(error);
  }
}

export default getUserData;
