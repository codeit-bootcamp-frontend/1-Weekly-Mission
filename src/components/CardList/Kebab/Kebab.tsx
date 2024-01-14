import Image from "next/image";
import { useState } from "react";

import styles from "./Kebab.module.scss";

interface KebabProps {
  cardId?: string;
}

function KebabMenu({ cardId }: KebabProps) {
  return (
    <>
      <div className={styles["kebab-menu"]}>
        <button>삭제하기</button>
        <button>폴더에 추가</button>
      </div>
    </>
  );
}

export default function Kebab({ cardId }: KebabProps) {
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
          <Image
            src="/icons/kebab.svg"
            width={21}
            height={17}
            alt="kebab button"
          />
        </button>
        {isMenuOpen && <KebabMenu cardId={cardId} />}
      </div>
    </>
  );
}
