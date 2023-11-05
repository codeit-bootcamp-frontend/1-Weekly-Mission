import "./ModalStyle.css";

function FolderAdd({ modalOn, modalCloseImg, onClick }) {
  function handleModalOff() {
    onClick([false, null]);
  }

  return (
    modalOn[1] === "1" && (
      <div className="modal-box ">
        <h1>폴더 추가</h1>
        <button className="modal-close-btn" onClick={handleModalOff}>
          <img
            className="modal-close-img"
            src={modalCloseImg}
            alt="창닫기 버튼"
          />
        </button>

        <form className="modal-form">
          <input className="modal-input" placeholder="내용 입력"></input>
          <button type="submit" className="modal-submit-btn">
            추가하기
          </button>
        </form>
      </div>
    )
  );
}

export default FolderAdd;
