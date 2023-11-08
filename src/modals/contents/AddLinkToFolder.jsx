import { DescriptionText } from "../ModalCommonStyles";
import { TitleText, Content } from "../ModalCommonStyles";
import BlueGradationBtn from "../../components/StyledButtons/BlueGradationBtn";
import checkIcon from "../../assets/image/check-icon.svg";
import { useState, useEffect } from "react";
import styled from "styled-components";
import ModalContainer from "../ModalContainer";

const ListContainer = styled.div`
  display: flex;
  padding: 8px;
  align-items: flex-start;
  gap: 8px;
  border-radius: 8px;
  background-color: ${({ isSelected }) => isSelected && "#F0F6FF"};
`;
const TextContainer = styled.div`
  display: flex;
  width: 264px;
  align-items: center;
  gap: 8px;
`;
const ListItemContainer = styled.div`
  display: flex;
  width: 264px;
  justify-content: space-between;
  align-items: center;
`;

const LinkNameText = styled.h5`
  /* Linkbrary/body1-regular */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  color: ${({ isSelected }) => isSelected && "#6D6AFE"};
`;
const CheckedIcon = styled.img`
  width: 14px;
  height: 14px;
  flex-shrink: 0;
  visibility: ${({ isSelected }) => (isSelected ? "visible" : "hidden")};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;

function AddLinkToFolder({ isOpen, changeOpenState, TagListData, link = "" }) {
  const [SelectedItem, setSelectedItem] = useState(); //id
  const handleItemClick = (index) => setSelectedItem(index);

  return (
    <ModalContainer isOpen={isOpen} onClick={changeOpenState}>
      <Content>
        <div>
          <TitleText>폴더 삭제</TitleText>
          <DescriptionText margin="8px 0 0 0">{link}</DescriptionText>
        </div>
        <Container>
          {TagListData.map((data, index) => (
            <ListContainer
              id={index}
              onClick={() => handleItemClick(index)}
              isSelected={index === SelectedItem}
            >
              <ListItemContainer>
                <TextContainer>
                  <LinkNameText isSelected={index === SelectedItem}>
                    {data.name}
                  </LinkNameText>
                  <DescriptionText>{data.dataCount}개 링크</DescriptionText>
                </TextContainer>
                <CheckedIcon
                  isSelected={index === SelectedItem}
                  src={checkIcon}
                />
              </ListItemContainer>
            </ListContainer>
          ))}
        </Container>

        <BlueGradationBtn width="280px">추가하기</BlueGradationBtn>
      </Content>
    </ModalContainer>
  );
}

export default AddLinkToFolder;
