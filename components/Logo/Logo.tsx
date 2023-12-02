import Image from "next/image";
import Link from "next/link";
import styles from "./Logo.module.css";

interface Props {
  className?: string;
}

function Logo({ className }: Props) {
  return (
    <h1 className={className}>
      <Link href="/">
        <div>
          <Image fill className={styles.image} src="/images/photo/logo.png" alt="Linkbrary의 로고" />
        </div>
      </Link>
    </h1>
  );
}

export default Logo;
