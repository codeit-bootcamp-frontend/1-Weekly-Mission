import Link from "next/link";
import Image from "next/image";
import logoImg from "@/public/Linkbrary.svg";

interface Props {
  height?: string;
}

const Logo = ({ height }: Props) => {
  return (
    <Link href="/">
      <Image src={logoImg} alt="Linkbrary 로고" height={Number(height)} />
    </Link>
  );
};

export default Logo;
