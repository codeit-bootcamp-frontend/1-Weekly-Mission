function debounce(callback, wait) {
  let timeout;

  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback();
    }, wait);
  };
}

export default debounce;
