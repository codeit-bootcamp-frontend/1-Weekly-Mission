import linkbraryLogo from "../images/logo.svg";
import facebookLogo from "../images/sns/facebook.svg";
import twitterLogo from "../images/sns/twitter.svg";
import youtubeLogo from "../images/sns/youtube.svg";
import instagramLogo from "../images/sns/instagram.svg";
import "./App.css";
import Profile from "./Profile";
import { getFolder, getProfile } from "../api";
import { useEffect, useState } from "react";
import FolderInfo from "./FolderInfo";

function App() {
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
    <>
      <header>
        <nav>
          <a href="/">
            <img src={linkbraryLogo} alt="홈으로 연결된 Linkbrary 로고" />
          </a>
          <Profile email={email} image={profileImageSource} />
        </nav>
          <FolderInfo folderName={folderName} ownerName={ownerName} image={ownerProfileImageSource} />
      </header>
      <article>
        {/* <Search /> */}
        {/* <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card /> */}
      </article>
      <footer>
        <div className="footer-box">
          <span className="copyright">©codeit - 2023</span>
          <div className="footer-links">
            <a className="footer-link" href="/html/privacy.html">
              Privacy Policy
            </a>
            <a className="footer-link" href="/html/faq.html">
              FAQ
            </a>
          </div>
          <div className="sns">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <img src={facebookLogo} alt="facebook 홈페이지로 연결된 facebook 로고" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <img src={twitterLogo} alt="twitter 홈페이지로 연결된 twitter 로고" />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
              <img src={youtubeLogo} alt="youtube 홈페이지로 연결된 youtube 로고" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <img src={instagramLogo} alt="instagram 홈페이지로 연결된 instagram 로고" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
