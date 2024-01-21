/* Card 컴포넌트에 들어갈 케밥 컴포넌트 */

import Image from "next/image";

import useDropdown from "@/hooks/useDropdown";
import LinkAddModal from "@/modals/LinkAddModal/LinkAddModal";
import LinkDeleteModal from "@/modals/LinkDeleteModal/LinkDeleteModal";
import { useModalStore } from "@/store/ModalStore";

import styles from "./Kebab.module.scss";

interface KebabProps {
  cardId: string;
  cardUrl: string;
}

export default function Kebab({ cardId, cardUrl }: KebabProps) {
  const isModalOpen = useModalStore((state) => state.isModalOpen);
  const modalName = useModalStore((state) => state.modalName);
  const showModal = useModalStore((state) => state.showModal);
  const {
    isOpen: isMenuOpen,
    handleOpen: handleMenuOpen,
    handleClose: handleMenuclose,
  } = useDropdown();

  return (
    <>
      {isModalOpen && modalName === "LinkDeleteModal" && (
        <LinkDeleteModal cardId={cardId} cardUrl={cardUrl} />
      )}
      {isModalOpen && modalName === "LinkAddModal" && (
        <LinkAddModal link={cardUrl} />
      )}
      <div className={styles["parent-kebab"]}>
        <button
          className={styles["kebab-button"]}
          onClick={handleMenuOpen}
          onBlur={handleMenuclose}
          type="button"
        >
          <Image
            src="/icons/kebab.svg"
            width={21}
            height={17}
            alt="kebab button"
          />
        </button>
        {isMenuOpen && (
          <>
            <div className={styles["kebab-menu"]}>
              <button onClick={() => showModal("LinkDeleteModal")}>
                삭제하기
              </button>
              <button onClick={() => showModal("LinkAddModal")}>
                폴더에 추가
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
