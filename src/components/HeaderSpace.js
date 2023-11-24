import "../styles/navheader.css";
import "../styles/reset.css";
import styled from "styled-components";
import linkAdd from "../images/link.svg";
import { useRef, useState, useEffect } from "react";

function HeaderSpace({ profiles, openMAF }) {
  const [text, setText] = useState("");

  const targetRef = useRef(null);

  // window.addEventListener("scroll", (e) => {
  //   if (window.scrollY > 300 && window.scrollY < 1100) {
  //     document
  //       .querySelector(".linkAdd-background")
  //       .classList.add("show-bottom");
  //   } else {
  //     document
  //       .querySelector(".linkAdd-background")
  //       .classList.remove("show-bottom");
  //   }
  // });

  const handleChangeText = (e) => setText(e.target.value);
  const handleTypingUrl = (e) => openMAF(e, text);

  let option = {
    threshold: 1.0,
  };
  useEffect(() => {
    const observer = new IntersectionObserver((item) => {
      item.forEach((it) => {
        console.log(it);
        if (it.isIntersecting) {
          document
            .querySelector(".linkAdd-background")
            .classList.remove("show-bottom");
        } else {
          document
            .querySelector(".linkAdd-background")
            .classList.add("show-bottom");
        }
      });
    }, option);

    if (targetRef?.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

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
          <Target ref={targetRef} />
        </>
      )}
    </>
  );
}

export default HeaderSpace;

const Target = styled.div`
  width: 1px;
`;
