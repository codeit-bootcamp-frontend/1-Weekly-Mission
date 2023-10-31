import styles from './BinderInfo.module.css';

function BinderInfo({ name, owner }) {
  return (
    <header className={styles.root}>
      <div className={styles.container}>
        <div className={styles.ownerImage}>
          <img src={owner.profileImageSource} alt="profile" />
        </div>
        <div className={styles.ownerName}>@{owner.name}</div>
        <h2 className={styles.folderName}>{name}</h2>
      </div>
    </header>
  );
}

export default BinderInfo;
