import Card from "../../components/card/Card";
import "./folder.css";
import SearchImg from "../../assets/folder/img_search.png";

const Folder = () => {
  return (
    <div className="wrapper">
      <div className="section">
        <div className="folderContentContainer">
          <div id="userProfile"></div>
          <div id="userName">@코드잇</div>
          <div id="folderName">⭐️ 즐겨찾기</div>
        </div>
      </div>
      <div className="section" style={{ background: "#fff" }}>
        <div className="folderContentContainer" id="bottomContainer">
          <div className="searchInputContainer">
            <img src={SearchImg} alt="searchImg" id="searchImg" />
            <input
              id="searchContainer"
              placeholder="링크를 검색해보세요."
            ></input>
          </div>
          <div id="cardContainer">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Folder;
