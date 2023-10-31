import { useEffect, useState } from "react";

export const API_URL = 'https://bootcamp-api.codeit.kr/api/';



export function useFetch(path, id) {
  const [data, setData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  
  const fetchUrl = async (type) => {
    try{
      const response = await fetch(`${API_URL}${type}`);
      if(!response.ok) {
          throw new Error('사용자 데이터를 불러오는데 실패했습니다.');
      }
      const body = await response.json();
      setData(body);
    }
    catch (error){
      setErrorMessage(error.message);
      return;
    }

  }
    useEffect(() => {
      fetchUrl(path);
    }, [id]);

    return {
      data,
      fetchUrl,
      errorMessage,
    };
}

export function useQueryFetch(path, folderId = null, id) {
  const [data, setData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  
  const fetchUrl = async (type, number) => {
    const query = `?folderId=${number}`;
    try{
      const response = await fetch(`${API_URL}${type}${folderId ? query : ""}`);
      if(!response.ok) {
          throw new Error('사용자 데이터를 불러오는데 실패했습니다.');
      }
      const body = await response.json();
      setData(body);
    }
    catch(error){
      setErrorMessage(error.message);
      return;
    }

  }
    useEffect(() => {
      fetchUrl(path, folderId);
    }, [folderId,id]);

    return {
      data,
      fetchUrl,
      errorMessage,
    };
}

/* export async function getAccount() {
    const response = await fetch(`${API_URL}users/1`);
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


export async function getUserFolder(id) {
  const response = await fetch(`${API_URL}users/${id}/folders`);
  if(!response.ok) {
    throw new Error('데이터를 불러오는데 실패했습니다.');
}
  const body = await response.json();
  return body;
}

export async function getUserFolderLinks(id, folderId = null) {
  let query = `?folderId=${folderId}`;
  const response = await fetch(`${API_URL}users/${id}/links${folderId ? query : ""}`);
  if(!response.ok) {
    throw new Error('데이터를 불러오는데 실패했습니다.');
}
  const body = await response.json();
  return body;
}
 */
  

  