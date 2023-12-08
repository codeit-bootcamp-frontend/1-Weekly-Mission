import styled from "styled-components";
import CheckIcon from "public/assets/check.svg";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

export const Description = styled.div`
  width: 100%;
  text-align: center;
`;

export const Info = styled.p`
  margin: 0;
  padding-top: 0.5rem;
  font-size: 0.875rem;
  color: var(--color-gray);
`;

export const Contents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const Title = styled.span`
  color: var(--color-gray-30);
`;

export const IconCheck = styled(CheckIcon)`
  path {
    stroke: white; /* path 요소에 fill 속성 적용 */
  }
`;

export const Options = styled.div<{ $isSelected: boolean }>`
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background: var(--color-primary-varient);
  }

  /* 폴더 선택했을 때 스타일 */
  background: ${({ $isSelected }) => ($isSelected ? "var(--color-primary-varient)" : "")};
  ${Title} {
    color: ${({ $isSelected }) => ($isSelected ? "var(--color-primary)" : "var(--color-gray-30)")};
  }

  ${IconCheck} {
    path {
      stroke: ${({ $isSelected }) => ($isSelected ? "var(--color-primary)" : "")};
    }
  }
`;

export const Option = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const SubTitle = styled.div`
  font-size: 0.875rem;
  color: var(--color-gray);
`;
