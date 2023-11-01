import requestAPI from '../api';

//
const postCheckEmail = async (email) => {
  const data = { email };

  const { response } = await requestAPI(`check-email`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return response.status === 409;
};

export default postCheckEmail;
