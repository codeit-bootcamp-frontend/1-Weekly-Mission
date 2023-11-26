import { ChangeEvent, useState } from 'react';
import { ModalButton, Input } from './ModalStyle';

interface Props {
  currentFolder: {
    name: string;
  };
}

export default function RenameModal({ currentFolder }: Props) {
  const [name, setName] = useState(currentFolder.name);

  const handleChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setName(target.value);
  };
  return (
    <>
      <Input type='text' value={name} onChange={handleChange} />
      <ModalButton type='변경하기'></ModalButton>
    </>
  );
}
