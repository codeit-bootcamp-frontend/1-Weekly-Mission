import styled from "styled-components";
import closeIcon from "Assets/_close.png";

export function CloseButton() {
  return (
    <>
      <XButton src={closeIcon} alt="닫기 버튼" />
    </>
  );
}

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 35px 40px;
  position: relative;
  border-radius: 15px;
  border: 1px solid var(--gray20);
  background-color: var(--white);
`;

const XButton = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  right: 16px;
  top: 16px;
  flex-shrink: 0;
  cursor: pointer;
`;

export const TitleWrapper = styled.div`
  width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;
`;

export const ModalTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: var(--gray100);
`;

export const ModalContents = styled.div`
  color: var(--gray60);
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 22px;
  margin-top: 8px;
`;

export const StyledButton = styled.button`
  width: 280px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 20px;
  margin-top: 24px;
  color: var(--white);
  border-radius: 8px;
  border: none;
  background: ${({ red }) => (red ? "var(--red)" : "var(--gradient-blue)")};
  font-size: 1.6rem;
  cursor: pointer;
`;

export const ModalInput = styled.input`
  width: 280px;
  padding: 18px 15px;
  margin-bottom: 15px;
  background-color: #fff;
  color: #000;
  border: 1px solid var(--gray20);
  border-radius: 8px;

  &:focus {
    outline: none;
    border: 1px solid var(--primary);
  }

  &::placeholder {
    color: var(--gray60);
    font-size: 16px;
    font-weight: 400;
    line-height: 2.4rem;
  }
`;
export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SNSIcon = styled.img`
  width: 42px;
  height: 42px;
  cursor: pointer;
`;

export const IconName = styled.div`
  color: #373740;
  text-align: center;
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 1.5rem;
`;

export const FolderListWrapper = styled.ul`
  width: 280px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const FolderItemContainer = styled.li`
  display: flex;
  align-items: baseline;
  padding: 8px;
  gap: 8px;
`;

export const FolderTitle = styled.span`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 24px;
`;

export const FolderItemsCount = styled.span`
  color: var(--gray60);
  font-size: 1.4rem;
  font-weight: 400;
`;
