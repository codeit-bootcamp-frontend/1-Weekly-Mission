import "../pages/SharedPage/sharedPage.css";
import getFolderInfoResponse from "../pages/SharedPage/SharedPage.js";

const USER_NAME = "username";

function HeroContent() {
  const style = {
    width: "800px",
    position: "relative",
  };
  return (
    <section className="main-header">
      <div className="folder-container">
        <img className="folder-image" alt="folder profile" />
        <h4 className="folder-userName">username</h4>
      </div>
      <div className="folder-nameText" style={style}></div>
    </section>
  );
}

export default HeroContent;
