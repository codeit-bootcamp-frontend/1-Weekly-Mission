const BASE_URL = 'https://bootcamp-api.codeit.kr/api';

// 프로필 데이터
export async function getUser() { 
  const response = await fetch(`${BASE_URL}/users/1`);
  
  if (!response.ok) {
    throw new Error("데이터를 불러오는데 실패했습니다.");
  } 
  const result = await response.json();
  return result;
}

// 폴더 데이터 
export async function getFolder() {
  const response = await fetch(`${BASE_URL}/users/1/folders`);

  if (!response.ok) {
    throw new Error("데이터를 불러오는데 실패했습니다.");
  } 
  const result = await response.json();
  return result;
}
