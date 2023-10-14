const tokenRemoveBtn = document.querySelector('.removeAccessToken');

function removeAccessToken () {
  localStorage.removeItem("accessToken");
  alert("액세스 토큰을 삭제했습니다.");
}

tokenRemoveBtn.addEventListener('click', removeAccessToken);