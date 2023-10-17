async function postNewAccount(email, password) {
  const newAccountInfo = {
    email: email,
    password: password,
  };
  try {
    const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newAccountInfo),
    });

    if (response.status === 200) {
      const responseData = await response.json();
      const accessToken = responseData.accessToken;
      window.localStorage.setItem("accessToken", accessToken);
      window.location.href = "/folder";
    }
  } catch (error) {
    console.error(error);
  }
}

export { postNewAccount };
