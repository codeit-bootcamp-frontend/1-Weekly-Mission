import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./CardStyles.css";

const CardList = () => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    fetch("https://bootcamp-api.codeit.kr/api/sample/folder")
      .then((response) => response.json())
      .then((data) => {
        setLinks(data.folder.links);
      });
  }, []);

  return (
    <div className="card-list">
      {links.map((link) => (
        <Card key={link.id} link={link} />
      ))}
    </div>
  );
};

export default CardList;
