import styled from "styled-components";

export const FolderContainer = styled.div<{ $active: boolean }>`
  display: flex;
  gap: 0.8rem;
  padding: 0.8rem;
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
  align-items: center;
  border-radius: ${(props) => (props.$active ? "0.8rem" : "0")};
  background: ${(props) => (props.$active ? "#f0f6ff" : "#fff")};

  .title {
    color: ${(props) => (props.$active ? "#6D6AFE" : "var(--gray100)")};
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.4rem;
  }

  .linkNum {
    color: var(--gray60);
    font-size: 1.4rem;
    font-weight: 400;
  }

  .checkIcon {
    margin-left: auto;
    display: ${(props) => (props.$active ? "flex" : "none")};
  }
`;
