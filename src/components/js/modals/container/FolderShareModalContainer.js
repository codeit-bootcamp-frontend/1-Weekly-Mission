import { useEffect } from "react";
import { shareKakao } from "../../../../utils/utilShareKakaoLink";
import UseShareUrl from "../../../../hooks/useShareUrl";
import FolderShareModal from "../FolderShareModal";

function FolderShareModalContainer({
  onShow,
  currentFolder,
  folderId,
  userId,
}) {
  const handleCloseButton = () => {
    onShow(false, "");
  };

  const URL = UseShareUrl(userId, folderId);

  const copyURLToClipboard = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(URL);
    alert(`링크가 클립보드에 복사되었습니다! ${URL}`);
  };

  const handleFaceBookClick = (e) => {
    e.preventDefault();
    window.open(`'http://www.facebook.com/sharer.php?u=${URL}'`);
  };

  const handleKakaoClick = (e) => {
    e.preventDefault();
    shareKakao(URL, currentFolder);
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  return (
    <>
      <FolderShareModal
        onClose={handleCloseButton}
        folderName={currentFolder}
        copy={copyURLToClipboard}
        kakao={handleKakaoClick}
        facebook={handleFaceBookClick}
      />
    </>
  );
}

export default FolderShareModalContainer;
