const APIpoint = "https://bootcamp-api.codeit.kr/api/";

async function requestAPI(url: string, option?: any) {
  const response = await fetch(`${APIpoint}${url}`, option);
  const result = await response.json();
  return { response, result };
}

export default requestAPI;
