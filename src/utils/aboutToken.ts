function getToken(result: any, tokenType: string) {
  localStorage.setItem(result, tokenType);
}

function checkToken() {
  const checkToken = localStorage.getItem("access-token");
  if (checkToken) {
    return true;
  } else {
    return false;
  }
}

export { checkToken, getToken };
