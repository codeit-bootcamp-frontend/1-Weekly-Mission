import { APIpoint } from '../api';

//
const postCheckEmail = async (email) => {
  const data = { email };

  const response = await fetch(`${APIpoint}check-email`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return response.status === 409;
};

export default postCheckEmail;
