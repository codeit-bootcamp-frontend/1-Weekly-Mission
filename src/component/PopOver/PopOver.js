import { useState } from "react";
import { Modal, ModalForm } from "component";
import useModal from "hooks/useModal.js";
import PopOverTitle from "./PopOverTitle.js";
import * as Style from "./PopOver.style.js";

const PopOver = ({url}) => {
  const { isOpen, openModal, closeModal } = useModal();
  const [option, setOption] = useState({});

  const handleClick = (e, name) => {
    e.preventDefault();
    const titleName = PopOverTitle.filter((title) => title.name === name);
    setOption(titleName[0].option);
    openModal();
  };

  return (
    <>
      <Style.Container>
        {PopOverTitle.map((title, index) => (
          <>
            <Style.Element
              index={index}
              onClick={(e) => handleClick(e, title.name)}
            >
              {title.name}
            </Style.Element>
          </>
        ))}
      </Style.Container>
      {isOpen && (
        <Modal
          title={option.title}
          closeModal={closeModal}
          trigger={<ModalForm subTitle={url} option={option} />}
        />
      )}
    </>
  );
};

export default PopOver;
