import "./ModalStyle.css";

function FolderEdit({ modalOn, modalCloseImg, selectedFolder, onClick }) {
  function handleModalOff() {
    onClick([false, null]);
  }

  return (
    modalOn[1] === "2" && (
      <div className="modal-box ">
        <h1>폴더 이름 변경</h1>
        <button className="modal-close-btn" onClick={handleModalOff}>
          <img
            className="modal-close-img"
            src={modalCloseImg}
            alt="창닫기 버튼"
          />
        </button>

        <form className="modal-form">
          <input className="modal-input" placeholder={selectedFolder}></input>
          <button type="submit" className="modal-submit-btn">
            변경하기
          </button>
        </form>
      </div>
    )
  );
}

export default FolderEdit;
