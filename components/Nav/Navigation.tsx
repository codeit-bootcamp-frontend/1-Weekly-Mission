import Avatar from "@/components/Nav/Avatar/Avatar";
import Logo from "@/components/Nav/Avatar/Logo";
import { Nav, StyledLink } from "@/components/Nav/Navigation.styled";
import { useEffect, useRef } from "react";

interface Props {
  id?: number;
  $page?: string;
}

export default function Navigation({ id, $page = "" }: Props) {
  const locate = useRef("");

  useEffect(() => {
    const accessToken = sessionStorage.getItem("accessToken");
    if (accessToken) {
      locate.current = "/folder";
      return;
    }
    locate.current = "/signin";
    return;
  }, []);
  return (
    <>
      {/* <Background /> */}
      <Nav $page={$page}>
        <Logo src="/logo.svg" alt="링크브러리 홈화면으로 이동" />
        {$page === "/" ? <StyledLink href={locate.current}>로그인</StyledLink> : <Avatar id={id} />}
      </Nav>
    </>
  );
}
