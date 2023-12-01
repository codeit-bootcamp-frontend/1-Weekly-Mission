import { ChangeEvent, useContext, useEffect, useRef, useState } from "react";
import useFetch from "@/hooks/useFetch";

import { getAllFolders, getAllLinks } from "@/common/api";
// import { FolderContext } from "context/FolderContext";

// import FolderUI from "./FolderPresenter";
import { FolderData, LinkData } from "@/types/folder";
import FolderUI from "./FolderPresenter";

export const DEFAULT = "전체";
const USER_ID = 1;

export default function Folder() {
  const addLinkHeroRef = useRef(null);
  const bottomDivRef = useRef(null);

  const [isVisibleHero, setIsVisibleHero] = useState(false);
  const [isIntersect, setIsIntersect] = useState(true);
  const [links, setLinks] = useState<LinkData[]>([]);
  const [filteredLinks, setFilteredLinks] = useState<LinkData[]>([]);
  const [folders, setFolders] = useState<FolderData[]>([]);
  const [selected, setSelected] = useState(DEFAULT);
  const [selectedFolderId, setSelectedFolderId] = useState("");
  const [addLinkValue, setAddLinkValue] = useState("");
  const [keyword, setKeyword] = useState("");

  const { isLoading, error, wrappedFunction: getLinksAsyncFunc } = useFetch(getAllLinks);
  const { error: errorFolder, wrappedFunction: getFoldersAsyncFunc } = useFetch(getAllFolders);

  // const { handleFolderUpdate } = useContext(FolderContext);

  const handleOnChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
    const searchedLinks = checkMatchedAllLinks(e.target.value, links);
    setFilteredLinks(searchedLinks.length !== 0 ? searchedLinks : []);
  };

  const handleDeletekeyword = () => {
    setKeyword("");
    setFilteredLinks(links);
  };

  const checkMatchedAllLinks = (keyword: string, links: LinkData[]) => {
    const filteredLinks = links.filter((link) => {
      return (
        (link.title && link.title.includes(keyword)) ||
        (link.description && link.description.includes(keyword)) ||
        (link.url && link.url.includes(keyword))
      );
    });
    return filteredLinks;
  };

  const handleSelectedFolder = (category: string) => {
    setSelected(category);
    changeFolderId(category);
  };

  const changeFolderId = (category: string) => {
    const selectedFolder = folders.find((folder: FolderData) => folder.name === category);
    const selectedId = selectedFolder ? String(selectedFolder.id) : "";
    setSelectedFolderId(selectedId);
  };

  const handleLoadedData = async () => {
    const { data: linkData } = await getLinksAsyncFunc(USER_ID, selectedFolderId);
    const { data: folderData } = await getFoldersAsyncFunc(USER_ID);

    setLinks(linkData);
    setFilteredLinks(linkData);
    setFolders(folderData);
    // updateFolderList(folderData);
  };

  // const updateFolderList = (data: FolderData[]) => {
  //   handleFolderUpdate(data);
  // };

  const folderNames = folders.map((folder) => folder.name);

  const handleAddLink = (link: string) => {
    setAddLinkValue(link);
  };

  useEffect(() => {
    handleLoadedData();

    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) {
        if (entries[0].intersectionRatio < 1) {
          // 검색바를 원래 위치에 고정
          setIsVisibleHero(false);
        }
      } else {
        // 검색바를 화면 최하단에 위치고정
        setIsVisibleHero(true);
        setIsIntersect(false);
      }
    };

    const handleFixedObserver = (entries: IntersectionObserverEntry[]) => {
      if (isIntersect) return; // 초기 콜백함수 실행 제어

      if (entries[0].isIntersecting) {
        if (entries[0].intersectionRatio === 1) {
          // 검색바를 원래 위치에 고정
          setIsVisibleHero(false);
          setIsIntersect(false);
        }
      } else {
        // 검색바를 화면 최하단에 위치고정
        setIsVisibleHero(true);
        setIsIntersect(true);
      }
    };

    const observer = new IntersectionObserver(handleObserver, { threshold: 0 });
    const observerFixedTarget = new IntersectionObserver(handleFixedObserver, {
      threshold: 1,
    });

    if (bottomDivRef.current) {
      observerFixedTarget.observe(bottomDivRef.current);
    }

    if (addLinkHeroRef.current) {
      observer.observe(addLinkHeroRef.current);
    }

    return () => {
      observer.disconnect();
      observerFixedTarget.disconnect();
    };
  }, [selectedFolderId, isIntersect]);

  if (error || errorFolder) console.log(error || errorFolder);

  return (
    <FolderUI
      target={addLinkHeroRef}
      fixedTarget={bottomDivRef}
      addLinkValue={addLinkValue}
      isVisibleHero={isVisibleHero}
      keyword={keyword}
      selected={selected}
      isLoading={isLoading}
      folderNames={folderNames}
      links={links}
      filteredLinks={filteredLinks}
      handleAddLink={handleAddLink}
      handleOnChangeInput={handleOnChangeInput}
      handleDeletekeyword={handleDeletekeyword}
      handleSelectedFolder={handleSelectedFolder}
    />
  );
}
