const tokenRemoveBtn = document.querySelector('.remove');

function removeAccessToken () {
  localStorage.removeItem("accessToken");
  alert('remove accessToken success!')
}

tokenRemoveBtn.addEventListener('click', removeAccessToken);