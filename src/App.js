import "App.css";

import logo from "assets/logo.svg";
import avatar from "assets/Avatar.svg";
import facebookIcon from "assets/akar-icons_facebook-fill.svg";
import twitterIcon from "assets/akar-icons_twitter-fill.svg";
import youtubeIcon from "assets/akar-icons_youtube-fill.svg";
import instagramIcon from "assets/ant-design_instagram-filled.svg";

function App() {
  return (
    <div>
      <header className="header">
        <div className="header__container max-container">
          <img src={logo} alt="logo-image" className="header__logo" />
          <nav>
            <button className="header__login__btn">로그인</button>
          </nav>
        </div>
      </header>
      <main>
        <section className="hero">
          <div className="hero__profile">
            <img src={avatar} alt="avatar" />
            <p>@코드잇</p>
          </div>
          <div className="hero__link">
            <button className="hero__link__btn">⭐️ 즐겨찾기</button>
          </div>
        </section>
        <section>
          <div className="contents"></div>
        </section>
      </main>
      <footer className="contact">
        <div className="contact__container">
          <div className="contact__rights">©codeit - 2023</div>
          <div className="contact__policy">
            <a className="contact__policy--text">Privacy Policy</a>
            <a className="contact__policy--text">FAQ</a>
          </div>
          <div className="contact__links">
            <a href="https://www.facebook.com/?locale=ko_KR" target="_blank" rel="noreferrer">
              <img src={facebookIcon} alt="facebook" />
            </a>
            <a href="https://twitter.com/?lang=ko" target="_blank" rel="noreferrer">
              <img src={twitterIcon} alt="twitter" />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
              <img src={youtubeIcon} alt="youtube" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
              <img src={instagramIcon} alt="instagram" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
