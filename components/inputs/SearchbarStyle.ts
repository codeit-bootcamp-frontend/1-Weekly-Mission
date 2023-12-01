import styled from "styled-components";
import SearchIcon from "@/public/assets/Search.svg";
import CloseIcon from "@/public/assets/close.svg";

export const Search = styled.div`
  position: relative;
  max-width: 1060px;
  width: 100%;
  margin: auto;
`;

export const Icon = styled(SearchIcon)`
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translate(-50%, -50%);
`;

export const Input = styled.input`
  padding: 1rem 2rem;
  width: 100%;
  border: none;
  border-radius: 10px;
  background: #f5f5f5;
  line-height: 24px;
  border: 1px solid var(--color-gray-10);
  outline-style: none;

  &:focus {
    border: 1px solid var(--color-primary);
  }
`;

export const Close = styled(CloseIcon)`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(-50%, -50%);
  cursor: pointer;
`;
