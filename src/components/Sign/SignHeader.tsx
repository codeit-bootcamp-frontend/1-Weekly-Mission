import Link from "next/link";
import Image from "next/image";
import logoImg from "../../assets/img/logo.svg";

const SignHeader = ({type} :{type : string}) => {
  return (
    <>
      <Link href="/">
        <Image src={logoImg} alt="logo image" />
      </Link>
      {type === "signin" && <p>회원이 아니신가요?<Link href="/signup">회원 가입하기</Link></p>}
      {type === "signup" && <p>이미 회원이신가요?<Link href="/signin" >로그인 하기</Link></p>}
    </>
  );
};

export default SignHeader;
