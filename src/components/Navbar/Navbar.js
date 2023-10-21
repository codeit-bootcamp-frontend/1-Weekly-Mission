import logo from "../../assets/logo.svg";
import Button from "../Button/Button.js";
import "./Navbar.css";
import { fetchGet } from "../../apis/api";
import { useCallback, useEffect, useState } from "react";

const Logo = ({ link = "/", className, src, alt, height }) => {
  return (
    <a href={link}>
      <img className={className} src={src} alt={alt} height={height} />
    </a>
  );
};

const TopFrame = () => {
  return <></>;
};

const Profile = ({ imgUrl, email, name, id }) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img
        src={imgUrl}
        alt="profile"
        style={{ width: "28px", borderRadius: "100%", cursor: "pointer" }}
      />
      <p style={{ marginLeft: "4px" }}>{email}</p>
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

  const getSampleData = async () => {
    try {
      const data = await fetchGet("/api/sample/user");
      if (!data) setSampleUser(null);
      else {
        const { id, name, email, profileImageSource } = data;
        setSampleUser({ id, name, email, profileImageSource });
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getSampleData();
  }, []);

  return (
    <nav>
      <div className="nav-box">
        <Logo
          link="/"
          className="nav-logo"
          src={logo}
          alt="Linkbrary Logo"
          height={24}
        />
        {!sampleUser.id ? (
          <Button className="cta-short" link="/signin.html" text="로그인" />
        ) : (
          <Profile
            imgUrl={sampleUser.profileImageSource}
            email={sampleUser.email}
            id={sampleUser.id}
            name={sampleUser.name}
          />
        )}
      </div>
      <TopFrame />
    </nav>
  );
};

export default Navbar;
