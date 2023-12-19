export const setLocalStorage = (accessToken: string) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("LogIn", accessToken);
  }
};

export const checkLocalStorage = () => {
  let isLogIn;
  if (typeof window !== "undefined") {
    isLogIn = localStorage.getItem("LogIn");
  }
  if (!isLogIn) return false;
  else return true;
};

export const getLocalStorage = () => {
  let accessToken;
  if (typeof window !== "undefined") {
    accessToken = localStorage.getItem("LogIn");
  }
  if (!accessToken) return false;
  else return accessToken;
};

export const removeLocalStorage = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("LogIn");
  }
};
