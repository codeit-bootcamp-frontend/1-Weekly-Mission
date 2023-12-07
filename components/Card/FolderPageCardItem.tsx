import { RefObject, useEffect, useRef, useState } from "react";
import styles from "./CardItem.module.css";
import logoImg from "../../assets/images/emptyImg.svg";
import starImg from "../../assets/images/star.svg";
import kebabImg from "../../assets/images/kebab.svg";
import ModalContainer from "../Modal/ModalContainer/ModalContainer";
import DeleteLinkModalContent from "../Modal/DeleteLinkModalContent/DeleteLinkModalContent";
import AddLinkModalContent from "../Modal/AddLinkModalContent/AddLinkModalContent";
import Link from "next/link";
import Image from "next/image";
import { blurDataURL } from "@/utils/utils";

interface Props {
  folderListData: UserFolderData;
  formatTimeDiff: string;
  formattedCreatedAt: string;
  url: string;
  title: string;
  description: string;
  imageSource: string;
}

function FolderPageCardItem({
  folderListData,
  formatTimeDiff,
  formattedCreatedAt,
  url,
  title,
  description,
  imageSource,
}: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpenDeleteLinkModal, setIsOpenDeleteLinkModal] = useState(false);
  const [isOpenAddFolderModal, setIsOpenAddFolderModal] = useState(false);
  const menuRef: RefObject<HTMLDivElement> = useRef(null);

  const handleToggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleOpenDeleteLinkModal = () => {
    setIsOpenDeleteLinkModal(true);
  };

  const handleCloseDeleteLinkModal = () => {
    setIsOpenDeleteLinkModal(false);
  };

  const handleOpenAddFolderModal = () => {
    setIsOpenAddFolderModal(true);
  };

  const handleCloseAddFolderModal = () => {
    setIsOpenAddFolderModal(false);
  };

  const handleClickOutsideMenu = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideMenu);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideMenu);
    };
  }, []);

  return (
    <li className={styles.cardItem}>
      <Link
        className={styles.imgContainer}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          fill
          className={styles.img}
          src={imageSource ? imageSource : logoImg}
          alt={title}
          placeholder="blur"
          blurDataURL={blurDataURL}
        />
      </Link>
      <button className={styles.bookmarkButton}>
        <Image src={starImg} alt="즐겨찾기 이미지" />
      </button>
      <div className={styles.contentContainer}>
        <div className={styles.container}>
          <p className={styles.timeDiff}>{formatTimeDiff}</p>
          <button onClick={handleToggleMenu}>
            <Image src={kebabImg} alt="케밥 이미지" />
          </button>
        </div>
        <Link href={url} target="_blank" rel="noopener noreferrer">
          <p className={styles.description}>
            {title}
            <br />
            {description}
          </p>
        </Link>
        <p className={styles.createdAt}>{formattedCreatedAt}</p>
      </div>
      {isMenuOpen && (
        <div ref={menuRef} className={styles.menu}>
          <button onClick={handleOpenDeleteLinkModal}>삭제하기</button>
          <button onClick={handleOpenAddFolderModal}>폴더에 추가</button>
        </div>
      )}
      {isOpenDeleteLinkModal && (
        <ModalContainer onClose={handleCloseDeleteLinkModal}>
          <DeleteLinkModalContent>{url}</DeleteLinkModalContent>
        </ModalContainer>
      )}
      {isOpenAddFolderModal && (
        <ModalContainer onClose={handleCloseAddFolderModal}>
          <AddLinkModalContent
            inputValue={url}
            folderListData={folderListData}
          />
        </ModalContainer>
      )}
    </li>
  );
}

export default FolderPageCardItem;
