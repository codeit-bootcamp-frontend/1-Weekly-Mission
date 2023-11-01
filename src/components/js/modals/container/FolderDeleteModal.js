import RedShortModal from "../RedShortModal";

function FolderDeleteModal({ $isActive }) {
  return (
    <>
      {$isActive && (
        <RedShortModal title="폴더 삭제" btnName="삭제하기" content="폴더명" />
      )}
    </>
  );
}

export default FolderDeleteModal;
