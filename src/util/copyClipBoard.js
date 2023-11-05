export async function copyClipBoard(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    alert("복사 실패!");
  }
}
