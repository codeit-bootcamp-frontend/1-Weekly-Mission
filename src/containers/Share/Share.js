import { useEffect, useState } from "react";
import Searchbar from "../../components/Searchbar/Searchbar";
import { fetchGet } from "../../apis/api";

import "./Share.css";
import CardList from "../../components/Card/CardList";
import useAsync from "../../hooks/useAsync";

const Owner = ({ name, id, ownerId, ownerName, ownerImageSrc }) => {
  return (
    <div className="owner-container">
      <div className="owner-inner-container">
        <img className="owner-image" src={ownerImageSrc} alt="사용자 이미지" />
        <p className="owner-firstname">@{ownerName}</p>
        <div>
          <p className="owner-secondname">{name}</p>
        </div>
      </div>
    </div>
  );
};

const Share = () => {
  const [cards, setCards] = useState([]);
  const [owner, setOwner] = useState({
    name: "",
    id: null,
    ownerId: null,
    ownerName: "",
    ownerProfileImageSource: "",
  });
  const [loading, error, getSampleUserFolder] = useAsync(
    fetchGet("/api/sample/folder")
  );

  const handleSampleFolder = async () => {
    const result = await getSampleUserFolder();
    if (!result) return;
    const { folder } = result;

    setCards(folder.links);
    setOwner((prevState) => ({
      ...prevState,
      name: folder.name,
      id: folder.id,
      ownerId: folder.owner.id,
      ownerName: folder.owner.name,
      ownerProfileImageSource: folder.owner.profileImageSource,
    }));
  };

  useEffect(() => {
    handleSampleFolder();
  }, []);

  return (
    <>
      {!loading && (
        <>
          (
          <Owner
            name={owner.name}
            id={owner.id}
            ownerId={owner.ownerId}
            ownerName={owner.ownerName}
            ownerImageSrc={owner.ownerProfileImageSource}
          />
          <div className="shared-frame">
            <Searchbar />
            <CardList cards={cards} hasDetails={false} />
          </div>
          )
        </>
      )}
    </>
  );
};

export default Share;
