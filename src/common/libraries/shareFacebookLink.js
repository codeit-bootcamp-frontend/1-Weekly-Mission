export const shareOnFacebook = (userId = 1, folderId = 40) => {
  const hosetURL = window.location.href;
  const currentURL = `${hosetURL}/shared?user=${userId}&folder=${folderId}`;
  const facebookShareURL = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    currentURL,
  )}`;

  window.open(facebookShareURL, "_blank");
};
