import { ChangeEvent, useContext, useEffect, useState } from "react";
import useFetch from "hooks/useFetch";

import * as S from "./FolderStyle";
import { getAllFolders, getAllLinks } from "api/api";
import { FolderContext } from "context/FolderContext";

import CardList from "components/card/CardList";
import Loading from "components/Loading";
import Searchbar from "components/inputs/Searchbar";
import FolderHero from "components/hero/HeroAboutFolder";
import Categories from "components/Categories";
import Options from "components/Options";
import ModalContainer from "components/modal/ModalContainer";
import AddFolders from "components/modal/AddFolders";
import ModalPortal from "components/ModalPortal";

import { FolderData, LinkData } from "types/folder";

const DEFAULT = "전체";
const USER_ID = 1;

export default function Folder() {
  const [links, setLinks] = useState<LinkData[]>([]);
  const [filteredLinks, setFilteredLinks] = useState<LinkData[]>([]);
  const [folders, setFolders] = useState<FolderData[]>([]);
  const [selected, setSelected] = useState(DEFAULT);
  const [selectedFolderId, setSelectedFolderId] = useState("");
  const [isOpenModal, setIsOpenModal] = useState(false);
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
    setFilteredLinks(searchedLinks.length !== 0 ? searchedLinks : links);
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

  useEffect(() => {
    handleLoadedData();
  }, [selectedFolderId]);

  if (error || errorFolder) console.log(error || errorFolder);

  return (
    <>
      {isOpenModal && (
        <ModalPortal>
          <ModalContainer onClose={() => setIsOpenModal(false)}>
            <AddFolders />
          </ModalContainer>
        </ModalPortal>
      )}

      <main>
        <S.HeroContainer>
          <FolderHero onChangeAddLink={handleAddLink} addLinkValue={addLinkValue} />
        </S.HeroContainer>
        <S.Contents>
          <Searchbar handleOnChangeInput={handleOnChangeInput} />
          <S.MenuContainer>
            <Categories
              categories={[DEFAULT, ...folderNames]}
              selected={selected}
              onClick={handleSelectedFolder}
            />
            <S.AddFolderBtn onClick={() => setIsOpenModal(true)}>
              <span>폴더 추가</span>
              <S.IconAdd />
            </S.AddFolderBtn>
          </S.MenuContainer>
          {isLoading && <Loading />}
          {!isLoading && links.length === 0 ? (
            <S.Blank>저장된 링크가 없습니다</S.Blank>
          ) : (
            <>
              <S.MenuContainer>
                <S.SubTitle>{selected}</S.SubTitle>
                {selected !== DEFAULT && <Options selected={selected} />}
              </S.MenuContainer>
              <CardList links={filteredLinks} />
            </>
          )}
        </S.Contents>
      </main>
    </>
  );
}
