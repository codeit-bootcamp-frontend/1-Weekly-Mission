const API_URL = "https://bootcamp-api.codeit.kr/api";

export const getSampleUserInfo = async () => {
  const response = await fetch(`${API_URL}/sample/user`);
  if (!response.ok) throw new Error("사용자 정보를 불러오는데 실패했습니다.");

  return await response.json();
};

export const getSampleUserFolder = async () => {
  const response = await fetch(`${API_URL}/sample/folder`);
  if (!response.ok) throw new Error("폴더 정보를 불러오는데 실패했습니다.");

  return await response.json();
};

export const getUserInfo = async (id) => {
  const response = await fetch(`${API_URL}/api/users/${id}`);
  if (!response.ok) throw new Error("폴더 정보를 불러오는데 실패했습니다.");

  return await response.json();
};

export const getFolderCategory = async () => {
  const response = await fetch(`${API_URL}/users/1/folders`);
  if (!response.ok) throw new Error("폴더 정보를 불러오는데 실패했습니다.");

  return await response.json();
};

export const getFolderLinks = async (id) => {
  const query = id ? `?folderId=${id}` : "";
  const response = await fetch(`${API_URL}/users/1/links${query}`);
  if (!response.ok) throw new Error("폴더 정보를 불러오는데 실패했습니다.");

  return await response.json();
};

export const getFolderData = async (userId, folderId) => {
  const folderQuery = folderId ? `?folderId=${folderId}` : "";

  try {
    const [userInfo, folders, links] = await Promise.all([
      fetch(`${API_URL}/users/${userId}`).then((res) => res.json()),
      fetch(`${API_URL}/users/${userId}/folders`).then((res) => res.json()),
      fetch(`${API_URL}/users/${userId}/links${folderQuery}`).then((res) => res.json()),
    ]);
    return {
      userInfo: userInfo.data[0],
      folders: folders.data,
      links: links.data,
    };
  } catch (error) {
    throw new Error("데이터를 불러오는데 실패했습니다.");
  }
};
