import Link from "next/link";
import Image from "next/image";
import googleIcon from "@/src/assets/img/google.png";
import kakaoIcon from "@/src/assets/img/modal-kakao.svg";

const SocialSign = ({ message }: { message: string }) => {
  return (
    <>
      <p>{message}</p>
      <div>
        <Link href="https://www.google.com/">
          <Image src={googleIcon} alt="" />
        </Link>
        <Link href="https://www.kakaocorp.com/page/">
          <Image src={kakaoIcon} alt="" />
        </Link>
      </div>
    </>
  );
};

export default SocialSign;
