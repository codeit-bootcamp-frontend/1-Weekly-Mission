import "App.css";

import facebookIcon from "assets/akar-icons_facebook-fill.svg";
import twitterIcon from "assets/akar-icons_twitter-fill.svg";
import youtubeIcon from "assets/akar-icons_youtube-fill.svg";
import instagramIcon from "assets/ant-design_instagram-filled.svg";

import CardList from "components/units/CardList";
import Searchbar from "components/units/Searchbar";
import Header from "components/units/Header";
import Hero from "components/units/Hero";
import { useEffect, useState } from "react";
import { getUser } from "api/api";

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const data = await getUser();
    setUser(data);
  };
  return (
    <div>
      <Header user={user} />
      <main>
        <section className="hero">
          <Hero />
        </section>
        <section>
          <div className="contents">
            <Searchbar />
            <CardList />
          </div>
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
