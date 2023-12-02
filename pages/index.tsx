import Image from "next/image";
import styles from "./index.module.css";
import landingGif from "@/public/images/landing.gif";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Image src={landingGif} alt="랜딩 움짤" />
      <Link href={"/folder"} className="button button--piyo">
        <button className={styles.button}>FolderPage로 이동하기! 🚀</button>
      </Link>
    </div>
  );
}
