import styled from "styled-components";
import { DescriptionText } from "../ModalCommonStyles";
import { TitleText, Content } from "../ModalCommonStyles";
import kakao from "../../assets/image/kakao.svg";
import facebook from "../../assets/image/facebook.svg";
import link from "../../assets/image/link.svg";
import ModalContainer from "../ModalContainer";
import getFolderTagListData from "../../utils/getFolderTagListData";

const USER_ID = 1;

const SnsButton = styled.button`
  display: flex;
  padding: 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 37.333px;
  border: none;
  background: ${({ backgroundColor }) => backgroundColor}};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`;

const TextStyle = styled.h5`
  color: #373740;
  text-align: center;
  font-size: 13px;
  font-weight: 400;
  line-height: 15px; /* 115.385% */
`;

const ShareSnsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 32px;
`;

// 추가 구현 필요
function getFolderName() {
  return getFolderTagListData(true);
}

const SnsItem = {
  kakao: {
    ImgUrl: kakao,
    backgroundColor: "#FEE500",
    name: "카카오톡",
    url: `/shared?user=${USER_ID}&folder=${getFolderName()}`,
  },
  facebook: {
    ImgUrl: facebook,
    backgroundColor: "#1877F2",
    name: "페이스북",
    url: `/shared?user=${USER_ID}&folder=${getFolderName()}`,
  },
  link: {
    ImgUrl: link,
    backgroundColor: "rgba(157, 157, 157, 0.04)",
    name: "링크 복사",
  },
};

function ShareSns({ children }) {
  const handleClick = (snsUrl) => {
    window.open(snsUrl);
  };

  return (
    <Container>
      <SnsButton
        backgroundColor={children.backgroundColor}
        onClick={() => handleClick(children.url)}
      >
        <img src={children.ImgUrl} alt="sns icon"></img>
      </SnsButton>
      <TextStyle>{children.name}</TextStyle>
    </Container>
  );
}
function ShareFolder({ isOpen, changeOpenState, folderTagName }) {
  return (
    <ModalContainer isOpen={isOpen} onClick={changeOpenState}>
      <Content>
        <div>
          <TitleText>폴더 공유</TitleText>
          <DescriptionText margin="8px 0 0 0">{folderTagName}</DescriptionText>
        </div>
        <ShareSnsContainer>
          <ShareSns>{SnsItem.kakao}</ShareSns>
          <ShareSns>{SnsItem.facebook}</ShareSns>
          <ShareSns>{SnsItem.link}</ShareSns>
        </ShareSnsContainer>
      </Content>
    </ModalContainer>
  );
}

export default ShareFolder;
