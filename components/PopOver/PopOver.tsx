import { useState, MouseEvent } from 'react';
import { Modal, ModalForm } from '@/components';
import useModal from '@/public/useModal';
import PopOverTitle from './PopOverTitle';
import * as Style from './PopOver.style';

interface Url {
  url: string;
}

const PopOver = ({ url }: Url) => {
  const { isOpen, openModal, closeModal } = useModal();
  const [option, setOption] = useState({});

  const handleClick = (e: Event, name: string) => {
    e.preventDefault();
    const titleName = PopOverTitle.filter((title) => title.name === name);
    setOption(titleName[0].option);
    openModal();
  };

  return (
    <>
      <Style.Container>
        {PopOverTitle.map((title, index) => (
          <Style.Element
            key={index}
            onClick={(e: MouseEvent) => handleClick(e, title.name)}
          >
            {title.name}
          </Style.Element>
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
