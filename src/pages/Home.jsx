import { Link } from "react-router-dom";
import "../styles/home.css";

export default function Home() {
  return (
    <>
      <header>
        <div className="starter">
          <a className="logo" href="/">
            <img src="images/landing/logo.png" />
          </a>
          <Link className="login flex-center" to="/signin">
            로그인
          </Link>
        </div>
      </header>

      <main>
        <div className="intro">
          <h1>
            <div className="first-line">
              <div>
                <span>세상의 모든 정보</span>를
              </div>
            </div>
            <div className="second-line">
              <div>쉽게 저장하고</div>
              <div>관리해보세요</div>
            </div>
          </h1>

          <a className="add-link flex-center" href="signup.html">
            링크 추가하기
          </a>
          <img className="intro-img" src="images/landing/img1.png" />
        </div>

        <div className="content flex-center first-content">
          <div className="frame">
            <div className="texts pink-blur">
              <h2>
                <span>원하는 링크</span>를 저장하세요
              </h2>
            </div>
            <div className="para">
              나중에 읽고 싶은 글, 다시 보고 싶은 영상, 사고 싶은 옷, 기억하고
              싶은 모든 것을 한 공간에 저장하세요.
            </div>

            <img className="content-img" src="images/landing/img2.png" />
          </div>
        </div>

        <div className="content flex-center">
          <div className="frame">
            <img
              className="content-img reloc-img"
              src="images/landing/img3.png"
            />
            <div className="texts beige-blur reloc-texts">
              <h2>
                링크를 폴더로 <span>관리</span>하세요
              </h2>
            </div>

            <div className="para reloc-para">
              나만의 폴더를 무제한으로 만들고 다양하게 활용할 수 있습니다.
            </div>
          </div>
        </div>

        <div className="content flex-center">
          <div className="frame">
            <div className="texts blue-blur">
              <h2>
                저장한 링크를 <span>공유</span>해 보세요
              </h2>
            </div>
            <div className="para">
              여러 링크를 폴더에 담고 공유할 수 있습니다. 가족, 친구, 동료들에게
              쉽고 빠르게 링크를 공유해 보세요.
            </div>

            <img className="content-img" src="images/landing/img7.png" />
          </div>
        </div>

        <div className="content flex-center">
          <div className="frame">
            <img
              className="content-img reloc-img"
              src="images/landing/img6.png"
            />
            <div className="texts sky-blur reloc-texts">
              <h2>
                저장한 링크를 <span>검색</span>해 보세요
              </h2>
            </div>
            <div className="para reloc-para">
              중요한 정보들을 검색으로 쉽게 찾아보세요.
            </div>
          </div>
        </div>

        <footer>
          <div className="frame">
            <div className="footer-container">
              <div className="codeit-2023">code-it - 2023</div>
              <div className="extra-info">
                <a href="privacy.html">
                  <span>Privacy Policy</span>
                </a>
                <a href="faq.html">
                  <span>FAQ</span>
                </a>
              </div>
              <div className="sns-icons">
                <a href="https://www.facebook.com">
                  <img src="images/landing/facebook.png" />
                </a>
                <a href="https://twitter.com">
                  <img src="images/landing/twitter.png" />
                </a>
                <a href="https://www.youtube.com">
                  <img src="images/landing/youtube.png" />
                </a>
                <a href="https://www.instagram.com">
                  <img src="images/landing/instagram.png" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
