import { Link } from "react-router-dom";

import IMAGES from "../../assets/images.js";
import Button from "../Button/Button.jsx";
import "./Navbar.css";

const Logo = ({ link = "/", className, src, alt, height }) => {
  return (
    <Link to={link}>
      <img className={className} src={src} alt={alt} height={height} />
    </Link>
  );
};

const Profile = ({ items }) => {
  const { email, profileImageSource } = items;
  return (
    <div className="profile-box">
      <img className="profile-image" src={profileImageSource} alt="profile" />
      <p className="profile-collapse">{email}</p>
    </div>
  );
};

const Navbar = ({ userData }) => {
  return (
    <nav id="nav">
      <div className="nav-box">
        <Logo
          link="/"
          className="nav-logo"
          src={IMAGES.logo}
          alt="Linkbrary"
          height={24}
        />
        {!userData?.id ? (
          <Button className="cta-short" link="/signin.html" text="로그인" />
        ) : (
          <Profile items={userData} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
