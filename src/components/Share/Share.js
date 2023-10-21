import { useEffect, useState } from "react";
import Card from "../Card/Card";
import Searchbar from "../Searchbar/Searchbar";
import { fetchGet } from "../../apis/api";

import "./Share.css";

const Owner = ({ name, id, owenrId, ownerName, ownerImageSrc }) => {
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

  const getSampleFolder = async () => {
    try {
      const result = await fetchGet("/api/sample/folder");
      const { folder } = result;
      setCards(folder.links); // Card data들

      console.log("FOLDER", folder);
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
    // Data -> 상위 정보들, 카드 리스트 정보들
  };

  useEffect(() => {
    getSampleFolder();
  }, []);
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
        <div className="shared-cards-frame">
          {cards &&
            cards.map((card) => (
              <Card
                key={card.id}
                className={"Card"}
                createdAt={card.createdAt}
                description={card.description}
                id={card.id}
                imgUrl={card.imageSource}
                title={card.title}
                url={card.url}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default Share;
