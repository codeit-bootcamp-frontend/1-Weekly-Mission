import { Link, useLocation } from "react-router-dom";
import { useUser } from "../../utils/UserContext";
import * as S from "./GlobalNav.style.js";

const GlobalNav = () => {
  const { user: userInfo } = useUser() ?? {};
  const { email, profileImageSource, image_source } = userInfo || {};
  const { pathname } = useLocation();

  return (
    <S.GlobalNavWrapper $isFolder={pathname.startsWith("/folder")}>
      <S.GlobalNav>
        <Link to="/">
          <S.LogoImage alt="Linkbrary 로고" />
        </Link>
        {userInfo ? (
          <Link to="/folder">
            <S.UserInfo>
              <S.ProfileImg src={profileImageSource || image_source} />
              <S.UserEmail>{email}</S.UserEmail>
            </S.UserInfo>
          </Link>
        ) : (
          <Link to="/folder">
            <S.LoginButton>로그인</S.LoginButton>
          </Link>
        )}
      </S.GlobalNav>
    </S.GlobalNavWrapper>
  );
};
export default GlobalNav;
