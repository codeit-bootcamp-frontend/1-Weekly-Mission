import { useState } from "react";
import styled from "styled-components";
import addIcon from "../../Assets/add.png";
import FolderMenuButton from "./FolderMenuButton";
import shareIcon from "../../Assets/share.svg";
import penIcon from "../../Assets/pen.svg";
import deleteIcon from "../../Assets/delete.svg";

const MenuList = styled.ul`
  display: flex;
  gap: 8px;
`;

const Wrapper = styled.div`
  width: 1060px;
  margin: 0 auto 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
`;

const Icon = styled.img`
  width: 16px;
  height: 16px;
`;

const AddFolderButton = styled.span`
  color: #6d6afe;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
`;

const CurrentFolderName = styled.span`
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -0.2px;
`;

const FeatureContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 12px;
  gap: 4px;
  font-size: 14px;
  font-weight: 600;
  color: #9fa6b2;
`;

const FeatureIcon = styled.img`
  width: 18px;
  height: 18px;
`;

const FEATURE_LIST = [
  { name: "공유", src: shareIcon, alt: "공유 아이콘" },
  { name: "이름 변경", src: penIcon, alt: "이름 변경 아이콘" },
  { name: "삭제", src: deleteIcon, alt: "삭제 아이콘" },
];

function FolderMenu({ folders }) {
  if (!folders) return null;

  return (
    <>
      <Wrapper>
        <MenuList>
          <FolderMenuButton>전체</FolderMenuButton>
          {folders.map((folder) => {
            return (
              <li>
                <FolderMenuButton>{folder.name}</FolderMenuButton>
              </li>
            );
          })}
        </MenuList>
        <Container>
          <AddFolderButton>폴더 추가</AddFolderButton>
          <Icon src={addIcon} alt="Add_Button" />
        </Container>
      </Wrapper>
      <Wrapper>
        <CurrentFolderName>유용한 글</CurrentFolderName>
        <Container>
          {FEATURE_LIST.map((item) => {
            return (
              <FeatureContainer>
                {item.name}
                <FeatureIcon src={item.src} alt={item.alt} />
              </FeatureContainer>
            );
          })}
        </Container>
      </Wrapper>
    </>
  );
}

export default FolderMenu;
