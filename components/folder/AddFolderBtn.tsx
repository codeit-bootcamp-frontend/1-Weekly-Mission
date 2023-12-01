import styled from 'styled-components';
import addButton from '@/public/assets/images/add.svg';
import addMobileButton from '@/public/assets/images/add_mobile.svg';
import useGetWindowWidth from '@/hooks/useGetWindowWidth';
import ModalPortal from '@/components/common/Modal/ModalPortal';
import InputModal from '@/components/common/Modal/InputModal';
import useModal from '@/hooks/useModal';
import Image from 'next/image';
import { DEVICE_SIZE } from '@/styles/DeviceSize';

function AddFolderBtn() {
  const innerWidth = useGetWindowWidth();
  const { isOpen, handleModalOpen, handleModalClose } = useModal();

  return (
    <>
      <Container onClick={() => handleModalOpen()}>
        <AddFolder>폴더 추가</AddFolder>
        <Image src={innerWidth < 768 ? addMobileButton : addButton} alt="폴더 추가 버튼" />
      </Container>
      {isOpen && (
        <ModalPortal>
          <InputModal title="폴더 추가" btn="추가하기" onClickClose={() => handleModalClose()} />
        </ModalPortal>
      )}
    </>
  );
}

export default AddFolderBtn;

const Container = styled.div`
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
    bottom: 101px;
    left: 50%;
    transform: translate(-50%, 0%);
    padding: 8px 24px;
    width: 128px;
    border-radius: 20px;
    background-color: var(--primary-color);
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
