import linkbraryLogo from "../../images/logo.svg";
import { useEffect, useState } from "react";
import FolderInfo from "../FolderInfo/FolderInfo";
import Profile from "../Profile/Profile";
import { getFolder, getProfile } from "../../api";
import "./Header.css";

function Header() {
  const [email, setEmail] = useState("");
  const [profileImageSource, setProfileImageSource] = useState(null);
  const [hasProfile, setHasProfile] = useState(false);
  const [folderName, setFolderName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [ownerProfileImageSource, setOwnerProfileImageSource] = useState(null);

  const handleLoadProfile = async () => {
    const result = await getProfile();
    if (!result) {
      setHasProfile(false);
      return;
    }
    const { email, profileImageSource } = result;
    setEmail(email);
    setProfileImageSource(profileImageSource);
    setHasProfile(true);
  };

  const handleLoadFolder = async () => {
    const result = await getFolder();
    const { folder } = result;
    const { name, owner } = folder;
    const ownerName = owner.name;
    const ownerImage = owner.profileImageSource;
    setFolderName(name);
    setOwnerName(ownerName);
    setOwnerProfileImageSource(ownerImage);
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
          <Profile email={email} image={profileImageSource} />
        ) : (
          <a className="signin" href="signin.html">
            <span>로그인</span>
          </a>
        )}
      </nav>
      <FolderInfo folderName={folderName} ownerName={ownerName} image={ownerProfileImageSource} />
    </header>
  );
}

export default Header;
