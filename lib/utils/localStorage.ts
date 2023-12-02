export const setLocalStorage = () => {
  if (typeof window !== "undefined") {
    localStorage.setItem("LogIn", "true");
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
