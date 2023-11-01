import RedShortModal from "../RedShortModal";

function LinkDeleteModal({ $isActive }) {
  return (
    <>
      {$isActive && (
        <RedShortModal
          title="링크 삭제"
          btnName="삭제하기 "
          content="https://www.abc.com"
        />
      )}
    </>
  );
}

export default LinkDeleteModal;
