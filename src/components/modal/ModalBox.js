import styled from 'styled-components';
import closeButton from '../../assets/close_icon.svg';

function ModalBox({ children }) {
  const [isModalVisible, setIsModalVisible] = useState(true);

  const handleClick = () => {
    setIsModalVisible(!isModalVisible); // 모달 쓰는 컴포넌트에 이거 전달해서 닫고 열고..
  };

  return (
    <Container>
      <Icon src={closeButton} alt="창닫기 아이콘" onClick={handleClick} />
      <P>{children}</P>
      {children === '폴더 이름 변경' && <EditModal />}
      {children === '폴더 추가' && <AddModal />}
      {children === '폴더 공유' && <ShareModal />}
      {children === '폴더 삭제' && <DeleteFolderModal />}
      {children === '링크 삭제' && <DeleteLinkModal />}
      {children === '폴더에 추가' && <AddModal />}
    </Container>
  );
}

const Container = styled.div`
  display: inline-flex;
  position: relative;
  padding: 32px 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  border-radius: 15px;
  border: 1px solid var(--gray20);
  background: var(--white);
`;

const Icon = styled.img`
  width: 2.4rem;
  height: 2.4rem;

  position: absolute;
  top: 1.6rem;
  right: 1.6rem;
`;

const P = styled.p`
  color: var(--black);
  font-size: 2rem;
  font-weight: 700;
`;

export default ModalBox;
