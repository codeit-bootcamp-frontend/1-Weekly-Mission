const BASE_URL = 'https://bootcamp-api.codeit.kr/api';

// 프로필 데이터
export async function getUser() { 
  const response = await fetch(`${BASE_URL}/users/1`);
  
  if (!response.ok) {
    console.log("데이터를 불러오는데 실패했습니다.");
  } 
  const result = await response.json();
  return result;
}

export async function getSampleFolder() {
  const response = await fetch(`${BASE_URL}/sample/folder`);
  
  if (!response.ok) {
    console.log("데이터를 불러오는데 실패했습니다.");
  } 
  const result = await response.json();
  return result;
}


// 폴더 데이터 
export async function getFolder() {
  const response = await fetch(`${BASE_URL}/users/1/folders`);

  if (!response.ok) {
    console.log("데이터를 불러오는데 실패했습니다.");
  } 
  const result = await response.json();
  return result;
}

// 링크 데이터
export async function getLink() {
  const response = await fetch(`${BASE_URL}/users/1/links`);

  if (!response.ok) {
    console.log("데이터를 불러오는데 실패했습니다.");
  } 
  const result = await response.json();
  return result;
}
