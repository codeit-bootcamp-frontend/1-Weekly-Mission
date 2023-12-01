import logoImg from "../../assets/img/logo.svg";
import style from "./Nav.module.css";
import NavProfile from "../../components/NavProfile/NavProfile";
import { useRouter } from "next/router";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";

export function Nav() {
  const location = useRouter();
  const isFolder = location.pathname === "/folder";
  return (
    <div className={clsx(style.root, { [style.folder]: isFolder })}>
      <Link href="/" passHref>
        <Image className={style.logo} src={logoImg} alt="로고" />
      </Link>
      <NavProfile />
    </div>
  );
}
