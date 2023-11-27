import styled from "styled-components";
import closeIcon from "../../../../Assets/_close.png";

export function CloseButton({ onClick }: any) {
  return (
    <>
      <XButton src={closeIcon} alt="닫기 버튼" onClick={onClick} />
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
`;

interface ButtonItem {
  red?: any;
}

export const StyledButton = styled.button<ButtonItem>`
  width: 280px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 20px;
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

export const IconButton = styled.button`
  background: none;
  border: none;
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
  margin-bottom: 24px;
`;

interface WrapperItem {
  isActive: boolean;
  idx?: any;
}

export const FolderItemWrapper = styled.div<WrapperItem>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  background-color: ${({ isActive }) => (isActive ? "var(--bg)" : "#ffffff")};
  border-radius: 8px;
  cursor: pointer;
`;

export const FolderItemContainer = styled.li`
  display: flex;
  align-items: baseline;
  gap: 8px;
`;

interface TitleItem {
  selected: boolean;
}

export const FolderTitle = styled.span<TitleItem>`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 24px;
  color: ${({ selected }) => (selected ? "#6D6AFE" : "#373740")};
`;

export const FolderItemsCount = styled.span`
  color: var(--gray60);
  font-size: 1.4rem;
  font-weight: 400;
`;

export const CheckIcon = styled.img`
  width: 14px;
  height: 14px;
  flex-shrink: 0;
`;
