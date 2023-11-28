import styled from "styled-components";
import AddFolderIcon from "../../assets/image/addFolderIcon.svg";
import { useState } from "react";
import AddFolderOptionBtn from "./AddFolderOptionBtn";

function FloatingAddFolderBtn() {
  const [isFloatingBtnActive, setFloatingBtnActivation] = useState(false);

  const AddFolderBtn = styled.button`
    border-radius: 20px;
    border: 1px solid #fff;
    box-shadow: 0px 2px 8px 0px rgba(51, 50, 54, 0.1);
    background: ${isFloatingBtnActive ? "#5653f2" : "#6D6AFE"};
    height: 35px;
    width: 129px;
    display: flex;
    padding: 8px 24px;
    gap: 4px;
    font-weight: 500;
    letter-spacing: -0.3px;
    color: #fff;
    font-size: 16px;
    position: relative;
  `;

  const BtnWrapper = styled.div`
    position: absolute;
    left: 100px;
    top: 261px;
  `;

  const BtnContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
  `;

  const handleAddFolderBtnClick = () => {
    setFloatingBtnActivation((prevStatus) => !prevStatus);
  };

  return (
    <BtnWrapper>
      <BtnContainer>
        <AddFolderBtn onClick={handleAddFolderBtnClick}>
          폴더 추가
          <img src={AddFolderIcon} alt="folder add icon" />
        </AddFolderBtn>

        <AddFolderOptionBtn
          isFloatingBtnActive={isFloatingBtnActive}
          options={["삭제하기", "폴더에 추가"]}
        />
      </BtnContainer>
    </BtnWrapper>
  );
}

export default FloatingAddFolderBtn;
