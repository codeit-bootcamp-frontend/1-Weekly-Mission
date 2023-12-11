import facebookImg from "@/public/img/png/Vector-1.png";
import twitterImg from "@/public/img/png/Vector-2.png";
import youtubeImg from "@/public/img/png/Vector-3.png";
import melonImg from "@/public/img/png/Vector-4.png";
import Image from "next/image";
import styles from "./footer.module.css";
import { isblock } from "@/utils/location";
import Link from "next/link";

const SNS = [
  {
    title: "페이스북",
    image: facebookImg,
    link: "https://www.facebook.com/",
  },
  {
    title: "트위터",
    image: twitterImg,
    link: "https://twitter.com/",
  },
  {
    title: "유튜브",
    image: youtubeImg,
    link: "https://www.youtube.com/",
  },
  {
    title: "멜론",
    image: melonImg,
    link: "https://www.melon.com/",
  },
];

const Footer = () => {
  return (
    <footer
      className={styles.footer}
      style={{ display: isblock() ? "block" : "none" }}
    >
      <div className={styles.footerConnect}>
        <div className={styles.footerConnectYear}>codeit - 2023</div>
        <ul className={styles.footerConnectFaq}>
          <li>
            <Link className={styles.footerConnectFaqLiA} href="#none">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link className={styles.footerConnectFaqLiA} href="#none">
              FAQ
            </Link>
          </li>
        </ul>
        <ul className={styles.footerConnectSns}>
          {SNS.map((list, index) => {
            return (
              <li className={styles.footerConnectSnsLi} key={index}>
                <Link href={list.link} target="blank">
                  <Image
                    className={styles.footerConnectSnsLiImg}
                    src={list.image}
                    alt={list.title}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
