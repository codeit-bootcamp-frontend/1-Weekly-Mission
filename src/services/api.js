const URL = 'https://bootcamp-api.codeit.kr/api/sample/user';

const requestData = async () => {
  try {
    const response = await fetch(`${URL}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status !== 200) {
      throw new Error(response.status);
    }

    const data = response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export default requestData;
