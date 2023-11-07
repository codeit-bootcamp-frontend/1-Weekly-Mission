import styled from 'styled-components';
import ModalBox from '../modal/ModalBox';
import { useState } from 'react';

function Option({ icon, children, modal, title, folderId, userID }) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handelClick = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <>
      <OptionContainer onClick={handelClick}>
        <Icon src={icon} />
        <p>{children}</p>
      </OptionContainer>
      {isModalVisible && (
        <ModalBox modal={modal} closeModal={handelClick} folderTitle={title} folderId={folderId} userID={userID} />
      )}
    </>
  );
}

export default Option;

const OptionContainer = styled.button`
  display: flex;
  align-items: center;

  p {
    font-family: Pretendard;
    color: var(--gray60);
    font-size: 1.4rem;
    font-weight: 600;
  }
`;

const Icon = styled.img`
  width: 1.8rem;
  height: 1.8rem;
`;
