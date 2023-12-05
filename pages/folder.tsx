import { useRouter } from "next/router";
import { getAllFolder, getFolderLinks, getUserFolder } from "pages/api/api";
import React, { useEffect, useState } from "react";
import CardList from "src/components/CardList/CardList";
import FolderList from "src/components/FolderList/FolderList";
import FunctionButton from "src/components/FunctionButton/FunctionButton";
import LinkAdd from "src/components/LinkAdd/LinkAdd";
import MainSection from "src/components/MainSection/MainSection";
import Modal from "src/components/Modal/Modal";
import NotFoundLink from "src/components/NotFoundLink/NotFoundLink";
import Search from "src/components/Search/Search";
import ResultSearch from "src/components/Search/SearchResult";
import Title from "src/components/Title/Title";
import isEmpty from "src/utils/isEmpty";
import { filterCardsSearch } from "src/utils/searchFilterCards";
import { shareKakaoLink } from "src/utils/shareKakaoLink";

function Folder() {
  const [folders, setFolders] = useState<[]>([]);
  const [isFunctionButtonShow, setIsFunctionButtonShow] = useState(false);
  const [cards, setCards] = useState<Card[]>([]);
  const [folderName, setFolderName] = useState("");
  const [isModalOpen, setModalIsOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalSubTitle, setModalSubTitle] = useState("");
  const [modalButtonContent, setModalButtonContent] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const { asPath } = useRouter();

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

  const showModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    const buttonName = e.currentTarget.value;
    const url = e.currentTarget.id;

    switch (buttonName) {
      case "add":
        setModalTitle("폴더에 추가");
        setModalButtonContent("추가하기");
        break;
      case "addFolder":
        setModalTitle("폴더 추가");
        setModalButtonContent("추가하기");
        break;
      case "share":
        setModalTitle("폴더 공유");
        setModalSubTitle(folderName);
        break;
      case "edit":
        setModalTitle("폴더 이름 변경");
        setModalButtonContent("변경하기");
        break;
      case "delete":
        setModalTitle("폴더 삭제");
        setModalSubTitle(folderName);
        setModalButtonContent("삭제하기");
        break;
      case "linkDelete":
        setModalTitle("링크 삭제");
        setModalSubTitle(url);
        setModalButtonContent("삭제하기");
        break;
      default:
        setModalTitle("");
        setModalSubTitle("");
        break;
    }
    setModalIsOpen(!isModalOpen);
  };

  const showShareKakao = () => shareKakaoLink(window.location.href, asPath);

  const showShareFacebook = () => {
    window.open(`http://www.facebook.com/sharer.php?u=${window.location.href}`);
  };

  const showShareLinkCopy = async () => {
    await navigator.clipboard.writeText(window.location.href);
    alert("주소가 복사 되었습니다!");
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
    </>
  );
}

export default Folder;
