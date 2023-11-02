import { useState } from "react";
import { createPortal } from "react-dom";

import ModalContainer from "./modal/ModalContainer";
import DeleteFolder from "./modal/DeleteFolder";
import PopoverMenu from "./modal/PopoverMenu";

import kebabIcon from "assets/kebab.svg";
import AddLink from "./modal/AddLink";

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
              <AddLink link={link} />
            ) : (
              <DeleteFolder currentFolderName={link} label="링크" />
            )}
          </ModalContainer>,
          document.getElementById("portal"),
        )}
    </>
  );
}
