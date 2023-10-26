import linkbraryLogo from "images/logo.svg";
import { useEffect, useState } from "react";
import Profile from "components/Profile";
import { getProfile } from "api";
import "./Nav.css";

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
    <nav>
      <a href="/">
        <img src={linkbraryLogo} alt="홈으로 연결된 Linkbrary 로고" />
      </a>
      {hasProfile ? (
        <Profile data={profile} />
      ) : (
        <a className="signin" href="signin.html">
          <span>로그인</span>
        </a>
      )}
    </nav>
  );
}

export default Nav;
