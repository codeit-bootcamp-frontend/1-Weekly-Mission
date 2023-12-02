import Image from "next/image";
import Link from "next/link";
import styles from "./Logo.module.css";

interface Props {
  className?: string;
}

function Logo({ className }: Props) {
  return (
    <Link href="/">
      <h1 className={className}>
        <Image fill className={styles.image} src="/images/photo/logo.png" alt="Linkbrary의 로고" />
      </h1>
    </Link>
  );
}

export default Logo;
