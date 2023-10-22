const API_URL = "https://bootcamp-api.codeit.kr/api";

export const getUserInfo = async () => {
	const response = await fetch(`${API_URL}/sample/user`);
	if (!response.ok) throw new Error("사용자 정보를 불러오는데 실패했습니다.");

	return await response.json();
};

export const getUserFolder = async () => {
	const response = await fetch(`${API_URL}/sample/folder`);
	if (!response.ok) throw new Error("폴더 정보를 불러오는데 실패했습니다.");

	return await response.json();
};
