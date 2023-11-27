import { shareKakao } from "../../../../utils/utilShareKakaoLink";
import UseShareUrl from "../../../../hooks/useShareUrl";
import FolderShareModal from "../FolderShareModal";
import { modalType } from "../../../../types/modalType";

function FolderShareModalContainer({
  onShow,
  currentFolder,
  folderId,
  userId,
}: modalType) {
  const handleCloseButton = () => {
    onShow(false, "");
  };

  const URL = UseShareUrl(userId, folderId);

  const copyURLToClipboard = (e: MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(URL);
    alert(`링크가 클립보드에 복사되었습니다! ${URL}`);
  };

  const handleFaceBookClick = (e: MouseEvent) => {
    e.preventDefault();
    window.open(`'http://www.facebook.com/sharer.php?u=${URL}'`);
  };

  const handleKakaoClick = (e: MouseEvent) => {
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
