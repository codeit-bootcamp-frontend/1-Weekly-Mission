const APIpoint = 'https://bootcamp-api.codeit.kr/api/';

async function requestAPI(url, body) {
  const response = await fetch(`${APIpoint}${url}`, body);
  const result = await response.json();
  return { response, result };
}

export default requestAPI;
