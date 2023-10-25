import { Link } from "react-router-dom";

import IMAGES from "../../assets/images.js";
import Button from "../Button/Button.jsx";
import styles from "./Navbar.module.css";

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
    <div className={styles.profileBox}>
      <img
        className={styles.profileImage}
        src={profileImageSource}
        alt="profile"
      />
      <p className={styles.profileCollapse}>{email}</p>
    </div>
  );
};

const Navbar = ({ userData }) => {
  return (
    <nav id={styles.nav}>
      <div className={styles.navBox}>
        <Logo
          link="/"
          className={styles.navLogo}
          src={IMAGES.logo}
          alt="Linkbrary"
          height={24}
        />
        {userData?.id ? (
          <Button className="ctaShort" link="/signin.html" text="로그인" />
        ) : (
          <Profile items={userData} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
