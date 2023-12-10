import Avatar from "@/components/Nav/Avatar/Avatar";
import Logo from "@/components/Nav/Avatar/Logo";
import { Background, Nav } from "@/components/Nav/Navigation.styled";
import Link from "next/link";
import { memo, useRef } from "react";

interface Props {
  id?: number;
  $page?: string;
}

export default memo(function Navigation({ id, $page = "" }: Props) {
  const locate = useRef("/signin");
  const accessToken = typeof window !== "undefined" ? sessionStorage.getItem("accessToken") : null;
  if (accessToken) {
    locate.current = `/folder`;
  }

  const Login = () => ($page === "/" ? <Link href={locate.current}>로그인</Link> : <Avatar id={id} />);

  return (
    <>
      <Background />
      <Nav $page={$page}>
        <Logo src="/logo.svg" alt="링크브러리 홈화면으로 이동" />
        <Login />
      </Nav>
    </>
  );
});
