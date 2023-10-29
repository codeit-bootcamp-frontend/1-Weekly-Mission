import { Layout } from "./feature/Layout";
import { SharedPage } from "./page-layout/SharedPage";
import "./global.css";
import { FolderInfo } from "./ui/FolderInfo";
import SearchBar from "./ui/SearchBar/SearchBar";
import { CardList } from "./ui/CardList";
import { useGetFolder } from "./data-access/useGetFolder";
import { ReadOnlyCard } from "./ui/ReadOnlyCard";
import { DEFAULT_FOLDER_NAME } from "./util/constant";

function App() {
  const { data } = useGetFolder(DEFAULT_FOLDER_NAME);
  const { profileImage, ownerName, folderName, links } = data || {};

  return (
    <Layout>
      <SharedPage
        folderInfo={
          <FolderInfo
            profileImage={profileImage}
            ownerName={ownerName}
            folderName={folderName}
          />
        }
        searchBar={<SearchBar />}
        cardList={
          <CardList>
            {links?.map((link) => (
              <ReadOnlyCard key={link?.id} {...link} />
            ))}
          </CardList>
        }
      />
    </Layout>
  );
}

export default App;
