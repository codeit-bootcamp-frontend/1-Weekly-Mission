import "./SharedPage.css";

export const SharedPage = ({ folderInfo, searchBar, cardList }) => {
  return (
    <div className="SharedPage">
      {folderInfo}
      <div className="SharedPage-items">
        {searchBar}
        {cardList}
      </div>
    </div>
  );
};
