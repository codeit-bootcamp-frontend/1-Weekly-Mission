import { useEffect, useState } from "react";

import ShareHeader from "./components/ShareHeader/ShareHeader";
import { SearchBar, CardList } from "../../commons/components/index";
import { getAllCards } from "../../apis/getAllCards";
import "./SharedPage.css";
import Layout from "../Layout/Layout";

interface FolderProps {
  folderName: string;
  folderOwnerName: string;
  folderOwnerProfileImage: string;
}

const INITIAL_FOLDER = {
  folderName: "",
  folderOwnerName: "",
  folderOwnerProfileImage: "",
};

function SharedPage() {
  const [folderValues, setFolderValues] = useState<FolderProps>(INITIAL_FOLDER);

  const [cardList, setCardList] = useState([]);

  const loadUser = async () => {
    const folderResult = await getAllCards();
    if (!folderResult) return;
    if (!folderResult.folder) return;
    const { name = "", owner = null, links = "" } = folderResult.folder;
    setFolderValues((prevValues) => {
      const newValues = {
        folderName: name,
        folderOwnerName: owner?.name,
        folderOwnerProfileImage: owner?.profileImageSource,
      };
      return { ...prevValues, ...newValues };
    });
    setCardList(links);
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <Layout isSticky={true}>
      <ShareHeader
        folderOwnerProfile={folderValues.folderOwnerProfileImage}
        folderName={folderValues.folderName}
        folderOwnerName={folderValues.folderOwnerName}
      />

      <section className="section">
        <div className="search-section">
          <SearchBar />
        </div>
        <div className="card-section">
          <CardList cardList={cardList} />
        </div>
      </section>
    </Layout>
  );
}

export default SharedPage;
