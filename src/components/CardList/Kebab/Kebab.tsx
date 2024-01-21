import Image from "next/image";
import { useState } from "react";

import LinkAddModal from "@/modals/LinkAddModal/LinkAddModal";
import LinkDeleteModal from "@/modals/LinkDeleteModal/LinkDeleteModal";
import { useModalStore } from "@/store/ModalStore";

import styles from "./Kebab.module.scss";

interface KebabProps {
  cardId: string;
  cardUrl: string;
}

function KebabMenu({ cardId, cardUrl }: KebabProps) {
  const isModalOpen = useModalStore((state) => state.isModalOpen);
  const modalName = useModalStore((state) => state.modalName);
  const showModal = useModalStore((state) => state.showModal);

  return (
    <>
      {isModalOpen && modalName === "LinkDeleteModal" && (
        <LinkDeleteModal cardId={cardId} cardUrl={cardUrl} />
      )}
      {isModalOpen && modalName === "LinkAddModal" && (
        <LinkAddModal link={cardUrl} />
      )}
      <div className={styles["kebab-menu"]}>
        <button onClick={() => showModal("LinkDeleteModal")}>삭제하기</button>
        <button onClick={() => showModal("LinkAddModal")}>폴더에 추가</button>
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
