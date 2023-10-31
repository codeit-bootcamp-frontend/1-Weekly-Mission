/**
 * API 엔드포인트 설정을 포함하는 객체입니다.
 * @typedef {Object} API_ENDPOINTS
 * @property {string} baseUrl - API의 기본 URL.
 * @property {Object} user - 사용자 관련 API 엔드포인트 설정.
 * @property {string} user.checkEmail - 이메일 확인 엔드포인트 URL.
 * @property {string} user.getUser - 특정 사용자 정보를 가져오는 엔드포인트 URL.
 * @property {string} user.getUsers - 모든 사용자 정보를 가져오는 엔드포인트 URL.
 * @property {Object} user.folders - 폴더 관련 API 엔드포인트 설정.
 * @property {string} user.folders.getFolder - 특정 폴더 정보를 가져오는 엔드포인트 URL.
 * @property {string} user.folders.deleteFolder - 특정 폴더를 삭제하는 엔드포인트 URL.
 * @property {string} user.folders.updateFolder - 특정 폴더를 업데이트하는 엔드포인트 URL.
 * @property {string} user.folders.createFolder - 새로운 폴더를 생성하는 엔드포인트 URL.
 * @property {string} user.folders.getUserFolder - 특정 사용자의 특정 폴더 정보를 가져오는 엔드포인트 URL.
 * @property {string} user.folders.getUserFolders - 특정 사용자의 모든 폴더 정보를 가져오는 엔드포인트 URL.
 * @property {Object} user.links - 링크 관련 API 엔드포인트 설정.
 * @property {string} user.links.deleteLink - 특정 링크를 삭제하는 엔드포인트 URL.
 * @property {string} user.links.getLinks - 모든 링크 정보를 가져오는 엔드포인트 URL.
 * @property {string} user.links.createLink - 새로운 링크를 생성하는 엔드포인트 URL.
 * @property {string} user.links.getUserLinks - 특정 사용자의 링크 정보를 가져오는 엔드포인트 URL.
 * @property {Object} auth - 인증 관련 API 엔드포인트 설정.
 * @property {string} auth.refreshToken - 토큰 갱신을 위한 엔드포인트 URL.
 * @property {string} auth.signIn - 로그인을 위한 엔드포인트 URL.
 * @property {string} auth.signUp - 회원가입을 위한 엔드포인트 URL.
 * @property {Object} sample - 샘플 데이터 관련 API 엔드포인트 설정.
 * @property {string} sample.getSampleFolder - 샘플 폴더 정보를 가져오는 엔드포인트 URL.
 * @property {string} sample.getSampleUser - 샘플 사용자 정보를 가져오는 엔드포인트 URL.
 */
const API_ENDPOINTS = {
  baseUrl: "https://bootcamp-api.codeit.kr/api",
  user: {
    checkEmail: "/check-email",
    getUser: "/users/{userId}",
    getUsers: "/users",
    folders: {
      getFolder: "/folders/{folderId}",
      deleteFolder: "/folders/{folderId}",
      updateFolder: "/folders/{folderId}",
      createFolder: "/folders",
      getUserFolder: "/users/{userId}/folders/{folderId}",
      getUserFolders: "/users/{userId}/folders",
    },
    links: {
      deleteLink: "/links/{linkId}",
      getLinks: "/links",
      createLink: "/links",
      getUserLinks: "/users/{userId}/links",
    },
  },
  auth: {
    refreshToken: "/refresh-token",
    signIn: "/sign-in",
    signUp: "/sign-up",
  },
  sample: {
    getSampleFolder: "/sample/folder",
    getSampleUser: "/sample/user",
  },
};
export default API_ENDPOINTS;
