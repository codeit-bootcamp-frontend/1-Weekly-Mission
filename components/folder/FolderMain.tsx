import { useState, useEffect, useCallback, MouseEvent } from 'react';
import { getData } from '../../pages/api/api';
import * as FM from '../styled-component/FolderMainStyledComponent';
import * as C from '../styled-component/CardStyledComponent';
import * as S from '../styled-component/SharedPageStyledComponent';
import FolderCard from './FolderCard';
import FolderPlusModal from '../modal/FolderPlusModal';
import FolderDeleteModal from '../modal/FolderDeleteModal';
import FolderShareModal from '../modal/FolderShareModal';
import Image from 'next/image';
import styled from 'styled-components';

export interface FoldersProps {
  id: number;
  created_at: string;
  name: string;
  user_id: number;
  link: { count: number };
}

export interface LinksProps {
  id: number;
  created_at: string;
  updated_at: null;
  url: string;
  title: string;
  description: string;
  image_source: string;
  folder_id: number;
}

export default function FolderMain() {
  const [folders, setFolders] = useState<FoldersProps[]>([]);
  const [links, setLinks] = useState<LinksProps[]>([]);
  const [title, setTitle] = useState('전체');
  const [onModal, setOnModal] = useState(false);
  const [onDeleteModal, setOnDeleteModal] = useState(false);
  const [onShareModal, setOnShareModal] = useState(false);
  const [value, setValue] = useState('');
  const [folderId, setFolerId] = useState('');

  const handleLoad = useCallback(async (id = '') => {
    const { data } = await getData('users/1/folders');
    const link = await getData('users/1/links?folderId=', id);
    setFolders(data);
    setLinks(link.data);
  }, []);

  const handleFolderList = async (e: MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget;
    setTitle(target.textContent ?? '');
    const id = target.name;
    setFolerId(id);
    handleLoad(id);
  };

  const onClickModal = (e: MouseEvent<HTMLButtonElement>) => {
    try {
      const target = e.currentTarget;
      setValue(target.textContent ?? '');
    } catch {}
    setOnModal(!onModal);
  };

  const onClickCloseModal = () => {
    setOnModal(!onModal);
  };

  const onClickDeleteCloseModal = () => {
    setOnDeleteModal(!onDeleteModal);
  };

  const onClickShareModal = () => {
    setOnShareModal(!onShareModal);
  };

  const onClickDeleteModal = (e: MouseEvent<HTMLButtonElement>) => {
    try {
      const target = e.currentTarget;
      setValue(target.textContent ?? '');
    } catch {}
    setOnDeleteModal(!onDeleteModal);
  };

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);

  return (
    <FM.FolderContainer>
      <FM.FolderSearch>
        <SearchDiv>
          <Image src="/search.svg" fill alt="search" />
        </SearchDiv>
        <FM.SearchDivInput placeholder="링크를 검색해 보세요." />
      </FM.FolderSearch>
      <FM.FolderWrapper>
        <FM.FolderDIv>
          <FM.Button
            onClick={handleFolderList}
            style={title === '전체' ? activeButton : undefined}
          >
            전체
          </FM.Button>
          {folders?.map((item) => (
            <FM.Button
              style={title === item.name ? activeButton : undefined}
              name={`${item.id}`}
              key={item.id}
              onClick={handleFolderList}
            >
              {item.name}
            </FM.Button>
          ))}
        </FM.FolderDIv>
        <FM.FolderPlusButton onClick={onClickModal} value="폴더 추가">
          <div>폴더추가</div>
          <PlusImgDiv>
            <Image src="/plus.svg" fill alt="plugImg" />
          </PlusImgDiv>
        </FM.FolderPlusButton>
      </FM.FolderWrapper>
      <C.CardButton onClick={onClickModal} value="폴더 추가">
        <C.CardButtonDiv>
          <div>폴더추가</div>
          <PlusWhiteImageDiv>
            <Image src="/plus-white.svg" fill alt="plusImg" />
          </PlusWhiteImageDiv>
        </C.CardButtonDiv>
      </C.CardButton>
      <FM.UsefulWrapper>
        <FM.Useful>{title}</FM.Useful>
        {title !== '전체' && (
          <FM.UsefulImgDiv>
            <FM.UsefulButton onClick={onClickShareModal} value="공유">
              <ShareImgDiv>
                <Image src="/share.svg" fill alt="shareImg" />
              </ShareImgDiv>
              <span>공유</span>
            </FM.UsefulButton>
            <FM.UsefulButton onClick={onClickModal} value="이름 변경">
              <PenImgDiv>
                <Image src="/pen.svg" fill alt="penImg" />
              </PenImgDiv>
              <span>이름 변경</span>
            </FM.UsefulButton>
            <FM.UsefulButton onClick={onClickDeleteModal} value="삭제">
              <DeleteImgDiv>
                <Image src="/delete.svg" fill alt="deleteImg" />
              </DeleteImgDiv>
              <span>삭제</span>
            </FM.UsefulButton>
          </FM.UsefulImgDiv>
        )}
      </FM.UsefulWrapper>
      <S.MainContentWrapper>
        {links[0] &&
          links.map((link) => <FolderCard key={link.id} item={link} />)}
      </S.MainContentWrapper>
      {!links[0] && <FM.NoLink>저장된 링크가 없습니다.</FM.NoLink>}
      {onModal && (
        <FolderPlusModal
          handleClick={onClickCloseModal}
          title={title}
          value={value}
        />
      )}
      {onDeleteModal && (
        <FolderDeleteModal
          handleClick={onClickDeleteCloseModal}
          title={title}
          value={value}
          cardLink={''}
        />
      )}
      {onShareModal && (
        <FolderShareModal
          handleClick={onClickShareModal}
          title={title}
          id={folderId}
        />
      )}
    </FM.FolderContainer>
  );
}

const activeButton = {
  color: 'white',
  backgroundColor: '#6d6afe',
};

const SearchDiv = styled.div`
  position: relative;
  width: 16px;
  height: 16px;
`;

const PlusImgDiv = styled.div`
  position: relative;
  width: 16px;
  height: 16px;
`;

const ShareImgDiv = styled.div`
  position: relative;
  width: 18px;
  height: 18px;
`;

const PenImgDiv = styled.div`
  position: relative;
  width: 18px;
  height: 18px;
`;

const DeleteImgDiv = styled.div`
  position: relative;
  width: 15px;
  height: 16px;
`;

const PlusWhiteImageDiv = styled.div`
  position: relative;
  width: 16px;
  height: 16px;
`;
