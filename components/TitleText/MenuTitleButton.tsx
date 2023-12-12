import { useState } from 'react';
import { Modal, ModalForm, menuTitleIcons } from '@/components';
import Image from 'next/image';
import useModal from '@/public/useModal';
import * as Style from './MenuTitleButton.style';

interface Option {
  title: string;
  input?: boolean;
  color?: string;
  trigger?: string;
}

export default function MenuTitleButton({ title }: { title: string }) {
  const { isOpen, openModal, closeModal } = useModal();
  const [option, setOption] = useState<Option>();

  const handleButtonClick = (e: React.MouseEvent, name: string) => {
    e.preventDefault;
    const iconName = menuTitleIcons.filter((icon) => icon.name === name);
    setOption(iconName[0].option);
    openModal();
  };

  return (
    <>
      <Style.Container>
        {menuTitleIcons.map((icon, index) => (
          <Style.StyledButton
            key={index}
            onClick={(e) => handleButtonClick(e, icon.name)}
          >
            <Image src={icon.image} alt={icon.name} />
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
