import Image from "next/image";
import styles from "./ResponsiveImg.module.scss";

export default function ResponsiveImg({ src = "", alt = "" }) {
  return (
    <div className={styles["img-wrapper"]}>
      <Image
        src={src}
        alt={alt}
        width={0}
        height={0}
        priority={true}
        sizes="100vw"
      />
    </div>
  );
}
