import { ChangeEvent, useContext, useEffect, useRef, useState } from "react";
import useFetch from "hooks/useFetch";

import { getAllFolders, getAllLinks } from "api/api";
import { FolderContext } from "context/FolderContext";

import FolderUI from "./FolderPresenter";
import { FolderData, LinkData } from "types/folder";

export const DEFAULT = "전체";
const USER_ID = 1;

const options = {
  root: null,
  rootMain: "0px",
  threshold: 0, // 단계별 콜백함수 호출
};

export default function Folder() {
  const addLinkHeroRef = useRef(null);

  const [isVisibleHero, setIsVisibleHero] = useState(true);
  const [links, setLinks] = useState<LinkData[]>([]);
  const [filteredLinks, setFilteredLinks] = useState<LinkData[]>([]);
  const [folders, setFolders] = useState<FolderData[]>([]);
  const [selected, setSelected] = useState(DEFAULT);
  const [selectedFolderId, setSelectedFolderId] = useState("");
  const [addLinkValue, setAddLinkValue] = useState("");
  const [keyword, setKeyword] = useState("");

  const { isLoading, error, wrappedFunction: getLinksAsyncFunc } = useFetch(getAllLinks);
  const { error: errorFolder, wrappedFunction: getFoldersAsyncFunc } = useFetch(getAllFolders);

  const { handleFolderUpdate } = useContext(FolderContext);
  /**
   * 검색바 구현 todo
   * 1. keyword 상태 useState
   * 2. onChange / onKeyUp 이벤트시 setState에 저장
   * 3. state가 변할때마다 필터하는 로직 구현하기
   * 4. 리팩토링 - 디바운싱
   * 5. share 컴포넌트랑 공유할 수 있도록 재사용성 고려
   * 6. x 버튼 - 클릭시 로직 구현하기
   */

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
    updateFolderList(folderData);
  };

  const updateFolderList = (data: FolderData[]) => {
    handleFolderUpdate(data);
  };

  const folderNames = folders.map((folder) => folder.name);

  const handleAddLink = (link: string) => {
    setAddLinkValue(link);
  };

  /**
   * Observer 구현 Todo
   * 1. Observer 연결
   * 2. 검색바 보여짐에 따른 조건 분리
   * 3. 조건에 따른 스타일 변경 -> 검색바가 최하단으로
   * 4. footer에 진입시에는 최하단에 위치한 검색바가 보이지 않게
   * 4-1. hero부분 스타일 바꿀지 vs 새로운 div 생성할지(display)
   * 5. 로직 분리 리팩토링 (useEffect, custon hooks)
   */
  useEffect(() => {
    handleLoadedData();

    const observer = new IntersectionObserver((entries) => {
      console.log(entries[0].isIntersecting); // 삭제예정

      if (entries[0].isIntersecting) {
        if (entries[0].intersectionRatio < 1) {
          // 검색바를 원래 위치에 고정
          console.log("관찰대상에 들어옴");
          setIsVisibleHero(true);
        }
      } else {
        // 검색바를 화면 최하단에 위치고정
        console.log("관찰대상에서 벗어남");
        setIsVisibleHero(false);
      }
    }, options);

    if (addLinkHeroRef.current) {
      observer.observe(addLinkHeroRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [selectedFolderId]);

  if (error || errorFolder) console.log(error || errorFolder);

  return (
    <FolderUI
      target={addLinkHeroRef}
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
