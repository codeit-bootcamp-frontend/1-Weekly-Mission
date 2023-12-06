import Link from "next/link";
import Image from "next/image";
import logoImg from "../../assets/img/logo.svg";
import style from "./SignHeader.module.css";

interface SignHeader {
  message: string;
  href: string;
  linkMessage: string;
}
const SignHeader = ({ message, href, linkMessage }: SignHeader) => {
  return (
    <div className={style.root}>
      <Link href="/">
        <Image src={logoImg} alt="logo image" className={style.logo} />
      </Link>
      <p className={style.phrase}>
        {message}
        <Link className={style.link} href={href}>
          {linkMessage}
        </Link>
      </p>
    </div>
  );
};

export default SignHeader;
