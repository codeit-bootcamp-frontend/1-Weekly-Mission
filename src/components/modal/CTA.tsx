import styled from "styled-components";
import ModalBox from "./ModalBox";
import { useState } from "react";
import * as React from "react";

interface CTAProps {
  isSmall?: boolean;
  children?: React.ReactNode;
  className?: string;
  modal: string;
}

interface ButtonProps {
  small?: boolean;
}

function CTA({ isSmall, children, className, modal }: CTAProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handelClick = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <>
      <Button small={isSmall} className={className}>
        {children}
      </Button>
      {isModalVisible && <ModalBox modal={modal} closeModal={handelClick} />}
    </>
  );
}

const Button = styled.button<ButtonProps>`
  width: ${({ small }) => (small ? "30rem" : "35rem")};
  padding: ${({ small }) => (small ? "1rem 1.6rem" : "1.6rem 2rem")};
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 0.8rem;
  background: var(--graBlueToSkyBlue);

  color: var(--grayLight);
  font-size: ${({ small }) => (small ? "1.8rem" : "1.4rem")};
  font-weight: 600;
`;

export default CTA;
