import { shareKakao } from "../../../../utils/utilShareKakaoLink";
import UseShareUrl from "../../../../hooks/useShareUrl";
import FolderShareModal from "../FolderShareModal";

function FolderShareModalContainer({
  onShow,
  currentFolder,
  folderId,
  userId,
}: any) {
  const handleCloseButton = () => {
    onShow(false, "");
  };

  const URL = UseShareUrl(userId, folderId);

  const copyURLToClipboard = (e: any) => {
    e.preventDefault();
    navigator.clipboard.writeText(URL);
    alert(`링크가 클립보드에 복사되었습니다! ${URL}`);
  };

  const handleFaceBookClick = (e: any) => {
    e.preventDefault();
    window.open(`'http://www.facebook.com/sharer.php?u=${URL}'`);
  };

  const handleKakaoClick = (e: any) => {
    e.preventDefault();
    shareKakao(URL, currentFolder);
  };

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
