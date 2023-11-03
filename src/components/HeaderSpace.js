import "../styles/navheader.css";
import "../styles/reset.css";
import linkAdd from "../images/link.svg";
import { useState } from "react";

function HeaderSpace({ profiles, openMAF }) {
  const [text, setText] = useState("");

  const handleChangeText = (e) => setText(e.target.value);
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
        <header className=" folder-header">
          <div className="linkAdd-bar-wrapper">
            <input
              name="text"
              value={text}
              className="linkAdd-bar"
              placeholder="링크를 추가해보세요"
              onChange={handleChangeText}
            />

            <img src={linkAdd} className="linkAdd-bar-image" alt=" " />
            <button onClick={openMAF} className="cta cta-short" href="/">
              <span>추가하기</span>
            </button>
          </div>
        </header>
      )}
    </>
  );
}

export default HeaderSpace;
