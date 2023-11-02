import UseShareUrl from "hooks/useShareUrl";
import FolderShareModal from "../FolderShareModal";
import kakaotalk from "Assets/kakaotalk.svg";
import facebook from "Assets/facebook.svg";
import linkShare from "Assets/linkShare.svg";

const IconList = [
  { name: "카카오톡", src: kakaotalk},
  { name: "페이스북", src: facebook},
  { name: "링크 복사", src: linkShare },
];

function FolderShareModalContainer({ onShow, currentFolder, folderId, userId }) {
  const handleCloseButton = () => {
    onShow(false, "");
  };

  const URL = UseShareUrl(userId, folderId);

  const copyURLToClipboard = (e) => {
    navigator.clipboard.writeText(URL);
    alert('링크가 클립보드에 복사되었습니다!')
  }

  const shareToSNS = (e) => {
    e.preventDefault();
  }


  return (
    <>
      <FolderShareModal IconList={IconList} onClose={handleCloseButton} folderName={currentFolder}/>
    </>
  );
}

export default FolderShareModalContainer;
