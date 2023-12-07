import styled, { keyframes, css } from 'styled-components';
import Modal from '@/components/common/Modal/Modal';
import useModal from '@/hooks/useModal';
import { DEVICE_SIZE } from '@/styles/DeviceSize';
import { useObserver } from '@/hooks/useObserver';

function AddFolderBtn() {
  const visibleFooter = useObserver('footer');
  const { isOpen, handleModalOpen, handleModalClose } = useModal();

  return (
    <>
      <Container $visibleFooter={visibleFooter} onClick={handleModalOpen}>
        <AddFolder>폴더 추가</AddFolder>
        <Icon />
      </Container>
      {isOpen && <Modal type="input" title="폴더 추가" button="추가하기" onClickClose={handleModalClose} />}
    </>
  );
}

export default AddFolderBtn;

const upDown = keyframes`
  50% {
    bottom: 130px;
    opacity: 0.8;
  }
`;

const upDownFurther = keyframes`
  50% {
    bottom: 195px;
    opacity: 0.8;
  }
`;

const goUp = css`
  animation: ${upDown} 2s ease-in-out infinite;
`;

const goUpFurther = css`
  animation: ${upDownFurther} 2s ease-in-out infinite;
`;

const Container = styled.div<{ $visibleFooter: boolean }>`
  display: flex;
  gap: 4px;
  justify-content: space-between;
  align-items: center;
  &:hover {
    cursor: pointer;
  }

  @media (max-width: ${DEVICE_SIZE.mobile}) {
    z-index: 10;
    position: fixed;
    bottom: ${({ $visibleFooter }) => ($visibleFooter ? '165px' : '101px')};
    left: 50%;
    transform: translate(-50%, 0%);
    padding: 8px 24px;
    width: 128px;
    border-radius: 20px;
    background-color: var(--primary-color);

    ${({ $visibleFooter }) => ($visibleFooter ? goUpFurther : goUp)};
  }
`;

const AddFolder = styled.p`
  margin: 0 0;
  color: var(--primary-color);
  font-size: 1.6rem;
  font-weight: 500;
  letter-spacing: -0.3px;
  display: inline;

  @media (max-width: ${DEVICE_SIZE.mobile}) {
    color: #e7effb;
  }
`;
const Icon = styled.div`
  width: 16px;
  height: 16px;

  background-image: url('/assets/images/add.svg');
  background-position: center;
  object-fit: contain;

  @media (max-width: ${DEVICE_SIZE.mobile}) {
    background-image: url('/assets/images/add_mobile.svg');
  }
`;
