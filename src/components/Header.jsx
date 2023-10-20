import linkbraryLogo from "../images/logo.svg";
import { useEffect, useState } from "react";
import FolderInfo from "./FolderInfo";
import Profile from "./Profile";
import { getFolder, getProfile } from "../api";
import './Header.css';

function Header() {
  const [email, setEmail] = useState("");
  const [profileImageSource, setProfileImageSource] = useState(null);
  const [folderName, setFolderName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [ownerProfileImageSource, setOwnerProfileImageSource] = useState(null);

  const handleLoadProfile = async () => {
    const result = await getProfile();
    const { email, profileImageSource } = result;
    setEmail(email);
    setProfileImageSource(profileImageSource);
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
        <Profile email={email} image={profileImageSource} />
      </nav>
      <FolderInfo folderName={folderName} ownerName={ownerName} image={ownerProfileImageSource} />
    </header>
  );
}

export default Header;