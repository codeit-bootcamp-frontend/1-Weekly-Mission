import { useRouter } from "next/router";
import styles from "./ContentContainer.module.scss";

export default function ContentContainer({ ...props }) {
  const router = useRouter();
  const isFolderPage = router.pathname.includes("folder");
  const isHeaderFixed = !isFolderPage;
  const contentContainerClassNames = isHeaderFixed
    ? `${styles["content__container"]} ${styles["fixed"]}`
    : styles["content__container"];

  return <div className={contentContainerClassNames} {...props} />;
}
