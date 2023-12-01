import { useState } from "react";

import styled from "styled-components";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

import LinkIcon from "@/public/assets/link.svg";
import Button from "../button/Basic";
import ModalPortal from "../ModalPortal";
import ModalContainer from "../modal/ModalContainer";
import AddLink from "../modal/AddLink";
import AddLinkFolderInput from "../inputs/AddLinkFolder";

interface FolderHeroProps {
  addLinkValue: string;
  isFixedInput: boolean;
  readonly onChangeAddLink: (link: string) => void;
}

export default function FolderHero({
  onChangeAddLink,
  isFixedInput,
  addLinkValue,
}: FolderHeroProps) {
  /**
   * linkForm이 fixed인 container 새로 생성
   * isFixedInput가 true일때는 linkForm 사라짐
   * isFixedInput가 false일때는 linkForm 보여짐
   */
  const { ref, isIntersecting } = useIntersectionObserver<HTMLDivElement>();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const showFixedAddLink = !isFixedInput && !isIntersecting;

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
      <Container>
        <LinkTop ref={ref}>
          <Icon />
          <AddLinkFolderInput onChangeAddLink={onChangeAddLink} />
          <ButtonContainer>
            <Button size="small" label="추가하기" onClick={handleInput} />
          </ButtonContainer>
        </LinkTop>
        {showFixedAddLink && (
          <LinkBottom>
            <Icon />
            <AddLinkFolderInput onChangeAddLink={onChangeAddLink} />
            <ButtonContainer>
              <Button size="small" label="추가하기" onClick={handleInput} />
            </ButtonContainer>
          </LinkBottom>
        )}
      </Container>
    </>
  );
}

const Container = styled.section`
  text-align: center;
  background-color: var(--color-primary-varient);
`;

const LinkTop = styled.div`
  padding: 1.5rem 2rem;
  position: relative;
  max-width: 55rem;
  width: 100%;
  margin: auto;
`;

const LinkBottom = styled(LinkTop)`
  position: fixed;
  bottom: 0;
  z-index: 1;
`;

const Icon = styled(LinkIcon)`
  position: absolute;
  top: 50%;
  left: 3.5rem;
  transform: translate(-50%, -50%);
`;

const ButtonContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(-50%, -50%);
`;
