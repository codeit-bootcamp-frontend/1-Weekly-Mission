import "./DeleteLinkModal.css";

const DeleteLinkModal = ({ link }) => {
  return (
    <>
      <p className="subtitle">{link}</p>
      <button>삭제하기</button>
    </>
  );
};

export default DeleteLinkModal;
