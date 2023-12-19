import Image from "next/image";
import Link from "next/link";
import styles from "./SignPageHeader.module.css"; // 스타일 파일 경로
import logoIcon from "@/assets/images/logo.svg";

interface SignPageHeaderProps {
  description: string;
  href: string;
  linkText: string;
}

const SignPageHeader = ({
  description,
  href,
  linkText,
}: SignPageHeaderProps) => {
  return (
    <div className={styles.headerContainer}>
      <Link href={"/"}>
        <Image src={logoIcon} height={38} alt="로고" />
      </Link>
      <div className={styles.descriptionContainer}>
        <p className={styles.description}>{description}</p>
        <Link className={styles.descriptionLink} href={href}>
          {linkText}
        </Link>
      </div>
    </div>
  );
};

export default SignPageHeader;
