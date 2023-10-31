import FolderShareModal from "../FolderShareModal";
import kakaotalk from "Assets/kakaotalk.svg";
import facebook from "Assets/facebook.svg";
import linkShare from "Assets/linkShare.svg";

const IconList = [
  { name: "카카오톡", src: kakaotalk },
  { name: "페이스북", src: facebook },
  { name: "링크 복사", src: linkShare },
];

function FolderShareModalContainer() {
  return (
    <>
      <FolderShareModal IconList={IconList} />
    </>
  );
}

export default FolderShareModalContainer;
