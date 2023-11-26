import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./CardStyles.css";
import API from "../../utils/api";

interface CardListProps {
  isFolderPage: boolean;
  folderId?: number | null;
  updateHasLinks?: (hasLinks: boolean) => void;
  searchTerm: string;
}

interface Link {
  id: number;
  createdAt: string | null;
  imageSource: string | null;
  title: string | null;
  url: string;
  description: string | null;
  folder_id: number | null;
  created_at: string | null;
  image_source: string | null;
}

const CardList = ({
  isFolderPage,
  folderId,
  updateHasLinks,
  searchTerm, // 검색어 prop 추가
}: CardListProps) => {
  const [links, setLinks] = useState<Link[]>([]);
  const userId = 1;

  useEffect(() => {
    let url;
    if (isFolderPage) {
      url = folderId
        ? `${API.USER.LINKS(userId)}?folderId=${folderId}`
        : API.USER.LINKS(userId);
    } else {
      url = API.SAMPLE.FOLDER;
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
        if (updateHasLinks) {
          updateHasLinks(linkData && linkData.length > 0);
        }
      });
  }, [isFolderPage, folderId, updateHasLinks]);

  const filteredLinks = links.filter((link) => {
    // 검색어가 비어있으면 모든 링크 표시
    if (!searchTerm) return true;
    // url, title, description 중 하나라도 검색어를 포함하면 표시
    return (
      link.url.includes(searchTerm) ||
      link.title?.includes(searchTerm) ||
      link.description?.includes(searchTerm)
    );
  });

  return (
    <div className="card-list">
      {filteredLinks.length ? (
        filteredLinks.map((link) => (
          <Card key={link.id} link={link} isFolderPage={isFolderPage} />
        ))
      ) : (
        <div className="no-link">검색된 링크가 없습니다.</div>
      )}
    </div>
  );
};

export default CardList;
