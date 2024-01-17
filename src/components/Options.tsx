import { MouseEvent, useState } from "react";
import * as S from "./OptionsStyles";

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
        return <EditFolder currentFolderName={selected} onClose={handleCloseModal} />;
      case "delete":
        return <DeleteFolder selectedItem={selected} onClose={handleCloseModal} label="폴더" />;
      default:
        return null;
    }
  };

  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <S.Container>
        {actions.map((action, index) => (
          <S.OptionsContainer key={index} onClick={handleSelectedOption} id={action.action}>
            <img src={`/assets/${action.icon}.svg`} />
            <S.Option>{action.context}</S.Option>
          </S.OptionsContainer>
        ))}
      </S.Container>

      {isModalOpen && (
        <ModalPortal>
          <ModalContainer onClose={handleCloseModal}>{optionFolder(selectedOption)}</ModalContainer>
        </ModalPortal>
      )}
    </>
  );
}
