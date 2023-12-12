import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import kebab from "@/src/image/kebab.svg";
import AddLinkModal from "../../modal/AddLinkModal";
import DeleteLinkModal from "../../modal/DeleteLinkModal";
import Image from "next/image";

interface KebabProps {
  link: string;
}

interface StyledProps {
  $isOpen?: boolean;
}

const Kebab = ({ link }: KebabProps) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [modalType, setModalType] = useState<string | null>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  const handleTogglePopover = () => {
    setIsPopoverOpen((prev) => !prev);
  };

  // MouseEvent로 하면 오류 발생.. 왜지!?!?
  const handleClickOutside = (event: Event) => {
    if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
      setIsPopoverOpen(false);
    }
  };

  const openModal = (type: string) => {
    setModalType(type);
    setIsPopoverOpen(false); // 모달을 열 때 팝오버를 닫기
  };

  const closeModal = () => {
    setModalType(null);
  };

  useEffect(() => {
    if (isPopoverOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isPopoverOpen]);

  return (
    <KebabContainer>
      <ToggleKebab src={kebab} alt="kebab button" onClick={handleTogglePopover} />
      <Popover ref={popoverRef} $isOpen={isPopoverOpen}>
        <Button onClick={() => openModal("delete")}>삭제하기</Button>
        <Button onClick={() => openModal("add")}>폴더에 추가</Button>
      </Popover>

      {modalType === "delete" && <DeleteLinkModal isOpen={true} onRequestClose={closeModal} name={link} />}

      {modalType === "add" && <AddLinkModal isOpen={true} closeModal={closeModal} link={link} />}
    </KebabContainer>
  );
};

const KebabContainer = styled.div`
  position: relative;
`;

const ToggleKebab = styled(Image)`
  cursor: pointer;
  width: 2.1rem;
  height: 1.7rem;
`;

const Popover = styled.div<StyledProps>`
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
  width: 10rem;
  position: absolute;
  top: 2rem;
  left: 0;
  background: var(--linkbrary-white);
  box-shadow: 0 0.2rem 0.8rem 0 rgba(51, 50, 54, 0.1);
  border: none;
`;

const Button = styled.button`
  display: block;
  width: 100%;
  padding: 0.7rem 1.2rem;
  border: none;
  background: transparent;

  &:hover {
    background: var(--gray40);
    color: var(--primary);
  }
`;

export default Kebab;
