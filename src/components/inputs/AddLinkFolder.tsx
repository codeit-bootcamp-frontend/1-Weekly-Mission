import { ChangeEvent } from "react";
import styled from "styled-components";

export const Input = styled.input`
  padding: 1rem 2.5rem;
  width: 100%;
  background: var(--color-white);
  border: 1px solid var(--color-primary);
  border-radius: 1rem;
  line-height: 1.5rem;
  outline-style: none;
`;

interface AddLinkInputProps {
  readonly onChangeAddLink: (link: string) => void;
}

export default function AddLinkFolderInput({ onChangeAddLink }: AddLinkInputProps) {
  const handleAddLinkInput = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeAddLink(e.target.value);
  };

  return <Input type="text" placeholder="링크를 추가해 보세요" onChange={handleAddLinkInput} />;
}
