import { ChangeEvent, FormEvent, useState } from "react";
import styled from "styled-components";
import linkIcon from "@/src/image/link.svg";
import AddLinkModal from "../modal/AddLinkModal";

interface HeaderAddLinkProps {
  headerRef: React.RefObject<HTMLDivElement>;
  isSticky: boolean;
  fixedWrapperRef: React.RefObject<HTMLDivElement>;
}

const HeaderAddLink = ({ headerRef, isSticky, fixedWrapperRef }: HeaderAddLinkProps) => {
  const [link, setLink] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleAddLink = (e: FormEvent) => {
    e.preventDefault();
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLink(e.target.value);
  };

  return (
    <>
      <Wrapper ref={headerRef}>
        <Form onSubmit={handleAddLink}>
          <Input id="url" name="url" type="url" placeholder="링크를 추가해 보세요." value={link} onChange={handleInputChange} />
          <Button type="submit">추가하기</Button>
        </Form>
      </Wrapper>

      {/* 이런 식으로 wrapper를 2개 선언하지 않으면 깜빡임 현상이 해결이 안됩니다..ㅠㅠ */}
      {isSticky && (
        <FixedWrapper ref={fixedWrapperRef}>
          <Form onSubmit={handleAddLink}>
            <Input id="url" name="url" type="url" placeholder="링크를 추가해 보세요." value={link} onChange={handleInputChange} />
            <Button type="submit">추가하기</Button>
          </Form>
        </FixedWrapper>
      )}

      <AddLinkModal isOpen={showModal} closeModal={closeModal} link={link} />
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  background: var(--bg);
  position: "relative";
  bottom: 0;
  width: 100%;
  padding: 6rem 32rem 9rem 32rem;

  @media (max-width: 1124px) {
    padding-left: 32.5px;
    padding-right: 32.5px;
  }

  @media (max-width: 767px) and (min-width: 375px) {
    padding: 24px 32px 40px 32px;
  }
`;

const FixedWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: var(--bg);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 2.4rem 32rem;

  z-index: 3;

  @media (max-width: 767px) and (min-width: 375px) {
    padding: 1.6rem 3.2rem;
  }
`;

const Form = styled.form`
  position: relative;
`;

const Input = styled.input`
  width: 80rem;
  height: 7rem;
  padding: 1.6rem 2rem 1.6rem 4rem;
  border-radius: 1.5rem;
  border: 0.1rem solid var(--primary);
  background: var(--linkbrary-white);
  font-size: 16px;

  background-image: url(${linkIcon.src});
  background-repeat: no-repeat;
  background-size: 1.6rem;
  background-position: 1.6rem center;

  @media (max-width: 1124px) {
    width: 70.4rem;
  }

  @media (max-width: 767px) and (min-width: 375px) {
    width: 32.5rem;
    height: 5.3rem;
    padding: 0.8rem 1rem 0.8rem 3.4rem;
  }
`;

const Button = styled.button`
  display: flex;
  width: 80px;
  padding: 10px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  border: none;
  background: var(--graBlueToSkyBlue);

  color: var(--grayLight);
  font-size: 14px;
  font-weight: 600;

  position: absolute;
  right: 2rem;
  top: 1.6rem;

  @media (max-width: 767px) and (min-width: 375px) {
    right: 1rem;
    top: 0.8rem;
  }
`;

export default HeaderAddLink;
