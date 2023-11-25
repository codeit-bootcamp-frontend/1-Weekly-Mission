import { useState } from "react";
import styles from "./KebabButton.module.scss";
import { ReactComponent as KebabIcon } from "src/assets/images/kebab.svg";
import { CardInterface } from "src/types";

interface CardProps {
  card: CardInterface;
}

function KebabMenu({ card }: CardProps) {
  return (
    <div className={styles["kebab-menu"]}>
      <button id="delete-card-button">삭제하기</button>
      <button id="add-card-button">폴더에 추가</button>
    </div>
  );
}

function KebabButton({ card }: CardProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuOpen = () => {
    setIsMenuOpen(true);
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
        >
          <KebabIcon />
        </button>
        {isMenuOpen && <KebabMenu card={card} />}
      </div>
    </>
  );
}

export default KebabButton;
