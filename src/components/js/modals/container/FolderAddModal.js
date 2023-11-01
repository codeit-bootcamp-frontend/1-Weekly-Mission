import BlueShortModal from "../BlueShortModal";

function FolderAddModal({ $isActive }) {
  return (
    <>{$isActive && <BlueShortModal title="폴더 추가" btnName="추가하기" />}</>
  );
}

export default FolderAddModal;
