import BlueShortModal from "../BlueShortModal";

function FolderNameChangeModal({ $isActive }) {
  return (
    <>
      {$isActive && (
        <BlueShortModal title="폴더 이름 변경" btnName="변경하기" />
      )}
    </>
  );
}

export default FolderNameChangeModal;
