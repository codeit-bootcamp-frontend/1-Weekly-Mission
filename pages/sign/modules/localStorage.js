
// 로컬 스토리지 저장 함수
function saveAccessToken(data)  { 
  window.localStorage.setItem('accessToken', data)
}

// 로컬 스토리지에 접근 및 확인용 함수
function getAccessToken(data) {
  return window.localStorage.getItem(data)
}

export { saveAccessToken, getAccessToken }