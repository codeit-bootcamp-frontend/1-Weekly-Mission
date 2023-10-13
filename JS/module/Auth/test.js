const id = { email: "test304@codeit.com", password : "sprint101" };

fetch("https://bootcamp-api.codeit.kr/api/sign-up", {
  method: "POST",
  headers: {
    "content-type": "application/json",
  },
  body: JSON.stringify(id),
})
  .then((response) => response.json())
  .then((result) => {
    let isValid = false;
    console.log(result);
    isValid = result.data.isUsableNickname ? true : false;
    console.log(isValid);
    console.log(result.data.accessToken)
    window.localStorage.setItem('token',result.data.accessToken);
    const token = window.localStorage.getItem('token')
    document.write(token)
  });

