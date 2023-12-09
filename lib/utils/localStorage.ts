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
  if (!isLogIn) {
    return false;
  } else {
    return true;
  }
};
