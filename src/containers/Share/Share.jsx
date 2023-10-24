import { useEffect, useState } from "react";
import Searchbar from "../../components/Searchbar/Searchbar";
import { fetchGet } from "../../apis/api";

import "./Share.css";
import CardList from "../../components/Card/CardList.jsx";
import useAsync from "../../hooks/useAsync";

const Owner = ({ folderName, ownerName, ownerImageSrc }) => {
  return (
    <div className="owner-container">
      <div className="owner-inner-container">
        <img className="owner-image" src={ownerImageSrc} alt="사용자 이미지" />
        <p className="owner-ownername">@{ownerName}</p>
        <div>
          <p className="owner-foldername">{folderName}</p>
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
  }, []);

  return (
    <>
      {!loading && (
        <>
          (
          <Owner
            folderName={owner.name}
            ownerName={owner.ownerName}
            ownerImageSrc={owner.ownerProfileImageSource}
          />
          <div className="shared-frame">
            <Searchbar />
            <CardList cards={cards} hasDetails={true} />
          </div>
          )
        </>
      )}
    </>
  );
};

export default Share;
