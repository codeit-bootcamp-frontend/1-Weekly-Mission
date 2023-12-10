import Link from "next/link";
import { useRouter } from "next/router";
import styles from "src/components/SignText/SingText.module.css";

interface SignTextProps {
  content: string;
  link: string;
}

function SignText({ content, link }: SignTextProps) {
  const router = useRouter();
  return (
    <div className={styles.wrapper}>
      {content}{" "}
      <Link
        href={router.asPath === "/signin" ? "/signup" : "/signin"}
        className={styles.link}
      >
        {link}
      </Link>
    </div>
  );
}

export default SignText;
