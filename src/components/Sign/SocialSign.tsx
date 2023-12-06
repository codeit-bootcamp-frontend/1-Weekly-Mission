import Link from "next/link";
import Image from "next/image";
import googleIcon from "@/src/assets/img/google.png";
import kakaoIcon from "@/src/assets/img/modal-kakao.svg";
import style from "./SocialSign.module.css";

const SocialSign = ({ message }: { message: string }) => {
  return (
    <div className={style.root}>
      <p>{message}</p>
      <div className={style.links}>
        <Link href="https://www.google.com/">
          <Image className={style.img} src={googleIcon} alt="" />
        </Link>
        <Link href="https://www.kakaocorp.com/page/">
          <Image src={kakaoIcon} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default SocialSign;
