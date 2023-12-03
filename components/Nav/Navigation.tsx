import Avatar from "@/components/Nav/Avatar/Avatar";
import Logo from "@/components/Nav/Avatar/Logo";
import { Background, Nav, StyledLink } from "@/components/Nav/Navigation.styled";
import { useEffect, useRef } from "react";

interface Props {
  id?: number;
  $page?: string;
}

let locate = "/signin";

export default function Navigation({ id, $page = "" }: Props) {
  useEffect(() => {
    const accessToken = sessionStorage.getItem("accessToken");
    if (accessToken) {
      locate = "/folder";
      return;
    }
  }, []);
  return (
    <>
      <Background />
      <Nav $page={$page}>
        <Logo src="/logo.svg" alt="링크브러리 홈화면으로 이동" />
        {$page === "/" ? <StyledLink href={locate}>로그인</StyledLink> : <Avatar id={id} />}
      </Nav>
    </>
  );
}
