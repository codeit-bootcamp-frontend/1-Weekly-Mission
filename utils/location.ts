export const isLocation = () => {
  const location = window.location.pathname;
  if (location.indexOf("folder") > -1) {
    return true;
  } else {
    return false;
  }
};

export const isblock = () => {
  const location = window.location.pathname;
  if (location.indexOf("sign") > -1) {
    return false;
  } else {
    return true;
  }
};
