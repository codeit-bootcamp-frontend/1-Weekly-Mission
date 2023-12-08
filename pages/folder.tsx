import { useRouter } from "next/router";
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
import { useFolderAndCardInfo } from "src/hook/Folder/useFolderAndCardInfo";
import { useFolderName } from "src/hook/Folder/useFolderName";
import { useModal } from "src/hook/Folder/useModal";

function Folder() {
  const router = useRouter();
  const initFolderId = router.query.folderId as string;
  const { folderName, folders, isFunctionButtonShow } =
    useFolderName(initFolderId);
  const { cards, searchResult, setSearchResult } =
    useFolderAndCardInfo(initFolderId);
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
