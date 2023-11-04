export const shareOnClipboard = async (userId = 1, folderId = 40) => {
  const path = location.href;

  try {
    await navigator.clipboard.writeText(`${path}/shared?user=${userId}&folder=${folderId}`);
    alert("링크를 복사하였습니다.");
  } catch (error) {
    console.error("Failed to copy: ", error);
  }
};
