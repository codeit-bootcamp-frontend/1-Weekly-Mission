const getSampleUser = async () => {
  const response = await fetch('/sample/user', {
    method: 'GET',
  });
  if (!response.ok) {
    throw new Error('헤더 프로필 에러 발생');
  }

  const body = await response.json();
  return body;
};

export const getUserProfile = async () => {
  const response = await fetch('/sample/folder', {
    method: 'GET',
  });
  if (!response.ok) {
    throw new Error('인트로 프로필 에러 발생');
  }

  const body = await response.json();
  return body;
};

export const getUserFolder = async () => {
  const response = await fetch('/users/1/folders', {
    method: 'GET',
  });
  if (!response.ok) {
    throw new Error('폴더 에러 발생');
  }

  const body = await response.json();
  return body;
};

export default getSampleUser;
