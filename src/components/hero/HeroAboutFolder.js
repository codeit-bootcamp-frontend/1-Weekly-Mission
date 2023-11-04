import { useState } from "react";

import styled from "styled-components";

import Button from "components/button/Button";
import AddLinkFolderInput from "components/inputs/addLinkFolder";
import AddLink from "components/modal/AddLink";
import ModalContainer from "components/modal/ModalContainer";
import ModalPortal from "components/ModalPortal";

import LinkIcon from "assets/link.svg";

export const Wrapper = styled.div`
  padding: 1.5rem 2rem;
  position: relative;
  max-width: 55rem;
  width: 100%;
  margin: auto;
`;

export const Icon = styled.img`
  position: absolute;
  top: 50%;
  left: 3.5rem;
  transform: translate(-50%, -50%);
`;

export const ButtonContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(-50%, -50%);
`;

export default function FolderHero({ onChangeAddLink, addLinkValue }) {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleInput = () => {
    if (!addLinkValue) {
      alert("추가할 링크를 입력해주세요.");
      return;
    }
    setIsOpenModal(true);
  };

  return (
    <>
      {isOpenModal && (
        <ModalPortal>
          <ModalContainer onClose={() => setIsOpenModal(false)}>
            <AddLink link={addLinkValue} />
          </ModalContainer>
        </ModalPortal>
      )}

      <Wrapper>
        <Icon src={LinkIcon} alt="link" />
        <AddLinkFolderInput onChangeAddLink={onChangeAddLink} />
        <ButtonContainer>
          <Button size="small" label="추가하기" onClick={handleInput} />
        </ButtonContainer>
      </Wrapper>
    </>
  );
}
