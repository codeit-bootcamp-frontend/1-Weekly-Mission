import "./folderPage.css";
import { KeyboardEvent, useEffect, useRef, useState } from "react";
import { getUserFolders, getUserLinks } from "../../api/folder";
import AddLinkInput from "./components/addLinkInput/AddLinkInput";
import SearchBar from "../../components/searchBar/SearchBar";
import Card from "../../components/card/Card";
import EmptyPage from "./components/emptyPage/EmptyPage";
import OptionButton from "./components/optionButton/OptionButton";
import FloatingButton from "../../components/floatingButton/FloatingButton";
import { ALL_LINK_NAME, OPTION_ICONS } from "./constant";

import addIcon from "../../assets/folder/add.svg";
import addPrimaryIcon from "../../assets/folder/addPrimaryColor.svg";
import SortButton from "./components/sortButton/SortButton";
import useModal from "../../hooks/useModal";
import { FolderName, LinkInfo } from "../../types/types";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

function FolderPage() {
  const [links, setLinks] = useState<LinkInfo[]>([]);
  const [folders, setFolders] = useState<FolderName[]>([]);
  const [folderId, setFolderId] = useState<string | number>(ALL_LINK_NAME);
  const [filteredLinks, setFilteredLinks] = useState<LinkInfo[]>([]);
  const [keyword, setKeyword] = useState("");
  const { open, close, isModalOpen, Dialog } = useModal();
  const inputRef = useRef<HTMLInputElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const addLinkInputRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [isAddLinkInputVisible, setIsAddLinkInputVisible] = useState(false);
  const [isResultEmpty, setIsResultEmpty] = useState(false);
  const [observe, unobserve] = useIntersectionObserver(
    () => setIsAddLinkInputVisible(false),
    { threshold: 1 }
  );

  const [observeHeader, unobserveHeader] = useIntersectionObserver(
    () => setIsAddLinkInputVisible(true),
    { threshold: 0 }
  );
  useEffect(() => {
    const headerElement = headerRef.current;
    if (headerElement) {
      observeHeader(headerElement);
    }
    console.log(isAddLinkInputVisible);

    return () => {
      if (headerElement) {
        unobserveHeader(headerElement);
      }
    };
  }, [observeHeader, unobserveHeader, isAddLinkInputVisible]);

  useEffect(() => {
    const footerElement = footerRef.current;
    if (footerElement) {
      observe(footerElement);
    }
    return () => {
      if (footerElement) {
        unobserve(footerElement);
      }
    };
  }, [observe, unobserve, isAddLinkInputVisible]);

  const folderName =
    folderId === ALL_LINK_NAME
      ? ALL_LINK_NAME
      : folders?.find(({ id }) => id === folderId)?.name;

  const fetchUserFolders = async () => {
    const result = await getUserFolders();
    const { data } = result;
    setFolders(data);
  };

  const fetchUserLinks = async (id: string | number) => {
    const result = await getUserLinks(id);
    const { data } = result;
    setLinks(data);
    setFilteredLinks(data);
  };

  useEffect(() => {
    fetchUserFolders();
  }, []);

  useEffect(() => {
    if (!folderId) return;
    fetchUserLinks(folderId);
  }, [folderId]);

  const handleCloseButtonClick = () => {
    setKeyword("");
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const handleKeywordKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    const eventTarget = e.target as HTMLInputElement;
    setKeyword(eventTarget.value);
  };

  const filterByKeyword = () => {
    const filteredData = filteredLinks.filter((links) => {
      const { description, url, title } = links;
      const searchContent = `${description} ${url} ${title}`
        .toLowerCase()
        .split(" ")
        .join("");
      return searchContent.includes(keyword.toLowerCase().split(" ").join(""));
    });
    if (filteredData?.length > 0) {
      setFilteredLinks(() => filteredData);
    } else {
      setIsResultEmpty(true);
    }
  };
  useEffect(() => {
    if (!keyword) {
      fetchUserLinks(folderId);
      setIsResultEmpty(false);
      return;
    }
    filterByKeyword();
  }, [keyword]);

  return (
    <div className="folder-container">
      <header className="folder-header" ref={headerRef}>
        <AddLinkInput folders={folders} />
      </header>
      <main className="folder-main">
        <SearchBar
          onKeyUp={handleKeywordKeyUp}
          onClick={handleCloseButtonClick}
          inputRef={inputRef}
          onSubmit={filterByKeyword}
        />
        {keyword === "" ? null : <p>{`${keyword}`}으로 검색한 결과입니다.</p>}
        <section className="folder-content-section">
          <div className="folder-sort-add-buttons-container">
            <div className="folder-sort-buttons-container">
              <SortButton
                onClick={() => setFolderId(ALL_LINK_NAME)}
                isClicked={folderId === ALL_LINK_NAME}
                text="전체"
              />
              {folders &&
                folders.map((item) => (
                  <SortButton
                    key={item.id}
                    onClick={() => setFolderId(item.id)}
                    isClicked={item.id === folderId}
                    text={item.name}
                  />
                ))}
            </div>
            <button type="button" className="folder-add-button" onClick={open}>
              폴더 추가
              <img
                src={addPrimaryIcon}
                alt="add-icon"
                className="folder-add-icon"
              />
            </button>
            <Dialog onClick={close} isModalOpen={isModalOpen}>
              <Dialog.Title>폴더 추가</Dialog.Title>
              <Dialog.Input value="" />
              <Dialog.Button isAddButton>추가하기</Dialog.Button>
            </Dialog>
          </div>
          <div className="folder-category-container">
            <h1 className="folder-category">{folderName}</h1>
            <div className="folder-option-button-container">
              {folderName !== ALL_LINK_NAME
                ? OPTION_ICONS.map((item) => (
                    <OptionButton
                      key={item.id}
                      name={item.name}
                      alt={item.alt}
                      iconSrc={item.iconSrc}
                      folderName={folderName}
                      folderId={folderId}
                    />
                  ))
                : null}
            </div>
          </div>
        </section>
        {links?.length === 0 || isResultEmpty ? (
          <EmptyPage />
        ) : (
          <div className="links-container" ref={linksRef}>
            {filteredLinks &&
              filteredLinks.map((item) => (
                <Card folders={folders} key={item.id} linkInfo={item} />
              ))}
          </div>
        )}
        <div className="floating-action-button-container">
          <FloatingButton iconSrc={addIcon}>폴더 추가</FloatingButton>
        </div>
        <div className="footer-target" ref={footerRef}></div>
        <div className="floating-searchbar-container" ref={addLinkInputRef}>
          {isAddLinkInputVisible ? (
            <div className="floating-addlink-container">
              <AddLinkInput folders={folders} />
            </div>
          ) : null}
        </div>
      </main>
    </div>
  );
}

export default FolderPage;
