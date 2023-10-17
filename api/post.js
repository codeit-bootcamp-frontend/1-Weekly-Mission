export async function requestPost(url, content) {
  const response = await fetch('https://bootcamp-api.codeit.kr/api/check-email', {
    method: 'POST',
    headers: {
    "content-Type": "application/json",
    },
    body: JSON.stringify({ content }),
    });
    return response;
  }
