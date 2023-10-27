import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./CardStyles.css";

const CardList = ({ isFolderPage, folderId, setHasLinks }) => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    let url;
    if (isFolderPage) {
      url = folderId
        ? `https://bootcamp-api.codeit.kr/api/users/1/links?folderId=${folderId}`
        : "https://bootcamp-api.codeit.kr/api/users/1/links";
    } else {
      url = "https://bootcamp-api.codeit.kr/api/sample/folder";
    }

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const linkData = isFolderPage ? data.data : data.folder.links;
        setLinks(linkData || []);
        setHasLinks(linkData && linkData.length > 0);
      });
  }, [isFolderPage, folderId]);

  return (
    <div className="card-list">
      {links.length ? (
        links.map((link) => (
          <Card key={link.id} link={link} isFolderPage={isFolderPage} />
        ))
      ) : (
        <div className="no-link">저장된 링크가 없습니다.</div>
      )}
    </div>
  );
};

export default CardList;
