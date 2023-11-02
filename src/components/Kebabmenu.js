import { useState } from "react";
import { createPortal } from "react-dom";

import ModalContainer from "./modal/ModalContainer";
import AddFolder from "./modal/AddFolder";
import DeleteFolder from "./modal/DeleteFolder";
import PopoverMenu from "./modal/PopoverMenu";

import kebabIcon from "assets/kebab.svg";

export default function KebabMenu({ link }) {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [iseOpenModal, setIsOpenModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleMenuToggle = (e) => {
    e.preventDefault();
    setIsOpenMenu((prev) => !prev);
  };

  const handleModalOpen = (e) => {
    e.preventDefault();
    setIsOpenModal(true);
    setSelectedOption(e.target.id);
  };

  return (
    <>
      <img src={kebabIcon} onClick={handleMenuToggle} alt="memu" />
      {isOpenMenu && <PopoverMenu onClickModal={handleModalOpen} />}

      {iseOpenModal &&
        createPortal(
          <ModalContainer onClose={() => setIsOpenModal(false)}>
            {selectedOption === "addLink" ? (
              <AddFolder />
            ) : (
              <DeleteFolder currentFolderName={link} />
            )}
          </ModalContainer>,
          document.getElementById("portal"),
        )}
    </>
  );
}
