import API_ENDPOINTS from "./common";

const USER_ID = "1";
const baseUrl = API_ENDPOINTS.baseUrl;
const endpoint = API_ENDPOINTS.user.folders.getUserLinks.replace("{userId}", USER_ID);

/**
 * 비동기 함수로 서버에서 폴더 정보를 가져오는 함수입니다.
 *
 * @async
 * @function
 * @returns {Promise<Object>} 서버에서 받은 JSON 형식의 폴더 정보를 나타내는 객체를 포함하는 Promise 객체
 * @throws {Error} 서버에서 응답을 받지 못할 경우 에러가 발생합니다.
 */
const getUserLinks = async (folderId = "16") => {
  const query = `?folderId=${folderId}`;
  const response = await fetch(baseUrl + endpoint + query);
  const body = await response.json();
  return body;
};

export default getUserLinks;
