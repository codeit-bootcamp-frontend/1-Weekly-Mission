import { useState } from "react";
import * as S from "./FolderStyles";

import Layout from "@/components/layout/Layout";
import CardList from "@/components/card/CardList";
import ModalPortal from "@/components/ModalPortal";
import ModalContainer from "@/components/modal/ModalContainer";
import AddFolders from "@/components/modal/AddFolders";
import FolderHero from "@/components/hero/HeroAboutFolder";
import Searchbar from "@/components/inputs/Searchbar";
import Categories from "@/components/Categories";
import Loading from "@/components/Loading";
import Options from "@/components/Options";

import { FolderUIProps } from "./FolderTypes";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function FolderUI(props: FolderUIProps) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { ref, isIntersecting } = useIntersectionObserver<HTMLDivElement>();
  const handleCloseModal = () => setIsOpenModal(false);

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
          onChangeAddLink={props.handleAddLink}
          addLinkValue={props.addLinkValue}
          isFixedInput={isIntersecting}
        />
        <S.Contents>
          <Searchbar
            keyword={props.keyword}
            handleOnChangeInput={props.handleOnChangeInput}
            handleDelete={props.handleDeletekeyword}
          />
          {props.keyword && (
            <S.SearchInfo>
              <S.SearchKeyword>{props.keyword}</S.SearchKeyword>
              으로 검색한 결과입니다.
            </S.SearchInfo>
          )}
          <S.MenuContainer>
            <Categories
              categories={["전체", ...props.folderNames]}
              selected={props.selected}
              onClick={props.handleSelectedFolder}
            />
            <S.AddFolderBtn onClick={() => setIsOpenModal(true)}>
              <span>폴더 추가</span>
              <S.IconAdd />
            </S.AddFolderBtn>
          </S.MenuContainer>
          {props.isLoading && <Loading />}
          {!props.isLoading && props.links.length === 0 ? (
            <S.Blank>저장된 링크가 없습니다</S.Blank>
          ) : (
            <>
              <S.MenuContainer>
                <S.SubTitle>{props.selected}</S.SubTitle>
                {props.selected !== "전체" && <Options selected={props.selected} />}
              </S.MenuContainer>
              <CardList links={props.links} />
            </>
          )}
        </S.Contents>
      </Layout>
    </>
  );
}
