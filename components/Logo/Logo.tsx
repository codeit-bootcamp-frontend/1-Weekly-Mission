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
        <Image width={133} height={24} className={styles.image} src="/images/logo.png" alt="Linkbrary의 로고" />
      </h1>
    </Link>
  );
}

export default Logo;
