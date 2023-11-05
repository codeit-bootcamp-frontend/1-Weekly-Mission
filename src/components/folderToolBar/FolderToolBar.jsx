import React from "react";
import * as S from "./FolderToolBar.style";
import { FOLDER_MANAGE_MENUS } from "../../constants/constants";

const FolderToolbar = ({ folderName, setModalComponent }) => {
  const handleMenuClick = (e, menu) => {
    e.stopPropagation();
    const { Modal, modalTitle, buttonText } = menu;
    setModalComponent(<Modal modalTitle={modalTitle} buttonText={buttonText} modalTarget={folderName} />);
  };

  return (
    <S.ToolBarWrap>
      <S.FolderName>{folderName || "전체"}</S.FolderName>
      <S.ManageButtonWrap>
        {folderName &&
          FOLDER_MANAGE_MENUS.map((menu, i) => (
            <li key={menu.iconTitle}>
              <S.ManageButton onClick={(e) => handleMenuClick(e, menu)}>
                {menu.title}
                <img src={menu.imgSrc} alt={menu.alt} />
              </S.ManageButton>
            </li>
          ))}
      </S.ManageButtonWrap>
    </S.ToolBarWrap>
  );
};

export default FolderToolbar;
