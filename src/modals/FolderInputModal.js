import { useState } from "react";

function FolderInputModal({ modalOn, modalCloseImg, modalId, placeholder }) {
  console.log(modalOn);
  const MODAL_TEXTS = [
    {
      id: "1",
      title: "폴더 이름 변경",
      btnName: "변경하기",
    },
    {
      id: "2",
      title: "폴더 추가",
      btnName: "추가하기",
    },
  ];

  // const [modalText, setModalText] = useState(null);

  //modalText.id 가 1이면 폴더이름변경, 2면 폴더 추가로 바뀌게
  // MODAL_TEXTS.filter((item) => item.id === modalId) && MODAL_TEXTS[modalId - 1].title
  //어디서 바뀌게하지? modalID = FolderAddBtn 컴포넌트 누르면 1 , categoryItem에 이름변경 누르면 2

  //placeholder = CategoryItem의 data.name (FolderPage.js에서 프롭스로 내려줌)

  // const modalOFf = () => {
  //   setModal(false);
  // };
  return (
    // h1, placeholder,submit버튼 값 바꾸기

    <div className="modal-box ">
      <h1> "기본"</h1>
      <button className="modal-close-btn">
        <img
          className="modal-close-img"
          src={modalCloseImg}
          alt="창닫기 버튼"
        />
      </button>

      <form className="modal-form">
        <input className="modal-input" placeholder="기본값"></input>
        <button type="submit" className="modal-submit-btn">
          변경하기
        </button>
      </form>
    </div>
  );
}

export default FolderInputModal;
