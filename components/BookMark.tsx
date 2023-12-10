import { User, folders } from "@/dataType/dataType";
import Image from "next/image";
import styles from "./bookMark.module.css";

interface BookMarkType {
  bookmarkNumber?: folders;
  account: User;
  errorMessage: string | { message: string };
}

const BookMark = ({ bookmarkNumber, account, errorMessage }: BookMarkType) => {
  const { name, image_source: profileImageSource } = account;
  if (!bookmarkNumber) return;
  return (
    <div className={styles.sectionTitleFirst}>
      <div className={styles.sectionTitleInner}>
        <div className={styles.iconWrap}>
          <Image
            className={styles.iconWrapImg}
            fill
            src={profileImageSource ? profileImageSource : ""}
            alt="코드잇아이콘"
          />
        </div>
        <h4 className={styles.sectionTitleInnerH4}>
          {!errorMessage ? `@${name}` : `${errorMessage}`}
        </h4>
        {bookmarkNumber ? (
          <h3 className={styles.sectionTitleInnerH3}>{bookmarkNumber.name}</h3>
        ) : (
          <div>데이터가 없습니다.</div>
        )}
      </div>
    </div>
  );
};

export default BookMark;
