import { Card, ModalForm, Modal } from "@/components";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/display";
import useModal from "@/public/useModal";
import AddImg from "@/src/assets/add.svg";
import * as S from "./CardContainer.style";
import { Link } from "@/pages/shared";
import { Folders } from "@/components/FolderArticle/FolderArticle";

interface Props {
  items: Link[] | undefined;
  active?: Folders;
}

export default function CardContainer({ items, active }: Props) {
  const { isOpen, openModal, closeModal } = useModal();
  const option = { input: true, button: { title: "추가하기", color: "blue" } };

  const handleButtonClick = () => {
    openModal();
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <S.Container>
          {items && items.map((link) => <Card link={link} key={link.id} />)}
        </S.Container>
        {active && (
          <S.Button onClick={handleButtonClick}>
            폴더 추가 <AddImg alt="폴더추가" fill="#e7effb" />
          </S.Button>
        )}
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
