import { requestAPI } from '../api';

//
const postCheckEmail = async (emailValue) => {
  const data = { email: emailValue };

  const response = await requestAPI('', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return response;
};

export default postCheckEmail;
