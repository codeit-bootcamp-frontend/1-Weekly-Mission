import { APIpoint } from '../api';

const postSign = async (signType, data) => {
  const response = await fetch(`${APIpoint}sign-${signType}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const {
    data: { accessToken, refreshToken },
  } = await response.json();

  localStorage.setItem('accessToken', accessToken);
  localStorage.setItem('refreshToken', refreshToken);

  return response;
};

export default postSign;
