export const shareOnClipboard = async (userId: number, folderId: number) => {
  const hostURL = window.location.href;

  try {
    await navigator.clipboard.writeText(`${hostURL}/shared?user=${userId}&folder=${folderId}`);
    alert("링크를 복사하였습니다.");
  } catch (error) {
    console.error("Failed to copy: ", error);
  }
};
