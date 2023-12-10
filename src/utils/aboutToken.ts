function getToken(result: string, tokenType: string) {
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
