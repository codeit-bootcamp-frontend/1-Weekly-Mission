import styles from "styles/home.module.scss";
import classNames from "classnames/bind";
import { Layout } from "@/components/sharing/feature-layout";

const cx = classNames.bind(styles);

export default function Home() {
  return (
    <div>
      <Layout>mainPage</Layout>
    </div>
  );
}
