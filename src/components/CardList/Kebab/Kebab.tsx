import Image from "next/image";
import { useState } from "react";

import styles from "./Kebab.module.scss";
import LinkDeleteModal from "@/modals/LinkDeleteModal/LinkDeleteModal";

interface KebabProps {
  cardId: string;
  cardUrl: string;
}

function KebabMenu({ cardId, cardUrl }: KebabProps) {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setTimeout(() => setIsOpen(false), 200);
  };
  return (
    <>
      {isOpen && (
        <LinkDeleteModal
          cardId={cardId}
          cardUrl={cardUrl}
          onBlur={closeModal}
        />
      )}
      <div className={styles["kebab-menu"]}>
        <button onClick={openModal}>삭제하기</button>
        <button>폴더에 추가</button>
      </div>
    </>
  );
}

export default function Kebab({ cardId, cardUrl }: KebabProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className={styles["parent-kebab"]}>
        <button
          className={styles["kebab-button"]}
          onClick={handleMenuOpen}
          type="button"
        >
          <Image
            src="/icons/kebab.svg"
            width={21}
            height={17}
            alt="kebab button"
          />
        </button>
        {isMenuOpen && <KebabMenu cardId={cardId} cardUrl={cardUrl} />}
      </div>
    </>
  );
}
