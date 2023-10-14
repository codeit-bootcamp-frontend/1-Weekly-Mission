import { commonInputCheck, signupInputCheck, displayLoginFailedError } from "./errorHandle.js";


async function authentication(e, url, inputCheck) {
  e.preventDefault();
  const { target: { elements } } = e;
  const [$emailInput, $passwordInput] = elements;

  if (!inputCheck($emailInput) || !inputCheck($passwordInput)) {
    return;
  }

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: $emailInput.value, password: $passwordInput.value })
    });

    if (response.ok) {
      const {data} = await response.json();

      if (data.accessToken) {
        localStorage.setItem("access-token", data.accessToken);
      }

      window.location.href = "/folder";
      return;
    }


    const isSigninPage = url.split("/").includes("sign-in");
    if (isSigninPage) {
      displayLoginFailedError();
    }

  }
  catch (error) {
    console.log(error.message);
  }

};


async function loginAuthentication(e) {
  await authentication(e, "https://bootcamp-api.codeit.kr/api/sign-in", commonInputCheck);
}


async function signupAuthentication(e) {
  await authentication(e, "https://bootcamp-api.codeit.kr/api/sign-up", signupInputCheck);
}



export { loginAuthentication, signupAuthentication };
