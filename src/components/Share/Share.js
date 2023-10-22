import { useCallback, useEffect, useState } from "react";
import Searchbar from "../Searchbar/Searchbar";
import { fetchGet } from "../../apis/api";

import "./Share.css";
import CardList from "../Card/CardList";
// import useAsync from "../../hooks/useAsync";

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

  const handleSampleFolder = useCallback(async () => {
    try {
      const result = await fetchGet("/api/sample/folder");
      const { folder } = result;
      setCards(folder.links); // Card data들
      setOwner((prevState) => ({
        ...prevState,
        name: folder.name,
        id: folder.id,
        ownerId: folder.owner.id,
        ownerName: folder.owner.name,
        ownerProfileImageSource: folder.owner.profileImageSource,
      }));
    } catch (err) {
      console.log("ERROR 입니다", err);
    }
  }, []);

  // useAsync Test Code

  // const { loading, error, value } = useAsync(
  //   fetchGet("/api/sample/folder"),
  //   []
  // );
  // console.log(loading, error, value);

  useEffect(() => {
    handleSampleFolder();
  }, [handleSampleFolder]);
  return (
    <>
      <Owner
        name={owner.name}
        id={owner.id}
        ownerId={owner.ownerId}
        ownerName={owner.ownerName}
        ownerImageSrc={owner.ownerProfileImageSource}
      />
      <div className="shared-frame">
        <Searchbar />
        <CardList cards={cards} />
      </div>
    </>
  );
};

export default Share;
