import { HOST } from "../api";

const shareLink = async (currentUrl) => {
  try {
    await navigator.clipboard.writeText(HOST + currentUrl);
    alert("클립보드에 링크가 복사되었어요.");
  } catch (err) {
    console.log(err);
  }
};

export default shareLink;
