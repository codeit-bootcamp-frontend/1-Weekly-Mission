export const shareOnFacebook = (userId = 1, folderId = 40) => {
  const hostURL = window.location.href;
  const currentURL = `${hostURL}/shared?user=${userId}&folder=${folderId}`;
  const facebookShareURL = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    currentURL,
  )}`;

  window.open(facebookShareURL, "_blank");
};
