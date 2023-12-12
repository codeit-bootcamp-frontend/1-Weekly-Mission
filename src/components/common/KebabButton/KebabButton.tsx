/*Kebab 컴포넌트:
  Card 컴포넌트 각각에 붙어있는 컴포넌트로, kebab을 누르면 삭제하기, 추가하기 버튼이 있는 메뉴바가 나옴.

  card: 모달을 열 때 어떤 Card 컴포넌트에서 모달을 여는 것인지 파악하기 위한 값
  onClick: 모달을 열게 해주는 함수
  folderList: addLinkModal을 열 때 필요한 folderList 값.
*/

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
