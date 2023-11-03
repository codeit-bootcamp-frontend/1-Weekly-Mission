import { useState } from 'react';
import { ModalButton, Input } from './ModalStyle';

export default function Rename({ currentFolder }) {
  const [name, setName] = useState(currentFolder.name);

  const handleChange = (e) => {
    setName(e.target.value);
  };
  return (
    <>
      <Input type='text' value={name} onChange={handleChange} />
      <ModalButton type='변경하기'></ModalButton>
    </>
  );
}
