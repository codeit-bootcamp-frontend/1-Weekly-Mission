import { BASE_URL, SAMPLE_USER_ENDPOINT } from './services/endpoints';

const getSampleUser = async () => {
  let result;
  try {
    const response = await fetch(`${BASE_URL}${SAMPLE_USER_ENDPOINT}`);
    result = await response.json();
  } catch (error) {
    console.log(error.message);
  }
  return result;
};

export default getSampleUser;
