const BASE_URL = "https://bootcamp-api.codeit.kr";

export async function signIn(email, password) {
  const response = await fetch(`${BASE_URL}/api/sign-in`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  return response;
}
