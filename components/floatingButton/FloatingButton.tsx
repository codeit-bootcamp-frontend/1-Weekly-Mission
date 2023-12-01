import { ReactNode } from "react";
import styles from "./floatingButton.module.css";
import Image from "next/image";

interface FloatingButtonProps {
  children: ReactNode;
  iconSrc: string;
}

export default function FloatingButton({
  children,
  iconSrc,
}: FloatingButtonProps) {
  return (
    <button type="button" className={styles.floatingButton}>
      <div className={styles.floatingButtonBox}>
        <p>{children}</p>
        <Image src={iconSrc} alt="floating-icon" width={24} height={24} />
      </div>
    </button>
  );
}
