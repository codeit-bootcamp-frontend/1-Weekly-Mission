import styled from "styled-components";

export const ModalWrapper = styled.div`
  width: 362px;
  display: flex;
  padding: 32px 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 15px;
  border: 1px solid var(--linkbrary-gray-20, #ccd5e3);
  background: var(--linkbrary-white, #fff);
  z-index: 500;
`;
export const ModalClose = styled.img`
  position: absolute;
  left: 320px;
  top: 16px;
`;
export const ModalInput = styled.input`
  display: flex;
  width: 280px;
  padding: 18px 15px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid var(--linkbrary-primary-color, #6d6afe);
  background: var(--linkbrary-white, #fff);
`;

export const ModalButton = styled.button`
  display: flex;
  width: 280px;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background-color: ${({ color }) =>
    color === "blue"
      ? "var(--linkbrary-primary-color, #6d6afe)"
      : "var(--linkbrary-red, #FF5B56)"};
`;

export const IconBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 32px;
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`;

export const Kakao = styled.img`
  display: flex;
  padding: 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 37.333px;
  background: #fee500;
`;

export const Facebook = styled(Kakao)`
  background: #1877f2;
`;
export const Linkadd = styled(Kakao)`
  background: rgba(157, 157, 157, 0.04);
`;

export const ModalTitle = styled.p`
  color: var(--linkbrary-gray-100, #373740);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const ModalUrl = styled.p`
  color: var(--linkbrary-gray-60, #9fa6b2);
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 157.143% */
`;

export const AddFolderWrapper = styled.div`
  display: flex;
  padding: 32px 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  border: 1px solid var(--linkbrary-gray-20, #ccd5e3);
  background: var(--linkbrary-white, #fff);
  z-index: 500;
  border-radius: 15px;
  cursor: pointer;
`;

export const AddFolderHeader = styled.div`
  display: flex;
  width: 280px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
`;

export const AddFolderTitle = styled.div`
  color: var(--linkbrary-gray-100, #373740);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const AddFolderLink = styled.div`
  color: var(--linkbrary-gray-60, #9fa6b2);
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
`;

export const AddFolderMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;

export const AddFolderSection = styled.div`
  display: flex;
  padding: 8px;
  align-items: flex-start;
  gap: 8px;
  border-radius: 8px;
  background-color: ${({ $isSelected }) =>
    $isSelected ? `var(--linkbrary-bg, #F0F6FF)` : ``};
`;

export const AddFolderButton = styled.button`
  display: flex;
  width: 280px;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: var(
    --gra-purpleblue-to-skyblue,
    linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)
  );
`;

export const AddFolderName = styled.span`
  color: var(--linkbrary-gray-100, #373740);

  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

export const AddFolderCount = styled.span`
  color: var(--linkbrary-gray-60, #9fa6b2);

  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const CheckIcon = styled.img`
  width: 14px;
  height: 14px;
  flex-shrink: 0;
`;
