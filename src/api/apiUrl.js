export const API_URL = 'https://bootcamp-api.codeit.kr/api/';

export async function getAccount() {
    const response = await fetch(`${API_URL}sample/user`);
    const body = await response.json();
    return body;
  }
  
  export async function getFolder() {
      const response = await fetch(`${API_URL}sample/folder`);
      const body = await response.json();
      return body;
  
  }
  

  