import * as S from "./FolderStyle";

import CardList from "components/card/CardList";
import Loading from "components/Loading";
import Searchbar from "components/inputs/Searchbar";
import FolderHero from "components/hero/HeroAboutFolder";
import Categories from "components/Categories";
import Options from "components/Options";
import ModalContainer from "components/modal/ModalContainer";
import AddFolders from "components/modal/AddFolders";
import ModalPortal from "components/ModalPortal";

import { useState } from "react";

import { FolderUIProps } from "./FolderTypes";
import { DEFAULT } from "./FolderContainer";

const [isOpenModal, setIsOpenModal] = useState(false);

export default function FolderUI(props: FolderUIProps) {
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
          <FolderHero onChangeAddLink={props.handleAddLink} addLinkValue={props.addLinkValue} />
        </S.HeroContainer>
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
              categories={[DEFAULT, ...props.folderNames]}
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
                {props.selected !== DEFAULT && <Options selected={props.selected} />}
              </S.MenuContainer>
              <CardList links={props.filteredLinks} />
            </>
          )}
        </S.Contents>
      </main>
    </>
  );
}
