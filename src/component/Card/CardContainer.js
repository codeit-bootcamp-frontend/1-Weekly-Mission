import { Card, ModalForm, Modal } from "component";
import { ThemeProvider } from "styled-components";
import theme from "css/display.js";
import useModal from "hooks/useModal.js";
import {ReactComponent as AddImg} from 'assets/add.svg'
import * as S from "./CardContainer.style.js";

export default function CardContainer ({items, active}) {
  const { isOpen, openModal, closeModal } = useModal();
  const option = { input: true, button: { title: "추가하기", color: "blue" } } ;

  const handleButtonClick = () => {
    openModal();
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <S.Container>
          {items.map((link) => (
            <Card link={link} key={link.id} />
          ))}
        </S.Container>
        {active && <S.Button onClick={handleButtonClick}>
          폴더 추가 <AddImg alt="폴더추가" fill="#e7effb" />
        </S.Button>}
      </ThemeProvider>
      {isOpen && (
        <Modal
          title="폴더추가"
          closeModal={closeModal}
          trigger={<ModalForm subTitle="내용입력" option={option} />}
        />
      )}
    </>
  )
}