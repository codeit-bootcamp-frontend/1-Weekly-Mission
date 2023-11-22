import { useState } from "react";
import styled from "styled-components";

import shareIcon from "assets/share.svg";
import penIcon from "assets/pen.svg";
import deleteIcon from "assets/delete.svg";

import ModalContainer from "./modal/ModalContainer";
import EditFolder from "./modal/EditFolder";
import DeleteFolder from "./modal/DeleteFolder";
import ShareFolder from "./modal/ShareFolder";
import ModalPortal from "./ModalPortal";

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

  const optionFolder = (currentOption) => {
    switch (currentOption) {
      case "공유":
        return <ShareFolder currentFolderName={selected} />;
      case "이름 변경":
        return <EditFolder currentFolderName={selected} />;
      case "삭제":
        return <DeleteFolder currentFolderName={selected} label="폴더" />;
      default:
        return null;
    }
  };

  return (
    <>
      <Container>
        {actions.map((action, index) => (
          <OptionsContainer key={index} onClick={handleSelectedOption}>
            <img src={action.icon} />
            <Option>{action.name}</Option>
          </OptionsContainer>
        ))}
      </Container>

      {isModalOpen && (
        <ModalPortal>
          <ModalContainer onClose={() => setIsModalOpen(false)}>
            {optionFolder(selectedOption)}
          </ModalContainer>
        </ModalPortal>
      )}
    </>
  );
}
