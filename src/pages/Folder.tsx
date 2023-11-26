import { useEffect, useState, useCallback, useRef, ChangeEvent } from 'react';
import LinkAdd from '../components/Folder/LinkAdd';
import Search from '../components/common/Search';
import FolderList from '../components/Folder/FolderList';
import CardList from '../components/common/CardList';
import Option from '../components/Folder/Options';
import Modal from '../components/common/Modal';
import styled from 'styled-components';
import getData from '../services/api';
import { useOutletContext, useSearchParams } from 'react-router-dom';

const INIT_FOLDER = { data: [{ name: '전체' }] };

interface CurrentModal {
  name: string;
  link?: string;
}

interface CurrentFolder {
  id?: string | null;
  name: string;
}

interface OutletContext {
  urlPath: string;
  footerView: boolean;
}

interface Link {
  [key: string]: string;
}

export default function Folder() {
  const [userFolder, setUserFolder] = useState<any>(null);
  const [links, setLinks] = useState<any>();
  const [isOpen, setIsOpen] = useState(false);
  const [currentModal, setCurrentModal] = useState<CurrentModal>({
    name: '',
  });
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentFolder, setCurrentFolder] = useState<CurrentFolder>({
    name: '전체',
  });
  const [fixed, setFixed] = useState<boolean>(false);
  const [linkSearch, setLinkSearch] = useState<string>('');
  const [filteredLinks, setFilteredLinks] = useState<any>([]);
  const InputRef = useRef(null);
  const outletContext: OutletContext = useOutletContext();
  const { urlPath, footerView } = outletContext;
  const paramsId: string | null = searchParams.get('folderId');

  const getFolderData = useCallback(async () => {
    const { data } = await getData('users/1/folders');
    const linkData = await getData(
      `users/1/links?folderId${paramsId ? `=${paramsId}` : ''}`
    );
    let folderName = paramsId
      ? await getData(`users/1/folders/${paramsId}`)
      : INIT_FOLDER;

    const {
      data: [{ name }],
    } = folderName;
    setUserFolder(data);
    setLinks(linkData.data);
    setFilteredLinks(linkData.data);
    setCurrentFolder({ id: paramsId, name });
  }, [paramsId]);

  const handleCurrentFolder = ({ id }: any) => {
    setSearchParams({ folderId: id });
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLinkSearch(value);
    setFilteredLinks(linkFilter(value.toLowerCase()));
  };

  const linkFilter = (value: string) => {
    let filtered;
    if (value.length > 0) {
      filtered = links.filter((link: Link) => {
        return (
          link.title?.toLowerCase().includes(value) ||
          link.description?.toLowerCase().includes(value) ||
          link.url?.toLowerCase().includes(value)
        );
      });
    } else {
      return links;
    }
    return filtered;
  };

  const handleModalOpen = (name: string, link?: string) => {
    setIsOpen(true);
    setCurrentModal({ name, link });
  };

  const handleModalClose = () => {
    setIsOpen(false);
    setCurrentModal({ name: '' });
  };

  useEffect(() => {
    getFolderData();
  }, [getFolderData]);

  const isFixed = useCallback((entries: IntersectionObserverEntry[]) => {
    const target = entries[0];
    if (!target.isIntersecting) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  }, []);

  useEffect(() => {
    const inputIo = new IntersectionObserver(isFixed);

    if (InputRef.current) {
      inputIo.observe(InputRef.current);
    }
  }, [isFixed]);

  return (
    <Wrapper>
      <div ref={InputRef}>
        <LinkAdd fixed={false} />
      </div>
      <Container>
        <Search onInputChange={handleInputChange} value={linkSearch} />
        {userFolder ? (
          <div>
            <FolderList
              userFolder={userFolder}
              onCurrentFolder={handleCurrentFolder}
              onModalOpen={handleModalOpen}
              searchParams={searchParams}
            />
            <Option
              currentFolder={currentFolder}
              onModalOpen={handleModalOpen}
            />
            <CardList
              cards={filteredLinks}
              urlPath={urlPath}
              onModalOpen={handleModalOpen}
            />
          </div>
        ) : (
          <Div>저장된 폴더가 없습니다</Div>
        )}
      </Container>
      <Modal
        isOpen={isOpen}
        currentModal={currentModal}
        onModalClose={handleModalClose}
        currentFolder={currentFolder}
        userFolder={userFolder}
        path={paramsId}
      />
      {!footerView && fixed && (
        <Fix>
          <LinkAdd fixed={fixed} />
        </Fix>
      )}
    </Wrapper>
  );
}

const Div = styled.div`
  max-width: 1060px;
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  margin: 0 auto 100px;
`;

const Container = styled.div`
  padding: 0 32px;
`;

const Wrapper = styled.div`
  position: relative;
`;

const Fix = styled.div`
  position: fixed;
  z-index: 3;
  width: 100%;
  bottom: 0;
`;
