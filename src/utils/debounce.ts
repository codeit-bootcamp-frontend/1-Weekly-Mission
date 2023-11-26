function debounce<T>(callback: T, wait: number) {
  let timeout;

  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback();
    }, wait);
  };
}

export default debounce;
