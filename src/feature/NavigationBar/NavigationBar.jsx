import { ROUTE } from "../../util/constant";
import { Cta } from "../../ui/Cta";
import { Profile } from "../../ui/Profile";
import { LOGO_IMAGE, TEXT } from "./constant";
import "./NavigationBar.css";

export const NavigationBar = ({ profile }) => {
  return (
    <nav className="NavigationBar">
      <div className="NavigationBar-items">
        <a href={ROUTE.랜딩}>
          <img
            className="NavigationBar-logo"
            src={LOGO_IMAGE}
            alt="Linkbrary 서비스 로고"
          />
        </a>
        {profile ? (
          <Profile profile={profile} />
        ) : (
          <a href={ROUTE.로그인}>
            <Cta isSmall>
              <span className="NavigationBar-signin">{TEXT.login}</span>
            </Cta>
          </a>
        )}
      </div>
    </nav>
  );
};
