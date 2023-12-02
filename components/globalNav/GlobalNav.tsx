import { useRouter } from "next/router";
import * as S from "@/components/globalNav/GlobalNav.style";
import Link from "next/link";
import { useGetUser } from "@/hooks/useGetUser";

const GlobalNav = () => {
  const { data } = useGetUser();
  const { email = "", profileImageSource = "" } = data || {};
  const { pathname } = useRouter();

  return (
    <S.GlobalNavWrapper $isFolder={pathname.startsWith("/folder")}>
      <S.GlobalNav>
        <Link href="/">
          <S.LogoImage />
        </Link>
        {data ? (
          <Link href="/folder">
            <S.UserInfo>
              <S.ProfileImg src={profileImageSource} />
              <S.UserEmail>{email}</S.UserEmail>
            </S.UserInfo>
          </Link>
        ) : (
          <Link href="/folder">
            <S.LoginButton>로그인</S.LoginButton>
          </Link>
        )}
      </S.GlobalNav>
    </S.GlobalNavWrapper>
  );
};
export default GlobalNav;
