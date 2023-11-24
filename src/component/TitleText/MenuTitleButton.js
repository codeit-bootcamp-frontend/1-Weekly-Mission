import { useCallback, useState } from "react";
import {Modal, ModalForm, Icons} from "component";
import useModal from "hooks/useModal";
import * as S from "./TitleButton.style.js";


export default function MenuTitleButton({ title }) {
  const { isOpen, openModal, closeModal } = useModal();
  const [option, setOption] = useState({});

  const handleButtonClick = useCallback((e, name) => {
    e.preventDefault;
    const iconName = Icons.filter((icon) => icon.name === name);
    setOption(iconName[0].option);
    openModal();
  }, []);

  return (
    <>
      <S.Container>
        {Icons.map((icon, index) => (
          <S.StyledButton
            key={index}
            onClick={(e) => handleButtonClick(e, icon.name)}
          >
            <img src={icon.image} alt={icon.name}></img>
            <p>{icon.name}</p>
          </S.StyledButton>
        ))}
      </S.Container>
      {isOpen && (
        <Modal
          title={option.title}
          closeModal={closeModal}
          trigger={<ModalForm subTitle={title} option={option} />}
        />
      )}
    </>
  );
}
