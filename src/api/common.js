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
