import Card from "./Card";
import { Fragment } from "react";
import "./Card.css";
import useGetSampleLinks from "../../hooks/useGetSampleLinks";
import useGetLinks from "../../hooks/useGetLinks";

const CardList = ({ folderId }) => {
  const sharedLinks = useGetSampleLinks();
  const folderLinks = useGetLinks(folderId);
  const links = folderId ? folderLinks : sharedLinks;

  return (
    <div className="card_wrapper">
      {links?.length ? (
        links.map((link) => {
          return (
            <Fragment key={link.id}>
              <Card item={link} />
            </Fragment>
          );
        })
      ) : (
        <div className="no_link">저장된 링크가 없습니다.</div>
      )}
    </div>
  );
};

export default CardList;
