import { useState } from "react";
import styled from "styled-components";
import AddLinkModal from "../modal/AddLinkModal";
import linkIcon from "../../image/link.svg";

const HeaderAddLink = () => {
  const [link, setLink] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleAddLink = (event) => {
    event.preventDefault();
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <Wrapper>
      <Form onSubmit={handleAddLink}>
        <Input
          id="url"
          name="url"
          type="url"
          placeholder="링크를 추가해 보세요."
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <Button type="submit">추가하기</Button>
      </Form>

      <AddLinkModal isOpen={showModal} closeModal={closeModal} link={link} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  padding: 6rem 32rem 9rem 32rem;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  background: var(--bg);

  @media (max-width: 1124px) {
    padding-left: 32.5px;
    padding-right: 32.5px;
  }

  @media (max-width: 767px) and (min-width: 375px) {
    padding: 24px 32px 40px 32px;
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

  background-image: url(${linkIcon});
  background-repeat: no-repeat;
  background-size: 1.6rem;
  background-position: 1.6rem center;

  @media (max-width: 1124px) {
    width: 704px;
  }

  @media (max-width: 767px) and (min-width: 375px) {
    width: 325px;
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
`;

export default HeaderAddLink;
