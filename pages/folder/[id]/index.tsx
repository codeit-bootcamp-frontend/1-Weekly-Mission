import { useRouter } from "next/router";
import { ChangeEvent, useContext, useState } from "react";
import useSWR from "swr";
import * as S from "../FolderStyles";

import Layout from "@/components/layout/Layout";
import ModalPortal from "@/components/ModalPortal";
import AddFolders from "@/components/modal/AddFolders";
import ModalContainer from "@/components/modal/ModalContainer";
import FolderHero from "@/components/hero/HeroAboutFolder";
import Searchbar from "@/components/inputs/Searchbar";
import Categories from "@/components/Categories";
import CardList from "@/components/card/CardList";
import Options from "@/components/Options";
import Loading from "@/components/Loading";

import { useFolder } from "@/hooks/useFolder";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { LinkData, SharedFolderData } from "@/types/folder";
import { FolderContext } from "@/context/SelectedFolderContext";

export default function FolderPage() {
  const router = useRouter();
  const { selectedFolderName, updateFolderName } = useContext(FolderContext);
  const { ref, isIntersecting } = useIntersectionObserver<HTMLDivElement>();

  const [selected, setSelected] = useState(selectedFolderName);
  const [addLinkValue, setAddLinkValue] = useState("");
  const [keyword, setKeyword] = useState("");
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [filteredLinks, setFilteredLinks] = useState<LinkData[]>([]);

  const { data: foldersData, isLoading } = useFolder("/folders");
  const { data: linksData } = useSWR(`/folders/${router.query.id}/links`);

  const folders: SharedFolderData[] = foldersData ?? [];
  const links: LinkData[] = linksData ?? [];

  const folderNames = folders.map((folder) => folder.name);

  const handleAddLink = (link: string) => {
    setAddLinkValue(link);
  };

  const handleCloseModal = () => setIsOpenModal(false);

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
    const selectedFolderId =
      folders.find((folder: SharedFolderData) => folder.name === category)?.id ?? "";
    updateFolderName(category);
    router.push(`/folder/${selectedFolderId}`);
  };

  return (
    <>
      {isOpenModal && (
        <ModalPortal>
          <ModalContainer onClose={handleCloseModal}>
            <AddFolders />
          </ModalContainer>
        </ModalPortal>
      )}

      <Layout footerRef={ref}>
        <FolderHero
          onChangeAddLink={handleAddLink}
          addLinkValue={addLinkValue}
          isFixedInput={isIntersecting}
        />
        <S.Contents>
          <Searchbar
            keyword={keyword}
            handleOnChangeInput={handleOnChangeInput}
            handleDelete={handleDeletekeyword}
          />
          {keyword && (
            <S.SearchInfo>
              <S.SearchKeyword>{keyword}</S.SearchKeyword>
              으로 검색한 결과입니다.
            </S.SearchInfo>
          )}
          <S.MenuContainer>
            <Categories
              categories={["전체", ...folderNames]}
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
                {selected !== "전체" && <Options selected={selected} />}
              </S.MenuContainer>
              <CardList links={filteredLinks} />
            </>
          )}
        </S.Contents>
      </Layout>
    </>
  );
}
