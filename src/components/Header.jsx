import "../pages/SharedPage/sharedPage.css";
import userImg from "../assets/image/logo.svg";
import userProfileIcon from "../assets/image/icon-background-myprofile.svg";
import userProfileIconContent from "../assets/image/icon-myprofile.svg";

const USER_EMAIL_TEXT = "Codeit@codeit.com";

function Header() {
  return (
    <header>
      <div className="header-content">
        <img src={userImg} alt="logo" />
        <div id="div-myprofile">
          <div>
            <img className="userImg" alt="user profile" />
          </div>
          <h4>{USER_EMAIL_TEXT}</h4>
        </div>
      </div>
    </header>
  );
}

export default Header;
