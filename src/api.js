const API_URL = {
  sampleUser: "https://bootcamp-api.codeit.kr/api/sample/user",
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
