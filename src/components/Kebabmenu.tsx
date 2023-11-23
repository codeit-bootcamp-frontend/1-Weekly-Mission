import { MouseEvent, useState } from "react";

import ModalContainer from "./modal/ModalContainer";
import DeleteFolder from "./modal/DeleteFolder";
import PopoverMenu from "./modal/PopoverMenu";

import kebabIcon from "assets/kebab.svg";
import AddLink from "./modal/AddLink";
import ModalPortal from "./ModalPortal";

interface KebabMenuProps {
  link: string;
}

export default function KebabMenu({ link }: KebabMenuProps) {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleMenuToggle = (e: MouseEvent<HTMLImageElement>) => {
    e.preventDefault();
    setIsOpenMenu((prev) => !prev);
  };

  const handleModalOpen = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsOpenModal(true);
    setSelectedOption((e.target as HTMLButtonElement).id);
  };

  return (
    <>
      <img src={kebabIcon} onClick={handleMenuToggle} alt="memu" />
      {isOpenMenu && <PopoverMenu onClickModal={handleModalOpen} />}

      {isOpenModal && (
        <ModalPortal>
          <ModalContainer onClose={() => setIsOpenModal(false)}>
            {selectedOption === "addLink" ? (
              <AddLink link={link} />
            ) : (
              <DeleteFolder currentFolderName={link} label="링크" />
            )}
          </ModalContainer>
        </ModalPortal>
      )}
    </>
  );
}
