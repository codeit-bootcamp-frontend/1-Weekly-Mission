import { FormEvent } from "react";
import Image from "next/image";
import styled from "styled-components";

import Button from "../Button/Button";
import LinkImage from "@/public/images/link.svg";

type HandleSubmitProps = FormEvent<HTMLFormElement>;

const Addlink = () => {
  const handleSubmit = (e: HandleSubmitProps) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <StyledAddLinkOuterBox>
        <StyledAddLinkBox>
          <StyledAddLinkInputBox>
            <StyledAddLinkInputInnerBox>
              <LinkImage width={20} height={20} alt="Link" />
              <StyledAddLinkContentInput placeholder="링크를 추가해 보세요" />
            </StyledAddLinkInputInnerBox>
            <Button size="short" text="추가하기" buttonColor="blue" />
          </StyledAddLinkInputBox>
        </StyledAddLinkBox>
      </StyledAddLinkOuterBox>
    </form>
  );
};

export default Addlink;

const StyledAddLinkOuterBox = styled.div`
  display: flex;
  padding: 0 32rem 9rem 32rem;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  background: var(--linkbrary-bg);
  justify-content: center;

  @media screen and (max-width: 1124px) {
    padding: 60px 32.5px 90px 32.5px;
    align-self: stretch;
  }

  @media screen and (max-width: 767px) {
    padding: 24px 32px 40px 32px;
    align-self: stretch;
  }
`;

const StyledAddLinkBox = styled.div`
  display: flex;
  width: 80rem;
  height: 6.9rem;
  padding: 1.6rem 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.8rem;
  border-radius: 1.5rem;
  border: 1px solid var(--linkbrary-primary-color);
  background: var(--linkbrary-white);

  @media screen and (max-width: 1124px) {
    width: 70rem;
    height: 6.9rem;
  }

  @media screen and (max-width: 767px) {
    width: 32.5rem;
    height: 5.3rem;
  }
`;

const StyledAddLinkInputBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

const AddLinkInnerBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const StyledAddLinkInputInnerBox = styled.div`
  display: flex;
  align-items: center;
`;

const AddLinkImage = styled(Image)`
  margin-right: 0.4rem;
`;

const StyledAddLinkContentInput = styled.input`
  color: var(--linkbrary-gray-60, #9fa6b2);
  width: 60rem;
  border: none;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.4rem;

  &:focus {
    outline: none;
  }

  @media screen and (max-width: 1124px) {
    width: 50rem;
  }

  @media screen and (max-width: 767px) {
    width: 13rem;
    font-size: 1.3rem;
  }
`;
