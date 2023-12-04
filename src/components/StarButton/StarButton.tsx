import Image from "next/image";
import Link from "next/link";

import Star from "src/assets/icon/star.svg";
import styles from "src/components/StarButton/StarButton.module.css";

function StarButton() {
  return (
    <Link className={styles.starButton} href="">
      <Image width={30} height={30} src={Star} alt="즐겨찾기 버튼" />
    </Link>
  );
}
export default StarButton;
