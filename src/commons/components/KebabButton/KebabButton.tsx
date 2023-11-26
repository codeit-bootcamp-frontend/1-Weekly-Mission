import { useState } from "react";
import styles from "./KebabButton.module.scss";
import { ReactComponent as KebabIcon } from "src/assets/icons/kebab.svg";
import { CardProps, ModalInterface } from "src/types";
import DeleteCardModal from "src/commons/modals/DeleteCardModal/DeleteCardModal";
import AddCardModal from "src/commons/modals/AddCardModal/AddCardModal";

interface Props extends CardProps {
  onClick: (m: ModalInterface) => void;
}

function KebabMenu({ card, onClick }: Props) {
  const handleKebabClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if ((e.target as HTMLButtonElement).id === "deleteCardButton") {
      const newModal: ModalInterface = {
        component: <DeleteCardModal card={card} />,
        show: true,
      };
      onClick(newModal);
    }
    if ((e.target as HTMLButtonElement).id === "addCardButton") {
      const newModal: ModalInterface = {
        component: <AddCardModal card={card} />,
        show: true,
      };
      onClick(newModal);
    } else {
      return;
    }
  };

  return (
    <>
      <div className={styles["kebab-menu"]}>
        <button id="deleteCardButton" onClick={handleKebabClick} type="button">
          삭제하기
        </button>
        <button id="addCardButton" onClick={handleKebabClick} type="button">
          폴더에 추가
        </button>
      </div>
    </>
  );
}

function KebabButton({ card, onClick }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleMenuClose = () => {
    setTimeout(() => {
      setIsMenuOpen(false);
    }, 100);
  };

  return (
    <>
      <div className={styles["parent-kebab"]}>
        <button
          className={styles["kebab-button"]}
          onClick={handleMenuOpen}
          onBlur={handleMenuClose}
          type="button"
        >
          <KebabIcon />
        </button>
        {isMenuOpen && <KebabMenu onClick={onClick} card={card} />}
      </div>
    </>
  );
}

export default KebabButton;
