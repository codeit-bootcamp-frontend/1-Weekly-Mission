import "./Nav.css";
import logo from "../../image/logo.svg";
import NavProfile from "./NavProfile";
import NavLogin from "./NavLogin";
import useGetSampleUser from "../../hooks/useGetSampleUser";
import useGetUser from "../../hooks/useGetUser";

const Nav = ({ pageType }) => {
  const sharedUser = useGetSampleUser();
  const folderUser = useGetUser();
  const user = pageType === "shared" ? sharedUser : folderUser;

  return (
    <nav className={`nav_bar ${pageType}`}>
      <a className="logo_button" href="/">
        <img className="logo" src={logo} alt="로고 이미지" />
      </a>
      {user ? <NavProfile user_data={user} /> : <NavLogin>로그인</NavLogin>}
    </nav>
  );
};

export default Nav;
