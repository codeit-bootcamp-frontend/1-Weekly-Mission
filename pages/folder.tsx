import { useRouter } from "next/router";
import { getAllFolder, getFolderLinks, getUserFolder } from "pages/api/api";
import { useEffect, useState } from "react";
import CardList from "src/components/CardList/CardList";
import FolderList from "src/components/FolderList/FolderList";
import Footer from "src/components/Footer/Footer";
import FunctionButton from "src/components/FunctionButton/FunctionButton";
import Header from "src/components/Header/Header";
import LinkAdd from "src/components/LinkAdd/LinkAdd";
import MainSection from "src/components/MainSection/MainSection";
import Modal from "src/components/Modal/Modal";
import NotFoundLink from "src/components/NotFoundLink/NotFoundLink";
import Search from "src/components/Search/Search";
import ResultSearch from "src/components/Search/SearchResult";
import Title from "src/components/Title/Title";
import { useModal } from "src/hook/Folder/useModal";
import isEmpty from "src/utils/isEmpty";
import { filterCardsSearch } from "src/utils/searchFilterCards";

function Folder() {
  const [folders, setFolders] = useState<[]>([]);
  const [isFunctionButtonShow, setIsFunctionButtonShow] = useState(false);
  const [cards, setCards] = useState<Card[]>([]);
  const [folderName, setFolderName] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const {
    isModalOpen,
    modalButtonContent,
    modalTitle,
    modalSubTitle,
    showModal,
    showShareFacebook,
    showShareKakao,
    showShareLinkCopy,
  } = useModal(folderName);

  const router = useRouter();
  const initFolderId = router.query.folderId as string;

  const folderInfo = async (folderId: string) => {
    const introResult = await getUserFolder();

    const currentId = introResult.filter(
      (data: { id: number }) => data.id === Number(folderId)
    );

    let folderName;
    if (currentId.length === 0) {
      folderName = "전체";
      setIsFunctionButtonShow(false);
    } else {
      folderName = currentId[0].name;
      setIsFunctionButtonShow(true);
    }

    setFolderName(folderName);
    setFolders(introResult);
  };

  const folderAndCardInfo = async (folderId: string) => {
    const introResult = isEmpty(folderId)
      ? await getAllFolder()
      : await getFolderLinks(folderId as string);
    if (!introResult) return;

    if (searchResult) {
      const filterCard = filterCardsSearch(introResult, searchResult);
      setCards(filterCard);
    }

    if (!searchResult) {
      setCards(introResult);
    }
  };

  useEffect(() => {
    folderInfo(initFolderId);
    folderAndCardInfo(initFolderId);

    return () => setCards([]);
  }, [initFolderId]);

  useEffect(() => {
    folderAndCardInfo(initFolderId);
  }, [searchResult]);

  return (
    <>
      <Header />
      {isModalOpen && (
        <Modal
          title={modalTitle}
          subTitle={modalSubTitle}
          buttonContent={modalButtonContent}
          onClick={showModal}
          shareKakao={showShareKakao}
          shareFacebook={showShareFacebook}
          shareLink={showShareLinkCopy}
          folders={folders}
        />
      )}
      <LinkAdd onClick={showModal} />
      <MainSection>
        <Search value={searchResult} searchResult={setSearchResult} />
        {searchResult.length > 0 && <ResultSearch result={searchResult} />}
        {folders && <FolderList folder={folders} onClick={showModal} />}
        <Title folderName={folderName}>
          {isFunctionButtonShow && <FunctionButton onClick={showModal} />}
        </Title>
        {initFolderId && cards.length === 0 ? (
          <NotFoundLink />
        ) : (
          <CardList card={cards} isCardEditable={true} onClick={showModal} />
        )}
      </MainSection>
      <Footer />
    </>
  );
}

export default Folder;
