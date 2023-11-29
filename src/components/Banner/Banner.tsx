import Image from "next/image";
import styles from "src/components/Banner/Banner.module.css";

function Intro({ folder }: FolderProp) {
  const { owner, name: folderName } = folder;
  if (!owner) return;

  const { id, name: userName, profileImageSource } = owner;

  return (
    <div className={styles.introSection}>
      {id !== undefined ? (
        <>
          <Image
            width={60}
            height={60}
            src={profileImageSource}
            alt="프로필 이미지"
          />
          <p className={styles.name}>@{userName}</p>
          <p className={styles.bookmark}>{folderName}</p>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Intro;
