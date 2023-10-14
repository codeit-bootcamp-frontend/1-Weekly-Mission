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
      window.location.href = "/folder";
      const result = await response.json();
      if (result.ACCESS_TOKEN) {
        localStorage.setItem("access-token", result.ACCESS_TOKEN);
      }
      return;
    }



    if (url.split("/").includes("sign-in")) {
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
