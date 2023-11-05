import "./ModalStyle.css";

function FolderDelete({ modalOn, modalCloseImg, selectedFolder, onClick }) {
  function handleModalOff() {
    onClick([false, null]);
  }

  return (
    modalOn[1] === "4" && (
      <div className="modal-box folder-delete">
        <div className="title-box">
          <h1>폴더 삭제</h1>
          <button className="modal-close-btn" onClick={handleModalOff}>
            <img
              className="modal-close-img"
              src={modalCloseImg}
              alt="창닫기 버튼"
            />
          </button>
          <span className="folder-name">{selectedFolder}</span>
        </div>

        <button type="submit" className="modal-submit-btn delete">
          삭제하기
        </button>
      </div>
    )
  );
}

export default FolderDelete;
