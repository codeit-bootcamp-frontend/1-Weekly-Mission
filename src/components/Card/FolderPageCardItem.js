import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./CardItem.module.css";
import logoImg from "../../assets/emptyImg.svg";
import starImg from "../../assets/star.svg";
import kebabImg from "../../assets/kebab.svg";
import ModalContainer from "../Modal/ModalContainer";
import DeleteLinkModal from "../Modal/DeleteLinkModal";
import AddLinkModal from "../Modal/AddLinkModal";

function FolderPageCardItem({
  folderListData,
  formatTimeDiff,
  formattedCreatedAt,
  url,
  title,
  description,
  imageSource,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpenDeleteLinkModal, setIsOpenDeleteLinkModal] = useState(false);
  const [isOpenAddFolderModal, setIsOpenAddFolderModal] = useState(false);

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

  return (
    <div className={styles.cardItem}>
      <Link className={styles.imgContainer} to={url} target="_blank" rel="noopener noreferrer">
        <img className={styles.img} src={imageSource ? imageSource : logoImg} alt={title} />
      </Link>
      <button className={styles.bookmarkButton}>
        <img src={starImg} alt="즐겨찾기 이미지" />
      </button>
      <div className={styles.contentContainer}>
        <div className={styles.container}>
          <p className={styles.timeDiff}>{formatTimeDiff}</p>
          <button onClick={handleToggleMenu}>
            <img src={kebabImg} alt="케밥 이미지" />
          </button>
          {isMenuOpen && (
            <div className={styles.menu}>
              <button onClick={handleOpenDeleteLinkModal}>삭제하기</button>
              <button onClick={handleOpenAddFolderModal}>폴더에 추가</button>
            </div>
          )}
          {isOpenDeleteLinkModal && (
            <ModalContainer onClose={handleCloseDeleteLinkModal}>
              <DeleteLinkModal>{url}</DeleteLinkModal>
            </ModalContainer>
          )}
          {isOpenAddFolderModal && (
            <ModalContainer onClose={handleCloseAddFolderModal}>
              <AddLinkModal inputValue={url} folderListData={folderListData} />
            </ModalContainer>
          )}
        </div>
        <p className={styles.description}>
          {title}
          <br />
          {description}
        </p>
        <p className={styles.createdAt}>{formattedCreatedAt}</p>
      </div>
    </div>
  );
}

export default FolderPageCardItem;
