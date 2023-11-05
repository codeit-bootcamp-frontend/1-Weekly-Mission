import "./ModalStyle.css";
import kakaoImg from "../../assets/images/kakao.png";
import facebookImg from "../../assets/images/Facebook.png";
import linkImg from "../../assets/images/link.svg";

function FolderShare({ modalOn, modalCloseImg, selectedFolder, onClick }) {
  function handleModalOff() {
    onClick([false, null]);
  }

  return (
    modalOn[1] === "3" && (
      <div className="modal-box folder-share">
        <div className="title-box">
          <h1>폴더 공유</h1>
          <button className="modal-close-btn" onClick={handleModalOff}>
            <img
              className="modal-close-img"
              src={modalCloseImg}
              alt="창닫기 버튼"
            />
          </button>
          <span className="folder-name">{selectedFolder}</span>
        </div>

        <div className="share-links">
          <div className="link-btn-box kakao-link">
            <button>
              <img src={kakaoImg} alt="카카오톡 이미지" />
            </button>
            <span>카카오톡</span>
          </div>

          <div className="link-btn-box  facebook-link">
            <button>
              <img src={facebookImg} alt="페이스북 이미지" />
            </button>
            <span>페이스북</span>
          </div>

          <div className="link-btn-box  copy-link">
            <button>
              <img src={linkImg} alt="연결고리 이미지" />
            </button>
            <span>링크 복사</span>
          </div>
        </div>
      </div>
    )
  );
}

export default FolderShare;
