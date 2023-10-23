export const API_URL = 'https://bootcamp-api.codeit.kr/api/';

export async function getAccount() {
    const response = await fetch(`${API_URL}sample/user`);
    if(!response.ok) {
        throw new Error('사용자 데이터를 불러오는데 실패했습니다.');
    }
    const body = await response.json();
    return body;
  }
  
  export async function getFolder() {
      const response = await fetch(`${API_URL}sample/folder`);
      if(!response.ok) {
        throw new Error('데이터를 불러오는데 실패했습니다.');
    }
      const body = await response.json();
      return body;
  }
  

  