import { useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

import shareIcon from "assets/share.svg";
import penIcon from "assets/pen.svg";
import deleteIcon from "assets/delete.svg";

import ModalContainer from "./modal/ModalContainer";
import EditFolder from "./modal/EditFolder";
import DeleteFolder from "./modal/DeleteFolder";
import ShareFolder from "./modal/ShareFolder";

const Container = styled.ul`
  display: flex;
  gap: 12px;
`;

const OptionsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 4px;
  cursor: pointer;
`;

const Option = styled.button`
  padding: 0;
  background: none;
  border: none;
  font-size: 0.875rem;
  color: #9fa6b2;
`;

const actions = [
  { name: "공유", icon: shareIcon },
  { name: "이름 변경", icon: penIcon },
  { name: "삭제", icon: deleteIcon },
];

export default function Options({ selected }) {
  const [selectedOption, setSelectedOption] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSelectedOption = (e) => {
    setIsModalOpen(true);
    setSelectedOption(e.currentTarget.innerText);
  };

  return (
    <>
      {isModalOpen &&
        createPortal(
          <ModalContainer onClose={() => setIsModalOpen(false)}>
            {selectedOption === "공유" && <ShareFolder currentFolderName={selected} />}
            {selectedOption === "이름 변경" && <EditFolder currentFolderName={selected} />}
            {selectedOption === "삭제" && (
              <DeleteFolder currentFolderName={selected} label="폴더" />
            )}
          </ModalContainer>,
          document.getElementById("portal"),
        )}

      <Container>
        {actions.map((action, index) => (
          <OptionsContainer key={index} onClick={handleSelectedOption}>
            <img src={action.icon} />
            <Option>{action.name}</Option>
          </OptionsContainer>
        ))}
      </Container>
    </>
  );
}
