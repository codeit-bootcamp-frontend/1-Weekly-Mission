import { MouseEvent } from "react";
import styled from "styled-components";
import { FoldersData } from "@/lib/types/data";
import { ModalContentName } from "@/components";
import ModalPortal from "@/lib/utils/Portal";
import * as Styled from "./Modal.styled";

interface PropsSub {
  name: string;
  linkCount: number;
}

const StyledFolderName = styled(Styled.ModalLabel)`
  font-size: 1.6rem;
  font-weight: 400;
`;

const StyledModalContentName = styled(Styled.ModalContentName)`
  margin-top: 0px;
`;

const FolderList = ({ name, linkCount }: PropsSub) => {
  return (
    <Styled.Li>
      <StyledFolderName>{name}</StyledFolderName>
      <StyledModalContentName>{linkCount}개 링크</StyledModalContentName>
    </Styled.Li>
  );
};

type closeModal = (e: MouseEvent) => void;

interface Props {
  url: string;
  closeModal: closeModal;
  folderData: FoldersData[];
}

const AddFolderModal = ({ url, closeModal, folderData }: Props) => {
  const scrollY = window.scrollY;

  return (
    <ModalPortal>
      <Styled.ModalBackground
        $scrollY={scrollY}
        onClick={closeModal}
        $back="BG"
      />
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
