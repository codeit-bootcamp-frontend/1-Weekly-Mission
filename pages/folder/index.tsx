import styles from "./folderPage.module.css";
import { KeyboardEvent, useEffect, useRef, useState } from "react";
import { getUserLinks } from "../api/folder";
import AddLinkInput from "./components/addLinkInput/AddLinkInput";
import SearchBar from "@/components/searchBar/SearchBar";
import Card from "@/components/card/Card";
import EmptyPage from "./components/emptyPage/EmptyPage";
import OptionButton from "./components/optionButton/OptionButton";
import FloatingButton from "@/components/floatingButton/FloatingButton";
import { ALL_LINK_NAME, OPTION_ICONS } from "./constant";

import addIcon from "@/public/icons/add.svg";
import addPrimaryIcon from "@/public/icons/addPrimaryColor.svg";
import SortButton from "./components/sortButton/SortButton";
import useModal from "@/hooks/useModal";
import { FolderName, LinkInfo } from "@/types/types";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import Image from "next/image";
import axios from "axios";
import { BASE_URL, USERS_ENDPOINT } from "../api/services/config";

export async function getStaticProps() {
  const res = await axios.get(`${BASE_URL}${USERS_ENDPOINT}/1/folders`);
  const folders: FolderName[] = res.data.data;

  return {
    props: {
      folders,
    },
  };
}

function FolderPage({ folders }: { folders: FolderName[] }) {
  const [links, setLinks] = useState<LinkInfo[]>([]);
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

    return () => {
      if (headerElement) {
        unobserveHeader(headerElement);
      }
    };
  }, [observeHeader, unobserveHeader, headerRef.current]);

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

  const fetchUserLinks = async (id: string | number) => {
    const result = await getUserLinks(id);
    const { data } = result;
    setLinks(data);
    setFilteredLinks(data);
  };

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
    <div className={styles.folderContainer}>
      <header className={styles.folderHeader} ref={headerRef}>
        <AddLinkInput folders={folders} />
      </header>
      <main className={styles.folderMain}>
        <SearchBar
          onKeyUp={handleKeywordKeyUp}
          onClick={handleCloseButtonClick}
          inputRef={inputRef}
          onSubmit={filterByKeyword}
        />
        {keyword === "" ? null : <p>{`${keyword}`}으로 검색한 결과입니다.</p>}
        <section className={styles.folderContentSection}>
          <div className={styles.folderSortAddButtonsContainer}>
            <div className={styles.folderSortButtonsContainer}>
              <SortButton
                onClick={() => setFolderId(ALL_LINK_NAME)}
                isClicked={folderId === ALL_LINK_NAME}
                text="전체"
              />
              {folders?.map((item) => (
                <SortButton
                  key={item.id}
                  onClick={() => setFolderId(item.id)}
                  isClicked={item.id === folderId}
                  text={item.name}
                />
              ))}
            </div>
            <button
              type="button"
              className={styles.folderAddButton}
              onClick={open}
            >
              폴더 추가
              <Image
                src={addPrimaryIcon}
                alt="add-icon"
                className={styles.folderAddIcon}
                width={20}
                height={20}
              />
            </button>
            <Dialog onClick={close} isModalOpen={isModalOpen}>
              <Dialog.Title>폴더 추가</Dialog.Title>
              <Dialog.Input value="" />
              <Dialog.Button isAddButton>추가하기</Dialog.Button>
            </Dialog>
          </div>
          <div className={styles.folderCategoryContainer}>
            <h1 className={styles.folderCategory}>{folderName}</h1>
            <div className={styles.folderOptionButtonContainer}>
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
          <div className={styles.linksContainer} ref={linksRef}>
            {filteredLinks &&
              filteredLinks.map((item) => (
                <Card folders={folders} key={item.id} linkInfo={item} />
              ))}
          </div>
        )}
        <div className={styles.floatingActionButtonContainer}>
          <FloatingButton iconSrc={addIcon}>폴더 추가</FloatingButton>
        </div>
        <div className={styles.footerTarget} ref={footerRef}></div>
        <div
          className={styles.floatingSearchbarContainer}
          ref={addLinkInputRef}
        >
          {isAddLinkInputVisible ? (
            <div className={styles.floatingAddlinkContainer}>
              <AddLinkInput folders={folders} />
            </div>
          ) : null}
        </div>
      </main>
    </div>
  );
}

export default FolderPage;
