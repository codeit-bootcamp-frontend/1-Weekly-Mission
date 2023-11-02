import styled from "styled-components";

const ModalWrapper = styled.div`
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

const ModalButton = styled.button`
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

const ModalTitle = styled.p`
  color: var(--linkbrary-gray-100, #373740);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const ModalUrl = styled.p`
  color: var(--linkbrary-gray-60, #9fa6b2);
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 157.143% */
`;

export function Modalkebab({ url, title, buttonTitle, color }) {
  return (
    <ModalWrapper>
      <ModalTitle>{title}</ModalTitle>
      <ModalUrl>{url}</ModalUrl>
      <ModalButton color={color}>{buttonTitle}</ModalButton>
    </ModalWrapper>
  );
}

export function ModalLink({ LinkOptions }) {
  return (
    <>
      <ModalWrapper>
        <ModalTitle>{LinkOptions.name}</ModalTitle>
        <ModalUrl>폴더명</ModalUrl>
        <ModalButton color={LinkOptions.color}>
          {LinkOptions.buttonTitle}
        </ModalButton>
      </ModalWrapper>
      ;
    </>
  );
}
