import { useCallback, useState } from 'react';
import { Modal, ModalForm, Icons } from '@/components';
import useModal from '@/public/useModal';
import * as Style from './TitleButton.style.js';

interface Option {
  title: string;
  input?: boolean;
  color?: string;
  trigger?: string;
}

export default function MenuTitleButton({ title }: { title: string }) {
  const { isOpen, openModal, closeModal } = useModal();
  const [option, setOption] = useState<Option>();

  const handleButtonClick = useCallback((e: React.MouseEvent, name: string) => {
    e.preventDefault;
    const iconName = Icons.filter((icon) => icon.name === name);
    setOption(iconName[0].option);
    openModal();
  }, []);

  return (
    <>
      <Style.Container>
        {Icons.map((icon, index) => (
          <Style.StyledButton
            key={index}
            onClick={(e) => handleButtonClick(e, icon.name)}
          >
            <img src={icon.image} alt={icon.name}></img>
            <p>{icon.name}</p>
          </Style.StyledButton>
        ))}
      </Style.Container>
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
