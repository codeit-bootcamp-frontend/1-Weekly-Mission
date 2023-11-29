import { SelectedFolderContentsInfo, SharedLinkInfo } from "../../../types";
import Card from "../../UI/Card";
import * as React from "react";

const CardDivide = ({ folderCards }: { folderCards: SharedLinkInfo[] | SelectedFolderContentsInfo[] }) => {
  return (
    <>
      {folderCards?.map((folderCard) => {
        return (
          <div key={folderCard.id}>
            <Card item={folderCard} />
          </div>
        );
      })}
    </>
  );
};

export default CardDivide;
