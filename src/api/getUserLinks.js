import API_ENDPOINTS from "./endpoints";

/**
 * 사용자의 링크 목록을 가져오는 비동기 함수입니다.
 *
 * @param {string} [userId="1"] - 사용자 식별자.
 * @param {string} [folderId="16"] - 폴더 식별자.
 * @returns {Promise<FolderAPIResponse>} 서버로부터 받아온 사용자의 링크 목록 데이터를 나타내는 Promise.
 *
 * @throws {Error} 서버 요청에 실패한 경우 에러가 발생할 수 있습니다.
 *
 * @example
 * // 기본 사용자 ID 및 폴더 ID를 이용해 사용자의 링크 목록을 가져옴
 * const links = await getUserLinks();
 *
 * // 특정 사용자 및 폴더에 대한 링크 목록을 가져오는 예제
 * const customLinks = await getUserLinks("2", "17");
 */
const getUserLinks = async ({ userId, folderId = "" }) => {
  const baseUrl = API_ENDPOINTS.baseUrl;
  const endpoint = API_ENDPOINTS.user.links.getUserLinks.replace("{userId}", userId);
  const query = `?folderId=${folderId}`;
  const response = await fetch(baseUrl + endpoint + (folderId ? query : ""));
  const body = await response.json();
  return body;
};

export default getUserLinks;
