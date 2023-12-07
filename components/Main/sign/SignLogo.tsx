import { Signin } from "@/components/Main/sign/Sign.type";
import { Container, StyledImage, StyledLink, Text } from "@/components/Main/sign/SignLogo.styled";
import Link from "next/link";

export default function SignLogo({ signin }: Signin) {
  return (
    <Container>
      <Link href="/">
        <StyledImage width={1} height={1} src="index/logo.svg" alt="선택하면 홈화면으로 연결됩니다" />
      </Link>
      <Text>
        {signin ? "회원이 아니신가요?" : "이미 회원이신가요?"}
        <StyledLink href={signin ? "/signup" : "/signin"}>{signin ? "회원 가입하기" : "로그인하기"}</StyledLink>
      </Text>
    </Container>
  );
}
