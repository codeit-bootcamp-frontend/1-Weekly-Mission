export async function RequestAPI(endpoint, message) {
  const url = 'https://bootcamp-api.codeit.kr';
  
  const response = await fetch(
    `${url}${endpoint}`
  );

  if(!response.ok){
    throw new Error(message)
  }

  const result = await response.json();
  return result;
}
