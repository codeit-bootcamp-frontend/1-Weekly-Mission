import styled from 'styled-components';

export const ModalBackground = styled.div`
  position: fixed;
  z-index: 3;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModlaWrapper = styled.div`
  z-index: 2;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-flex;
  padding: 32px 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  border-radius: 15px;
  border: 1px solid #ccd5e3;
  background: #fff;
`;

export const ModalDeleteHeader = styled.div`
  display: flex;
  width: 280px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
`;

export const ModalHeader = styled.div`
  color: #373740;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const ModalLinkUrl = styled.div`
  color: #9fa6b2;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
`;

export const ModalMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
`;

export const ModalButton = styled.button`
  border: none;
  display: flex;
  width: 280px;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: ${({ $color }) =>
    $color === 'blue'
      ? 'linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)'
      : '#ff5b56'};
  color: #f5f5f5;
  font-weight: 600;
`;

export const CloseImg = styled.img`
  cursor: pointer;
  position: absolute;
  top: 16px;
  right: 16px;
`;

export const ModalInput = styled.input`
  outline: none;
  display: flex;
  width: 280px;
  padding: 18px 15px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #6d6afe;
  background: #fff;
`;

export const ModalShareWrapper = styled.div`
  display: flex;
  width: 280px;
  align-items: flex-start;
  justify-content: space-around;
  gap: 15px;
`;

export const ModalShareButton = styled.div`
  display: flex;
  border: none;
  cursor: pointer;
  background-color: white;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`;
export const ModalShareName = styled.div`
  color: #373740;
  text-align: center;
  font-family: Inter;
  font-size: 13px;
  font-weight: 400;
  line-height: 15px;
`;

export const ModalFolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;
export const ModalLinkCheck = styled.div`
  display: none;
`;

export const ModalFolderDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #373740;
  font-weight: 400;
  line-height: 24px;
`;
export const ModalFolderWrapper = styled.div`
  display: flex;
  padding: 8px;
  align-items: flex-start;
  gap: 8px;
  width: 264px;
  justify-content: space-between;
  align-items: center;

  &:hover {
    border-radius: 8px;
    background: #f0f6ff;
  }
  &:hover ${ModalLinkCheck} {
    display: block;
  }
  &:hover ${ModalFolderDiv} {
    color: #6d6afe;
  }
`;

export const ModalDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ModalLinkCnt = styled.div`
  color: #9fa6b2;
  font-size: 14px;
  font-weight: 400;
`;
