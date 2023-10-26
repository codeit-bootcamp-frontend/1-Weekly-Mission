import linkbraryLogo from "images/logo.svg";
import { useEffect, useState } from "react";
import Profile from "components/Profile";
import { getProfile } from "api";
import * as S from "./Nav.style";

function Nav() {
  const [profile, setProfile] = useState({});
  const [hasProfile, setHasProfile] = useState(false);

  const handleLoadProfile = async () => {
    const result = await getProfile();
    if (!result) {
      setHasProfile(false);
      return;
    }
    setProfile(result);
    setHasProfile(true);
  };

  useEffect(() => {
    handleLoadProfile();
  }, []);

  return (
    <S.NavContainer>
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
