import Searchbar from "../../components/Searchbar/Searchbar";
import CardList from "../../components/Card/CardList.jsx";
import "./Share.css";

const Owner = ({ items }) => {
  const { name, owner } = items;

  return (
    <div className="owner-container">
      <div className="owner-inner-container">
        <img
          className="owner-image"
          src={owner.profileImageSource}
          alt="사용자 이미지"
        />
        <p className="owner-ownername">@{owner.name}</p>
        <div>
          <p className="owner-foldername">{name}</p>
        </div>
      </div>
    </div>
  );
};

const Share = ({ shareData }) => {
  const { folder } = shareData;
  return (
    <>
      <Owner items={folder} />
      <div className="shared-frame">
        <Searchbar />
        <CardList cards={folder?.links} />
      </div>
    </>
  );
};

export default Share;
