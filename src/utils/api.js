const BASE_URL = "https://bootcamp-api.codeit.kr/api";

/**로그인 회원정보 찾기
 *"https://bootcamp-api.codeit.kr/api/sample/user"
 * @returns
 */
const getLoginInfo = async () => {
  const response = await fetch(`${BASE_URL}/users/1`);
  if (!response.ok) {
    throw new Error("로그인 실패");
  }
  const body = await response.json();
  return body;
};

/**카드 컴포넌트 데이터 요청
 * 샘플 데이터
 * @returns
 */
const getFolderData = async () => {
  const response = await fetch(`${BASE_URL}/sample/folder`);
  if (!response.ok) {
    throw new Error("폴더 정보를 불러우는데 실패 했습니다.");
  }

  const body = await response.json();

  return body;
};

/**유저 폴더 목록 데이터 데이터
 *
 * @returns
 */
const getUserFolderCategory = async () => {
  const response = await fetch(`${BASE_URL}/users/1/folders`);
  if (!response.ok) {
    throw new Error("폴더 목록을 불러우는데 실패 했습니다.");
  }

  const body = await response.json();

  return body;
};

/**유저 폴더별 링크 데이터 데이터
 *
 * @returns
 */
const getUserLinkData = async (folderId = "") => {
  const response = await fetch(
    `${BASE_URL}/users/1/links?folderId=${folderId}`
  );
  if (!response.ok) {
    throw new Error("링크 데이터를 불러우는데 실패 했습니다.");
  }

  const body = await response.json();
  console.log("body:  ", body);
  return body;
};

export { getLoginInfo, getFolderData, getUserFolderCategory, getUserLinkData };
