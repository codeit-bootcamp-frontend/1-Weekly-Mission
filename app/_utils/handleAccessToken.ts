const ACCESS_TOKEN = "accessToken";

export const getAccessToken = () => {
  if (typeof window !== "undefined") {
    const cookies = document.cookie.split(";").map((cookie) => cookie.split("="));
    const accessTokenCookie = cookies.find((cookie) => cookie[0] === ACCESS_TOKEN);
    return accessTokenCookie?.[1];
  }
};

export const setAccessToken = (value: string) => {
  if (typeof window !== "undefined") {
    document.cookie = `${ACCESS_TOKEN}=${value}`;
  }
};

export const removeAccessToken = () => {
  if (typeof window !== "undefined" && document.cookie) {
    document.cookie = `${ACCESS_TOKEN}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }
};
