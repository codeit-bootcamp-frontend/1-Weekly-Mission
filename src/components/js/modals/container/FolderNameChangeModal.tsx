import { useState } from "react";
import BlueShortModal from "../BlueShortModal";

function FolderNameChangeModal({ onShow, currentFolder }: any) {
  //BlueShorModal에 넣어줄 input value 설정하는 state 함수
  const [inputValue, setInputValue] = useState(currentFolder);

  //사용자가 입력하는대로 input value가 변하게 하는 함수
  const handleInputValueChange = (e: any) => {
    const nextValue = e.target.value;
    setInputValue(nextValue);
  };

  const handleCloseButton = () => {
    onShow(false, "");
  };
  return (
    <>
      <BlueShortModal
        title="폴더 이름 변경"
        btnName="변경하기"
        onClose={handleCloseButton}
        inputValue={inputValue}
        onChange={handleInputValueChange}
      />
    </>
  );
}

export default FolderNameChangeModal;
