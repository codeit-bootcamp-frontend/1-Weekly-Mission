/**로그인 회원정보 찾기
 *
 * @returns
 */
const getLoginInfo = async () => {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/sample/user"
  );
  if (!response.ok) {
    throw new Error("로그인 실패");
  }
  const body = await response.json();
  return body;
};

/**카드 컴포넌트 데이터 요청
 *
 * @returns
 */
const getFolderData = async () => {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/sample/folder"
  );
  if (!response.ok) {
    throw new Error("폴더 정보를 불러우는데 실패 했습니다.");
  }

  const body = await response.json();

  return body;
};

export { getLoginInfo, getFolderData };
