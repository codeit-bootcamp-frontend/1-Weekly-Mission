import { useEffect, useState } from "react";

import { fetchGet } from "../../apis/api";
import useAsync from "../../hooks/useAsync";
import Searchbar from "../../components/Searchbar/Searchbar";
import CardList from "../../components/Card/CardList.jsx";
import "./Share.css";

const Owner = ({ items }) => {
  const { name, ownerName, ownerProfileImageSource } = items;

  return (
    <div className="owner-container">
      <div className="owner-inner-container">
        <img
          className="owner-image"
          src={ownerProfileImageSource}
          alt="사용자 이미지"
        />
        <p className="owner-ownername">@{ownerName}</p>
        <div>
          <p className="owner-foldername">{name}</p>
        </div>
      </div>
    </div>
  );
};

const Share = () => {
  const [cards, setCards] = useState([]);
  const [owner, setOwner] = useState({
    name: "",
    ownerName: "",
    ownerProfileImageSource: "",
  });
  const [loading, error, getSampleUserFolder] = useAsync(
    fetchGet("/api/sample/folder")
  );

  useEffect(() => {
    const handleSampleFolder = async () => {
      const result = await getSampleUserFolder();
      if (!result) return;
      if (error) console.error(error);

      const { folder } = result;

      setCards(folder.links);
      setOwner((prevState) => ({
        ...prevState,
        name: folder.name,
        ownerName: folder.owner.name,
        ownerProfileImageSource: folder.owner.profileImageSource,
      }));
    };

    handleSampleFolder();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {!loading && (
        <>
          (
          <Owner items={owner} />
          <div className="shared-frame">
            <Searchbar />
            <CardList cards={cards} />
          </div>
          )
        </>
      )}
    </>
  );
};

export default Share;
