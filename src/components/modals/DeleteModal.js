import "./DeleteModal.css";

const DeleteModal = ({ currentFolder }) => {
  return (
    <>
      <p className="subtitle">{currentFolder.name}</p>
      <button>삭제하기</button>
    </>
  );
};

export default DeleteModal;
