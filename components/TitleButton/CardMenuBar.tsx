import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { CardButton, MenuTitle, Modal, ModalForm } from '@/components';
import useModal from '@/public/useModal';
import AddPurpleImg from '@/src/assets/addpurple.svg';
import { FolderContext } from '../FolderArticle/FolderArticle';
import * as Style from './CardMenuBar.style';

export default function CardMenuBar() {
  const folders = useContext(FolderContext);
  const router = useRouter();
  const { id } = router.query;

  const option = { input: true, button: { title: '추가하기', color: 'blue' } };
  const { isOpen, openModal, closeModal } = useModal();
  const [selectedFolder, setSelectedFolder] = useState(
    id ? parseInt(id) : null
  );

  const ChangeTitle = () => {
    if (!id) {
      setSelectedFolder(null);
      return;
    }
    const matchedFolder = folders?.find((folder) => folder.id === parseInt(id));

    if (matchedFolder) {
      setSelectedFolder(matchedFolder.name);
    } else {
      setSelectedFolder('폴더를 찾을 수 없음');
    }
  };

  const handleButtonClick = () => {
    openModal();
  };

  useEffect(() => {
    ChangeTitle();
  }, [id]);

  return (
    <>
      <Style.Container>
        <Style.Ul>
          <Link href="/folder">
            <li>
              <Style.Button active={selectedFolder === null}>전체</Style.Button>
            </li>
          </Link>
          {folders?.map((folder) => (
            <CardButton folder={folder} key={folder.id} folderId={id} />
          ))}
        </Style.Ul>
        <span onClick={handleButtonClick}>
          폴더 추가
          <Image src={AddPurpleImg} alt="폴더추가" />
        </span>
      </Style.Container>
      <MenuTitle title={selectedFolder ? selectedFolder : '전체'} />
      {isOpen && (
        <Modal
          title="폴더추가"
          closeModal={closeModal}
          trigger={<ModalForm subTitle="내용입력" option={option} />}
        />
      )}
    </>
  );
}
