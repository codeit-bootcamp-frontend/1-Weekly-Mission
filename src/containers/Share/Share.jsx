import Searchbar from "../../components/Searchbar/Searchbar.jsx";
import CardList from "../../components/Card/CardList.jsx";
import styles from "./Share.module.css";

const Owner = ({ items }) => {
  const { name, owner } = items;

  return (
    <div className={styles.ownerContainer}>
      <div className={styles.ownerInnerContainer}>
        <img
          className={styles.ownerImage}
          src={owner.profileImageSource}
          alt="사용자 이미지"
        />
        <p className={styles.ownerName}>@{owner.name}</p>
        <div>
          <p className={styles.ownerFolderName}>{name}</p>
        </div>
      </div>
    </div>
  );
};

const Share = ({ shareData }) => {
  const { folder } = shareData;
  return (
    <>
      <Owner items={folder} />
      <div className={styles.sharedFrame}>
        <Searchbar />
        <CardList cards={folder?.links} />
      </div>
    </>
  );
};

export default Share;
