import styled, { keyframes, css } from 'styled-components';
import addButton from '@/public/assets/images/add.svg';
import addMobileButton from '@/public/assets/images/add_mobile.svg';
import useGetWindowWidth from '@/hooks/useGetWindowWidth';
import Modal from '../common/Modal/Modal';
import useModal from '@/hooks/useModal';
import Image from 'next/image';
import { DEVICE_SIZE } from '@/styles/DeviceSize';
import { useObserver } from '@/hooks/useObserver';

function AddFolderBtn() {
  const innerWidth = useGetWindowWidth();
  const visibleFooter = useObserver('footer');
  const { isOpen, handleModalOpen, handleModalClose } = useModal();

  return (
    <>
      <Container $visibleFooter={visibleFooter} onClick={() => handleModalOpen()}>
        <AddFolder>폴더 추가</AddFolder>
        {innerWidth < 768 ? <Image src={addMobileButton} alt="폴더 추가 버튼" /> : <Image src={addButton} alt="폴더 추가 버튼" />}
      </Container>
      {isOpen && <Modal type="input" title="폴더 추가" button="추가하기" onClickClose={() => handleModalClose()} />}
    </>
  );
}

export default AddFolderBtn;

const upDown = keyframes`
  50% {
    bottom: 130px;
  }
`;

const upDownFooter = keyframes`
  50% {
    bottom: 195px;
  }
`;

const noFooter = css`
  animation: ${upDown} 2s 0.5s infinite;
`;

const yesFooter = css`
  animation: ${upDownFooter} 2s 0.5s infinite;
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

    ${({ $visibleFooter }) => ($visibleFooter ? yesFooter : noFooter)};
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
