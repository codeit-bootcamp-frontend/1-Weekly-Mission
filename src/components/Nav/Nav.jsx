import linkbraryLogo from "images/logo.svg";
import { useEffect, useState } from "react";
import Profile from "components/Profile";
import fetch from "api";
import * as S from "./Nav.style";

function Nav() {
  const [profile, setProfile] = useState({});
  const [hasProfile, setHasProfile] = useState(false);

  const handleLoadProfile = async () => {
    const url = window.location.path === "/shared" ? "/sample/user" : "/users/1";
    const result = await fetch({ url: url });
    if (!result) {
      setHasProfile(false);
      return;
    }
    setProfile(window.location.path === "/shared" ? result.data : result.data.data[0]);
    setHasProfile(true);
  };

  useEffect(() => {
    handleLoadProfile();
  }, []);

  return (
    <S.NavContainer path={window.location.path}>
      <a href="/">
        <img src={linkbraryLogo} alt="홈으로 연결된 Linkbrary 로고" />
      </a>
      {hasProfile ? (
        <Profile data={profile} />
      ) : (
        <S.SignInButton href="signin.html">
          <span>로그인</span>
        </S.SignInButton>
      )}
    </S.NavContainer>
  );
}

export default Nav;
