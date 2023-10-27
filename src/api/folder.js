import { BASE_URL, USERS_ENDPOINT } from './services/endpoints';

const getUserLinks = async () => {
  let result;
  try {
    const response = await fetch(`${BASE_URL}${USERS_ENDPOINT}/1/links`);
    result = await response.json();
  } catch (error) {
    console.log(error.message);
  }
  return result;
};

export default getUserLinks;
