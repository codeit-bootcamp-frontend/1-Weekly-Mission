import { useState, useEffect, useCallback, MouseEvent } from 'react';
import search from '../img/search.svg';
import { getData } from '../../api';
import * as FM from '../styled-component/FolderMainStyledComponent';
import * as C from '../styled-component/CardStyledComponent';
import * as S from '../styled-component/SharedPageStyledComponent';
import plusImg from '../img/plus.svg';
import shareImg from '../img/share.svg';
import penImg from '../img/pen.svg';
import deleteImg from '../img/delete.svg';
import FolderCard from './FolderCard';
import plus from '../img/plus-white.svg';
import FolderPlusModal from '../modal/FolderPlusModal';
import FolderDeleteModal from '../modal/FolderDeleteModal';
import FolderShareModal from '../modal/FolderShareModal';

const activeButton = {
  color: 'white',
  backgroundColor: '#6d6afe',
};

export interface foldersProps {
  id: number;
  created_at: string;
  name: string;
  user_id: number;
  link: { count: number };
}

interface linksProps {
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
  const [folders, setFolders] = useState<foldersProps[]>([]);
  const [links, setLinks] = useState<linksProps[]>([]);
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
    setTitle(target.textContent as string);
    const id = target.name;
    setFolerId(id);
    handleLoad(id);
  };

  const onClickModal = (e: MouseEvent<HTMLButtonElement>) => {
    try {
      const target = e.currentTarget;
      setValue(target.textContent as string);
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
      setValue(target.textContent as string);
    } catch {}
    setOnDeleteModal(!onDeleteModal);
  };

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);

  useEffect(() => {
    console.log(folders);
  });
  return (
    <FM.FolderContainer>
      <FM.FolderSearch>
        <img src={search} alt="search" />
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
          <img src={plusImg} alt="plugImg" />
        </FM.FolderPlusButton>
      </FM.FolderWrapper>
      <C.CardButton onClick={onClickModal} value="폴더 추가">
        <C.CardButtonDiv>
          <div>폴더추가</div>
          <img src={plus} alt="plusImg" />
        </C.CardButtonDiv>
      </C.CardButton>
      <FM.UsefulWrapper>
        <FM.Useful>{title}</FM.Useful>
        {title !== '전체' && (
          <FM.UsefulImgDiv>
            <FM.UsefulButton onClick={onClickShareModal} value="공유">
              <img src={shareImg} alt="shareImg" />
              <span>공유</span>
            </FM.UsefulButton>
            <FM.UsefulButton onClick={onClickModal} value="이름 변경">
              <img src={penImg} alt="penImg" />
              <span>이름 변경</span>
            </FM.UsefulButton>
            <FM.UsefulButton onClick={onClickDeleteModal} value="삭제">
              <img src={deleteImg} alt="deleteImg" />
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
