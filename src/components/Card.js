import React from "react";
import CardItem from "./CardItem";
import "../styles/Card.css";

const Card = ({ folderData }) => {
  if (folderData && folderData.folder) {
    const { folder } = folderData;
    const { links } = folder;

    return (
      <div className="Card">
        <ul className="Card__list">
          {links.map((data) => (
            <li key={data.id}>
              <CardItem item={data} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default Card;
