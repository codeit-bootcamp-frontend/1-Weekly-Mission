import { BASE_URL, SAMPLE_USER_ENDPOINT } from './services/endpoints';

const getSampleUser = async () => {
  try {
    const response = await fetch(`${BASE_URL}${SAMPLE_USER_ENDPOINT}`);
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
};

export default getSampleUser;
