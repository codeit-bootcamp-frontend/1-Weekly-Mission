import * as S from "@/components/globalNav/GlobalNav.style";
import { useUser } from "@/utils/AuthProvider";
import Link from "next/link";
import { useRouter } from "next/router";

const GlobalNav = () => {
  const { user } = useUser();
  const { email = "", image_source: profileImageSource = "" } = user || {};
  const { pathname } = useRouter();

  return (
    <S.GlobalNavWrapper $isFolder={pathname.startsWith("/folder")}>
      <S.GlobalNav>
        <Link href="/">
          <S.LogoImage />
        </Link>
        {user ? (
          <Link href="/folder">
            <S.UserInfo>
              <S.ProfileImg src={profileImageSource} />
              <S.UserEmail>{email}</S.UserEmail>
            </S.UserInfo>
          </Link>
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
