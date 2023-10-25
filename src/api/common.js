/**
 * API 엔드포인트와 관련된 정보를 담고 있는 객체입니다.
 *
 * @constant
 * @type {Object}
 * @property {string} baseUrl - API의 기본 URL.
 * @property {Object} user - 사용자와 관련된 엔드포인트 정보를 포함하는 객체.
 * @property {string} user.checkEmail - 이메일 중복 확인을 위한 엔드포인트 URL.
 * @property {Object} auth - 인증과 관련된 엔드포인트 정보를 포함하는 객체.
 * @property {string} auth.refreshToken - 토큰 갱신을 위한 엔드포인트 URL.
 * @property {string} auth.signIn - 로그인을 위한 엔드포인트 URL.
 * @property {string} auth.signUp - 회원 가입을 위한 엔드포인트 URL.
 * @property {Object} sample - 샘플 데이터와 관련된 엔드포인트 정보를 포함하는 객체.
 * @property {string} sample.user - 사용자 샘플 데이터를 가져오는 엔드포인트 URL.
 * @property {string} sample.folder - 폴더 샘플 데이터를 가져오는 엔드포인트 URL.
 */
const API_ENDPOINTS = {
  baseUrl: "https://bootcamp-api.codeit.kr/api",
  user: {
    checkEmail: "/check-email",
  },
  auth: {
    refreshToken: "/refresh-token",
    signIn: "/sign-in",
    signUp: "/sign-up",
  },
  sample: {
    user: "/sample/user",
    folder: "/sample/folder",
  },
};

export default API_ENDPOINTS;
