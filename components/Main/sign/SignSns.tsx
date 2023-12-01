import { Container } from "@/components/Main/sign/SignSns.styled";
import Image from "next/image";
import Link from "next/link";

interface ISignSns {
  signin: boolean;
}

export default function SignSns({ signin }: ISignSns) {
  return (
    <Container>
      <p>{signin ? "소셜 로그인" : "소셜 계정으로 가입하기"}</p>
      <div>
        <Link href="https://www.google.com" target="_blank">
          <Image width={1} height={1} className="form__sns-img" src="index/sign-google.svg" alt="구글 계정으로 로그인" />
        </Link>
        <Link href="https://www.kakaocorp.com/page/" target="_blank">
          <Image width={1} height={1} className="form__sns-img" src="index/sign-kako.svg" alt="카카오 계정으로 로그인" />
        </Link>
      </div>
    </Container>
  );
}
