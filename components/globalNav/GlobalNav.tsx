import * as S from "@/components/globalNav/GlobalNav.style";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";

const GlobalNav = () => {
  const { data: session, status } = useSession();

  const { pathname } = useRouter();
  return (
    <S.GlobalNavWrapper $isFolder={pathname.startsWith("/folder")}>
      <S.GlobalNav>
        <Link href="/">
          <S.LogoImage />
        </Link>
        {status === "authenticated" ? (
          <button onClick={() => signOut()}>
            <S.UserInfo>
              <S.ProfileImg src={session.user.profileImage} />
              <S.UserEmail>{session.user.name}</S.UserEmail>
            </S.UserInfo>
          </button>
        ) : (
          <Link href="/user/signin">
            <S.LoginButton>로그인</S.LoginButton>
          </Link>
        )}
      </S.GlobalNav>
    </S.GlobalNavWrapper>
  );
};
export default GlobalNav;
