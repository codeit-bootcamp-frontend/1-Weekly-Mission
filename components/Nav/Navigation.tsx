import Avatar from "@/components/Nav/Avatar/Avatar";
import Logo from "@/components/Nav/Avatar/Logo";
import { Background, Nav } from "@/components/Nav/Navigation.styled";
import Link from "next/link";

interface Props {
  id?: number;
  $page?: string;
}

let locate = "/signin";

export default function Navigation({ id, $page = "" }: Props) {
  const accessToken = typeof window !== "undefined" ? sessionStorage.getItem("accessToken") : null;
  if (accessToken) {
    locate = `/folder?a=${accessToken}`;
  }

  const Login = () =>
    $page === "/" ? (
      <Link href={locate} as={locate === "/signin" ? "/signin" : "/folder"}>
        로그인
      </Link>
    ) : (
      <Avatar id={id} />
    );

  return (
    <>
      <Background />
      <Nav $page={$page}>
        <Logo src="/logo.svg" alt="링크브러리 홈화면으로 이동" />
        <Login />
      </Nav>
    </>
  );
}
