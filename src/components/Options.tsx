import { MouseEvent, useState } from "react";
import styled from "styled-components";

import ModalContainer from "./modal/ModalContainer";
import EditFolder from "./modal/EditFolder";
import ShareFolder from "./modal/ShareFolder";
import ModalPortal from "./ModalPortal";
import DeleteFolder from "./modal/DeleteFolder";

const actions = [
  { context: "공유", action: "share", icon: "share" },
  { context: "이름 변경", action: "edit", icon: "pen" },
  { context: "삭제", action: "delete", icon: "delete" },
];

interface OptionsProps {
  selected: string;
}

export default function Options({ selected }: OptionsProps) {
  const [selectedOption, setSelectedOption] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSelectedOption = (e: MouseEvent<HTMLDivElement>) => {
    setIsModalOpen(true);
    setSelectedOption(e.currentTarget.id);
  };

  const optionFolder = (currentOption: string) => {
    switch (currentOption) {
      case "share":
        return <ShareFolder currentFolderName={selected} />;
      case "edit":
        return <EditFolder currentFolderName={selected} />;
      case "delete":
        return <DeleteFolder currentFolderName={selected} label="폴더" />;
      default:
        return null;
    }
  };

  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <Container>
        {actions.map((action, index) => (
          <OptionsContainer key={index} onClick={handleSelectedOption} id={action.action}>
            <img src={`/assets/${action.icon}.svg`} />
            <Option>{action.context}</Option>
          </OptionsContainer>
        ))}
      </Container>

      {isModalOpen && (
        <ModalPortal>
          <ModalContainer onClose={handleCloseModal}>{optionFolder(selectedOption)}</ModalContainer>
        </ModalPortal>
      )}
    </>
  );
}

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
