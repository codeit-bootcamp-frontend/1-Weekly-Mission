const getSampleUser = async () => {
  const response = await fetch('/sample/user', { method: 'GET' });

  if (!response.ok) {
    throw new Error('헤더 프로필 에러 발생');
  }

  const body = await response.json();
  return body;
};

const getSampleUserProfile = async () => {
  const response = await fetch('/sample/folder', { method: 'GET' });

  if (!response.ok) {
    throw new Error('인트로 프로필 에러 발생');
  }

  const body = await response.json();
  return body;
};

const getUserFolder = async () => {
  const response = await fetch('/users/1/folders', { method: 'GET' });

  if (!response.ok) {
    throw new Error('폴더 에러 발생');
  }

  const body = await response.json();
  return body.data;
};

const getAllFolder = async () => {
  const response = await fetch(`/users/1/links`, { method: 'GET' });

  if (!response.ok) {
    throw new Error('전체 폴더 데이터 가져오기 에러 발생');
  }

  const body = await response.json();
  return body.data;
};

const getFolderLinks = async (folderId) => {
  const response = await fetch(`/users/1/links?folderId=${folderId}`, { method: 'GET' });

  if (!response.ok) {
    throw new Error('폴더 데이터 가져오기 에러 발생');
  }
  const body = await response.json();
  return body.data;
};

const getUserProfile = async () => {
  const response = await fetch('/users/1', { method: 'GET' });

  if (!response.ok) {
    throw new Error('인트로 프로필 에러 발생');
  }

  const body = await response.json();
  return body;
};

export { getAllFolder, getFolderLinks, getSampleUser, getSampleUserProfile, getUserFolder, getUserProfile };
