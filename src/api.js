const API_URL = {
  sampleUser: "https://bootcamp-api.codeit.kr/api/sample/user",
  sampleFolder: "https://bootcamp-api.codeit.kr/api/sample/folder",
};

export async function isSignIn() {
  try {
    const userRes = await fetch(API_URL.sampleUser);
    const userInfo = await userRes.json();
    if (userRes?.status === 200) {
      return userInfo;
    }
    return false;
  } catch (err) {}
}

export async function getFolder() {
  try {
    const res = await fetch(API_URL.sampleFolder);
    const userFolder = await res.json();
    if (res?.status === 200) return userFolder;
    return false;
  } catch (err) {}
}
