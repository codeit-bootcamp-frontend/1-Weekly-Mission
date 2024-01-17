import Image from "next/image";
import Link from "next/link";
import styles from "./SnsSign.module.scss";

function SnsSign({ label = "" }) {
  return (
    <div className={styles["container"]}>
      <div className={styles["text-container"]}>{label}</div>
      <div className={styles["sns-container"]}>
        <button>
          <Link href="https://www.google.com" target="__blank">
            <Image
              src="/icons/google-sign-icon.svg"
              width={42}
              height={42}
              alt="google image"
            />
          </Link>
        </button>

        <button>
          <Link href="https://www.kakaocorp.com/page" target="__blank">
            <Image
              src="/icons/kakao-sign-icon.svg"
              width={42}
              height={42}
              alt="kakao image"
            />
          </Link>
        </button>
      </div>
    </div>
  );
}

export default SnsSign;
