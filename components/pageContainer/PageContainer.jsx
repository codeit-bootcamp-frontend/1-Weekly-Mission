import { useRouter } from "next/router";
import styles from "./PageContainer.module.scss";

export default function PageContainer({ ...props }) {
  const router = useRouter();
  const isFolderPage = router.pathname.includes("folder");
  const isHeaderFixed = !isFolderPage;
  const pageContainerClassNames = isHeaderFixed
    ? `${styles["page__container"]} ${styles["fixed"]}`
    : styles["page__container"];

  return <div className={pageContainerClassNames} {...props} />;
}
