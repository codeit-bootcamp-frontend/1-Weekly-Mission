import { Card, ModalForm, Modal } from '@/components';
import { ThemeProvider } from 'styled-components';
import theme from '@/styles/display';
import useModal from '@/public/useModal';
import AddImg from '@/src/assets/add.svg';
import { Link } from '@/pages/shared';
import { Folders } from '@/components/FolderArticle/FolderArticle';
import * as Style from './CardContainer.style';

interface Props {
  items: Link[] | undefined;
  active?: Folders;
}

export default function CardContainer({ items, active }: Props) {
  console.log(active)
  const { isOpen, openModal, closeModal } = useModal();
  const option = { input: true, button: { title: '추가하기', color: 'blue' } };

  const handleButtonClick = () => {
    openModal();
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Style.Container>
          {items && items.map((link) => <Card link={link} key={link.id} />)}
        </Style.Container>
        {/* {active && (
          <Style.Button onClick={handleButtonClick}>
            폴더 추가 <AddImg alt="폴더추가" fill="#e7effb" />
          </Style.Button>
        )} */}
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
