import styled from 'styled-components';
import ModalBox from './ModalBox';
import { useState } from 'react';

function CTA({ isSmall, children, className, modal }) {
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

const Button = styled.button`
  width: ${({ small }) => (small ? '30rem' : '35rem')};
  padding: ${({ small }) => (small ? '1rem 1.6rem' : '1.6rem 2rem')};
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 0.8rem;
  background: var(--graBlueToSkyBlue);

  color: var(--grayLight);
  font-size: ${({ small }) => (small ? '1.8rem' : '1.4rem')};
  font-weight: 600;
`;

export default CTA;
