export const setAccessToken = (token: string) => {
  localStorage.setItem("accessToken", token);
};

export const getAccessToken = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("accessToken");
  }
};
