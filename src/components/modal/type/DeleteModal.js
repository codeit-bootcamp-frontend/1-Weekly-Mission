import styled from 'styled-components';
import CTA from '../CTA';
import { useState } from 'react';

function DeleteFolderModal({ subTitle, modal }) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handelClick = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <>
      <div>
        <P>{subTitle}</P>
        <Container onClick={handelClick}>
          <CustomCTA modal={modal}>삭제하기</CustomCTA>
        </Container>
      </div>
    </>
  );
}

const P = styled.p`
  margin-top: 0.8rem;
  color: var(--gray60);
  text-align: center;
  font-size: 1.4rem;
  line-height: 2.2rem;
`;

const Container = styled.div`
  margin-top: 2.4rem;
  display: flex;
  align-items: flex-start;
  gap: 3.2rem;
`;

const CustomCTA = styled(CTA)`
  width: 28rem;
  background: var(--red);
`;

export default DeleteFolderModal;
