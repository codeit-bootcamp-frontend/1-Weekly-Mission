import { ChangeEvent } from "react";
import { AddLinkInput } from "./InputsStyles";

interface AddLinkInputProps {
  readonly onChangeAddLink: (link: string) => void;
}

export default function AddLinkFolderInput({ onChangeAddLink }: AddLinkInputProps) {
  const handleAddLinkInput = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeAddLink(e.target.value);
  };

  return (
    <AddLinkInput type="text" placeholder="링크를 추가해 보세요" onChange={handleAddLinkInput} />
  );
}
