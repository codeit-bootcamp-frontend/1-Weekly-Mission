import ModalPortal from '@/public/portal';
import closeImg from '@/src/assets/_close.png';
import * as Style from './Modal.style';

interface Props {
  title: string;
  trigger: React.ReactNode;
  closeModal: () => void;
}

const Modal = ({ title, trigger, closeModal }: Props) => {
  return (
    <ModalPortal>
      <Style.BackGround onClick={closeModal} />
      <Style.Container>
        <Style.Title>{title}</Style.Title>
        {trigger}
        <Style.Img src={closeImg} onClick={closeModal} alt="닫기버튼" />
      </Style.Container>
    </ModalPortal>
  );
};

export default Modal;
