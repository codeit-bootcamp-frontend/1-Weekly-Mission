import styled from 'styled-components';
import ModalBox from '../ModalBox';
import CTA from '../CTA';
import { useState } from 'react';

function DeleteFolderModal() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handelClick = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <>
      <div>
        <P>여기 링크가 들어가야 됨</P>
        <Container onClick={handelClick}>
          <CustomCTA modal={'링크 삭제'}>삭제하기</CustomCTA>
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
