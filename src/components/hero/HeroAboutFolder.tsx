import { useState } from "react";
import * as S from "./HeroStyles";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

import Button from "@/components/button/Basic";
import ModalPortal from "@/components/ModalPortal";
import ModalContainer from "@/components/modal/ModalContainer";
import AddLink from "@/components/modal/AddLink";
import AddLinkFolderInput from "@/components/inputs/AddLinkFolderInput";

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
   * AddLinkContainer 공통 컴포넌트 분리
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

  const handleCloseModal = () => setIsOpenModal(false);

  return (
    <>
      {isOpenModal && (
        <ModalPortal>
          <ModalContainer onClose={handleCloseModal}>
            <AddLink link={addLinkValue} />
          </ModalContainer>
        </ModalPortal>
      )}
      <S.LinkContainer>
        <S.LinkForm ref={ref}>
          <S.Icon />
          <AddLinkFolderInput onChangeAddLink={onChangeAddLink} />
          <S.ButtonContainer>
            <Button size="small" label="추가하기" onClick={handleInput} />
          </S.ButtonContainer>
        </S.LinkForm>
      </S.LinkContainer>
      <S.FixedLinkContainer>
        {showFixedAddLink && (
          <S.LinkForm>
            <S.Icon />
            <AddLinkFolderInput onChangeAddLink={onChangeAddLink} />
            <S.ButtonContainer>
              <Button size="small" label="추가하기" onClick={handleInput} />
            </S.ButtonContainer>
          </S.LinkForm>
        )}
      </S.FixedLinkContainer>
    </>
  );
}
