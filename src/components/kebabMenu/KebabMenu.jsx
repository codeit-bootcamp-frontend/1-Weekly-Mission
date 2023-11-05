import { KEBAB_MENUS } from "../../constants/constants";
import * as S from "./KebabMenu.style";
const KebabMenu = ({ isKebabOpen, url, setModalComponent, folderId, folders }) => {
  const handleMenuClick = (e, kebab) => {
    e.stopPropagation();
    const { Modal, modalTitle, buttonText } = kebab;
    setModalComponent(<Modal modalTitle={modalTitle} buttonText={buttonText} modalTarget={url} folders={folders} />);
  };

  return (
    <S.KebabButtonList $isOpen={isKebabOpen}>
      {KEBAB_MENUS.map((kebab) => (
        <li key={folderId + kebab.iconTitle}>
          <S.KebabMenuButton onClick={(e) => handleMenuClick(e, kebab)}>{kebab.iconTitle}</S.KebabMenuButton>
        </li>
      ))}
    </S.KebabButtonList>
  );
};

export default KebabMenu;
