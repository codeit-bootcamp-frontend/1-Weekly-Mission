import { Container } from "@/components/Main/sign/SignSns.styled";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function SignSns() {
  const router = useRouter();
  const signin = router.pathname === "/signin";

  return (
    <Container>
      <p>{signin ? "소셜 로그인" : "소셜 계정으로 가입하기"}</p>
      <div>
        <Link href="https://www.google.com" target="_blank">
          <Image width={1} height={1} src="index/sign-google.svg" alt="구글 계정으로 로그인" />
        </Link>
        <Link href="https://www.kakaocorp.com/page/" target="_blank">
          <Image width={1} height={1} src="index/sign-kako.svg" alt="카카오 계정으로 로그인" />
        </Link>
      </div>
    </Container>
  );
}
