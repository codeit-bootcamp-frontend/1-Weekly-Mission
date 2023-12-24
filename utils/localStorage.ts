export const setAccessToken = (token: string) => {
  localStorage.setItem("accessToken", token);
};

export const setRefreshToken = (token: string) => {
  localStorage.setItem("refreshToken", token);
};

export const getAccessToken = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("accessToken");
  }
};

export const getRefreshToken = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("refreshToken");
  }
};
