async function getUserInfos() {
  fetch('https://bootcamp-api.codeit.kr/api/sample/user')
}


async function getFolderData() {
  const response = await fetch('https://bootcamp-api.codeit.kr/api/sample/folder')
  const result = await response.json()
  return result
}

export{ getUserInfos, getFolderData }
