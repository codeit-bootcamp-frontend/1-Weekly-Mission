import { useContext } from 'react';
import Image from 'next/image';
import { Card, ModalForm, Modal } from '@/components';
import useModal from '@/public/useModal';
import AddImg from '@/src/assets/addwhite.svg';
import { Link } from '@/pages/shared';
import { FolderContext } from '@/components/FolderArticle/FolderArticle';
import * as Style from './CardContainer.style';

interface Props {
  items: Link[] | undefined;
}

export default function CardContainer({ items }: Props) {
  const folders = useContext(FolderContext);
  const { isOpen, openModal, closeModal } = useModal();
  const option = { input: true, button: { title: '추가하기', color: 'blue' } };

  const handleButtonClick = () => {
    openModal();
  };

  return (
    <>
      <Style.Container>
        {items?.map((link) => (
          <Card link={link} key={link.id} />
        ))}
      </Style.Container>
      {folders ? (
        <Style.Button onClick={handleButtonClick}>
          폴더 추가 <Image src={AddImg} alt="폴더추가" />
        </Style.Button>
      ) : null}
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
