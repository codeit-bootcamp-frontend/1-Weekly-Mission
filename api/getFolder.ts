import API_ENDPOINTS from "./endpoints";

interface FolderAPIResponse {}

const baseUrl = API_ENDPOINTS.baseUrl;
const endpoint = API_ENDPOINTS.sample.getSampleFolder;

/**
 * 비동기 함수로 서버에서 폴더 정보를 가져오는 함수입니다.
 *
 * @returns {Promise<FolderAPIResponse>} 서버에서 받은 JSON 형식의 폴더 정보를 나타내는 객체를 포함하는 Promise 객체
 * @throws {Error} 서버에서 응답을 받지 못할 경우 에러가 발생합니다.
 */
const getFolder = async (): Promise<FolderAPIResponse> => {
  const response = await fetch(baseUrl + endpoint);
  const body: FolderAPIResponse = await response.json();
  return body;
};

export default getFolder;
