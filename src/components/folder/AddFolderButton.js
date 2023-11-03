import { useState, useEffect } from "react";
import styled from "styled-components";
import addPurpleImg from "../../image/add.svg";
import addWhiteImg from "../../image/addWhite.svg";

const AddFolderButton = () => {
  const [addImg, setAddImg] = useState(addPurpleImg);

  const handleResize = () => {
    if (window.innerWidth <= 767) {
      setAddImg(addWhiteImg);
    } else {
      setAddImg(addPurpleImg);
    }
  };

  useEffect(() => {
    handleResize();

    // 윈도우의 resize 이벤트에 handleResize 함수를 추가하여 화면 크기가 변경될 때마다 실행되도록 함
    window.addEventListener("resize", handleResize);

    // return () => {
    //   window.removeEventListener("resize", handleResize);
    // };
  }, []);

  return (
    <AddFolderBtn>
      <AddFolderMsg>폴더 추가</AddFolderMsg>
      <AddFolderImg src={addImg} alt="폴더 추가 버튼" />
    </AddFolderBtn>
  );
};

const AddFolderBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  border: none;
  background-color: var(--linkbrary-white, #fff);
  cursor: pointer;
`;

const AddFolderMsg = styled.span`
  color: var(--primary-color);
  text-align: center;
  font-size: 16px;
  font-weight: 500;
`;

const AddFolderImg = styled.img`
  width: 16px;
  height: 16px;
`;

export default AddFolderButton;
