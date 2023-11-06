import { useState } from "react";
import "./RenameModal.css";

const RenameModal = ({ currentFolder }) => {
  const [name, setName] = useState(currentFolder.name);

  const handleChange = (e) => {
    setName(e.target.value);
  };
  return (
    <>
      <input type="text" value={name} onChange={handleChange} />
      <button>변경하기</button>
    </>
  );
};

export default RenameModal;
