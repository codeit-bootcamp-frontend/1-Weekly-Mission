
function checkAccessToken () {
  if(localStorage.getItem("accessToken")) {
    location.href = '../folder/folder.html';
  }
}

export { checkAccessToken };