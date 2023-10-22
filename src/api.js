const API_URL = 'https://bootcamp-api.codeit.kr'


async function getSample(category) {
  const response = await fetch(`${API_URL}/api/sample/${category}`);
  const body = response.json();
  return body;

}

export default getSample;