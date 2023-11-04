import styled from "styled-components";
import AddFolderIcon from "../../../assets/image/addFolderIcon.svg";
import { useState } from "react";

function FloatingOptionBtn() {
  const [isFloatingBtnActive, setFloatingBtnActivation] = useState(false);

  const OptionBtnContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    position: absolute;
    bottom: 6px;
    left: 108px;
    visibility: ${isFloatingBtnActive ? "visible" : "hidden"};
  `;

  const OptionBtn = styled.button`
    width: 100px;
    padding: 7px 12px;
    color: #333236;
    border: none;
    background: #fff;
    box-shadow: 0px 2px 8px 0px rgba(51, 50, 54, 0.1);
    &:active {
      background: #e7effb;
      color: #6d6afe;
    }
  `;

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

  const Container = styled.div`
    position: absolute;
    left: 100px;
    top: 261px;
  `;

  const style = {
    position: "relative",
    width: "100%",
    height: "100%",
  };

  const handleAddFolderBtnClick = () => {
    setFloatingBtnActivation((prevStatus) => !prevStatus);
  };
  return (
    <Container>
      <div style={style}>
        <AddFolderBtn onClick={handleAddFolderBtnClick}>
          폴더 추가
          <img src={AddFolderIcon} alt="folder add icon" />
        </AddFolderBtn>

        <OptionBtnContainer>
          <OptionBtn>삭제하기</OptionBtn>
          <OptionBtn>폴더에 추가</OptionBtn>
        </OptionBtnContainer>
      </div>
    </Container>
  );
}

export default FloatingOptionBtn;
