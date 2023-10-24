import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { fetchGet } from "../../apis/api";
import useAsync from "../../hooks/useAsync";
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

const Navbar = () => {
  const [sampleUser, setSampleUser] = useState({
    id: null,
    name: "",
    email: "",
    profileImageSource: "",
  });

  const [loading, error, getSampleUser] = useAsync(
    fetchGet("/api/sample/user")
  );

  useEffect(() => {
    const handleSampleUserProfile = async () => {
      const result = await getSampleUser();
      if (!result) return;
      if (error) console.error(error);

      setSampleUser({
        id: result.id,
        name: result.name,
        email: result.email,
        profileImageSource: result.profileImageSource,
      });
    };

    handleSampleUserProfile();

    return () =>
      setSampleUser({
        id: null,
        name: "",
        email: "",
        profileImageSource: "",
      });
    // eslint-disable-next-line
  }, []);

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
        {!loading ? (
          !sampleUser.id ? (
            <Button className="cta-short" link="/signin.html" text="로그인" />
          ) : (
            <Profile items={sampleUser} />
          )
        ) : null}
        {}
      </div>
    </nav>
  );
};

export default Navbar;
