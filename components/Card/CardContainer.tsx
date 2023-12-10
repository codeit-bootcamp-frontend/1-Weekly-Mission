import { Card, ModalForm, Modal } from '@/components';
import { ThemeProvider } from 'styled-components';
import theme from '@/styles/display';
import useModal from '@/public/useModal';
import AddImg from '@/src/assets/addwhite.svg';
import { Link } from '@/pages/shared';
import { Folders } from '@/components/FolderArticle/FolderArticle';
import * as Style from './CardContainer.style';
import Image from 'next/image';

interface Props {
  items: Link[] | undefined;
  folders?: Folders;
}

export default function CardContainer({ items, folders }: Props) {
  const { isOpen, openModal, closeModal } = useModal();
  const option = { input: true, button: { title: '추가하기', color: 'blue' } };

  const handleButtonClick = () => {
    openModal();
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Style.Container>
          {items?.map((link) => <Card link={link} key={link.id} />)}
        </Style.Container>
        {folders ? (
          <Style.Button onClick={handleButtonClick}>
            폴더 추가 <Image src={AddImg} alt="폴더추가" />
          </Style.Button>
        ) : null}
      </ThemeProvider>
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
