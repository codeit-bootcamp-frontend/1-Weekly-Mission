const unifyURL = (url: string) => {
  const http = url.slice(0, 4);
  if (http !== "http") return `https://${url}`;

  return url;
};

export default unifyURL;
