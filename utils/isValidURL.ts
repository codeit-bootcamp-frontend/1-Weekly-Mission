const isValidURL = (url: string): boolean => {
  const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
  return urlRegex.test(url);
};

export default isValidURL;
