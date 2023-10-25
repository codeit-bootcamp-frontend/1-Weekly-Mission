import linkbraryLogo from "images/logo.svg";
import { useEffect, useState } from "react";
import FolderInfo from "components/FolderInfo/FolderInfo";
import Profile from "components/Profile/Profile";
import { getFolder, getProfile } from "api";
import "./Header.css";

function Header() {
  const [profile, setProfile] = useState({});
  const [hasProfile, setHasProfile] = useState(false);
  const [folder, setFolder] = useState({});

  const handleLoadProfile = async () => {
    const result = await getProfile();
    if (!result) {
      setHasProfile(false);
      return;
    }
    setProfile(result);
    setHasProfile(true);
  };

  const handleLoadFolder = async () => {
    const result = await getFolder();
    setFolder(result);
  };

  useEffect(() => {
    handleLoadProfile();
    handleLoadFolder();
  }, []);

  return (
    <header>
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
      <FolderInfo data={folder} />
    </header>
  );
}

export default Header;
