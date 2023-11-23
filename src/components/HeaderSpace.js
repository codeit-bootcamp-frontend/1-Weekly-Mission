import "../styles/navheader.css";
import "../styles/reset.css";
import linkAdd from "../images/link.svg";
import { useRef, useState, useEffect } from "react";

function HeaderSpace({ profiles, openMAF }) {
  const [text, setText] = useState("");
  const targetRef = useRef("");
  // const [scroll, setScroll] = useState('')

  window.addEventListener("scroll", (e) => {
    if (window.scrollY > 300 && window.scrollY < 1100) {
      document
        .querySelector(".linkAdd-background")
        .classList.add("show-bottom");
    } else {
      document
        .querySelector(".linkAdd-background")
        .classList.remove("show-bottom");
    }
  });

  const handleChangeText = (e) => setText(e.target.value);
  const handleTypingUrl = (e) => openMAF(e, text);

  // const fixBottom = () => {
  //   document.querySelector(".linkAdd-bar-wrapper").classList.add("show-bottom");
  // };

  // useEffect(() => {
  //   let observer = new IntersectionObserver(fixBottom, {
  //     threshold: 0.1,
  //   });

  //   observer.observe(targetRef.current);
  // }, []);
  return (
    <>
      {profiles !== undefined ? (
        <header>
          <div className="hero-header">
            <div className="company-mark">
              <img
                className="circle-logo"
                src={profiles.profileImageSource}
                alt=""
              />
              <span className="company-name">{profiles.name}</span>
            </div>
            <div className="bookmarks-wrapper">
              <span className="bookmarks">{profiles.title}</span>
            </div>
          </div>
        </header>
      ) : (
        <>
          <header className=" folder-header">
            <div className="linkAdd-background">
              <div className="linkAdd-bar-wrapper">
                <input
                  name="text"
                  value={text}
                  className="linkAdd-bar"
                  placeholder="링크를 추가해보세요"
                  onChange={handleChangeText}
                />

                <img src={linkAdd} className="linkAdd-bar-image" alt=" " />
                <button
                  onClick={handleTypingUrl}
                  className="cta cta-short"
                  href="/"
                >
                  <span>추가하기</span>
                </button>
              </div>
            </div>
          </header>
          <div id="scroll-target"></div>
        </>
      )}
    </>
  );
}

export default HeaderSpace;
