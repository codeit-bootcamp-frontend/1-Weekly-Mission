import styled from "styled-components";
export const FolderName = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.4rem;
`;

export const FolderSelectButton = styled.button`
  display: flex;
  padding: 0.8rem;
  align-items: center;
  gap: 0.8rem;
  width: 28rem;
  cursor: pointer;
  border-radius: 0.8rem;
  background-color: ${({ $isSelect }) => ($isSelect ? "var(--linkbrary-zircon)" : "var(--gray-white)")};

  & ${FolderName} {
    color: ${({ $isSelect }) => ($isSelect ? "var(--linkbrary-primary-color)" : "var(--linkbrary-gray-100)")};
  }
  & img {
    margin-left: auto;
    display: ${({ $isSelect }) => ($isSelect ? "block" : "none")};
  }
`;

export const LinkInfo = styled.p`
  color: var(--linkbrary-gray-60);
  font-size: 1.4rem;
  font-weight: 400;
`;
