import styled from "styled-components";
import { ModalContentName } from "components";
import ModalPortal from "Portal";
import * as Styled from "./StyledModal";

const StyledFolderName = styled(Styled.ModalLabel)`
  font-size: 1.6rem;
  font-weight: 400;
`;

const StyledModalContentName = styled(Styled.ModalContentName)`
  margin-top: 0px;
`;

const FolderList = ({ name, linkCount }) => {
  return (
    <Styled.Li>
      <StyledFolderName>{name}</StyledFolderName>
      <StyledModalContentName>{linkCount}개 링크</StyledModalContentName>
    </Styled.Li>
  );
};

const AddFolderModal = ({ url, closeModal, folderData }) => {
  return (
    <ModalPortal>
      <Styled.ModalBackground onClick={closeModal} />
      <Styled.Container>
        <Styled.ModalLabel>폴더에 추가</Styled.ModalLabel>
        <ModalContentName>{url}</ModalContentName>
        <Styled.Ul>
          {folderData.map((item) => {
            const { id, name, link } = item;
            return <FolderList key={id} name={name} linkCount={link.count} />;
          })}
        </Styled.Ul>
        <Styled.ModalBtn $color="blue">추가하기</Styled.ModalBtn>
        <Styled.ModalCloseBtn onClick={closeModal} />
      </Styled.Container>
    </ModalPortal>
  );
};

export default AddFolderModal;
