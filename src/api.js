const API_URL = "https://bootcamp-api.codeit.kr";

async function getSample(category) {
  const response = await fetch(`${API_URL}/api/sample/${category}`);
  if (!response.ok) {
    throw new Error("데이터를 불러오는데 실패했습니다.");
  }
  const body = await response.json();
  return body;
}

export default getSample;
