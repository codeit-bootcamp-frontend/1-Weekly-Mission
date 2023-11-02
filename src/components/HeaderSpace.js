import "../styles/navheader.css";
import "../styles/reset.css";
import linkAdd from "../images/link.svg";

function HeaderSpace({ profiles }) {
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
              type="text"
              className="linkAdd-bar"
              placeholder="링크를 추가해보세요"
            />

            <img src={linkAdd} className="linkAdd-bar-image" alt=" " />
            <button className="cta cta-short" href="/">
              <span>추가하기</span>
            </button>
          </div>
        </header>
      )}
    </>
  );
}

export default HeaderSpace;
