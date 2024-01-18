export const setAccessToken = (value: string) => {
  if (typeof window !== "undefined") {
    document.cookie = `accessToken=${value}`;
  }
};

export const removeAccessToken = () => {
  if (typeof window !== "undefined" && document.cookie) {
    document.cookie = "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  }
};
