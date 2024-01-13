import Logo from "@/components/Nav/Avatar/Logo";
import Profile from "@/components/Nav/Avatar/Profile";
import { Background, Nav } from "@/components/Nav/Navigation.styled";
import { getCookie } from "@/utils/getCookie";
import Link from "next/link";
import { useRouter } from "next/router";
import { memo, useRef } from "react";

export default memo(function Navigation() {
  const router = useRouter();
  const isFolderPage = router.pathname === "/folder";

  const locate = useRef("/signin");
  const accessToken = getCookie("accessToken");
  if (accessToken) {
    locate.current = `/folder`;
  }

  return (
    <>
      <Background />
      <Nav $page={isFolderPage}>
        <Logo src="/logo.svg" alt="링크브러리 홈화면으로 이동" />
        {isFolderPage ? <Profile /> : <Link href={locate.current}>로그인</Link>}
      </Nav>
    </>
  );
});
