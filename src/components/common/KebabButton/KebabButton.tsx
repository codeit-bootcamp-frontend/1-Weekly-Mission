import { useState } from "react";
import Image from "next/image";
import { DeleteCardModal, AddCardModal } from "@/components/modals";
import { CardInterface, FolderInterface, ModalInterface } from "@/types";
import styles from "./KebabButton.module.scss";
interface Props {
  card: CardInterface;
  onClick: (m: ModalInterface) => void;
  folderList?: FolderInterface[];
}

function KebabMenu({ card, folderList, onClick }: Props) {
  const handleKebabClick = (id: string) => {
    if (id === "deleteCardButton") {
      const newModal = {
        component: <DeleteCardModal card={card} />,
        show: true,
      };
      onClick(newModal);
    }
    if (id === "addCardButton") {
      const newModal = {
        component: <AddCardModal folderList={folderList} card={card} />,
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
        <button
          id="deleteCardButton"
          onClick={() => {
            handleKebabClick("deleteCardButton");
          }}
          type="button"
        >
          삭제하기
        </button>
        <button
          id="addCardButton"
          onClick={() => {
            handleKebabClick("addCardButton");
          }}
          type="button"
        >
          폴더에 추가
        </button>
      </div>
    </>
  );
}

function KebabButton({ card, folderList, onClick }: Props) {
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
            src="icons/kebab.svg"
            width={21}
            height={17}
            alt="kebab button"
          />
        </button>
        {isMenuOpen && (
          <KebabMenu folderList={folderList} onClick={onClick} card={card} />
        )}
      </div>
    </>
  );
}

export default KebabButton;
