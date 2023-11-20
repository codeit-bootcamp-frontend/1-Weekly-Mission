import * as S from './styles';
import IMAGES from '../../assets/images';
import Button from '../Button/Button';

const Modal = ({
  title,
  btnText,
  modalText,
  btnColor,
  folderName,
  setModalState,
}) => {
  console.log(modalText, btnColor);

  return (
    <S.ModalOuterBox>
      <S.ModalBox>
        <S.ModalFrameBox>
          <h2>{title}</h2>
          <S.ModalInnerBox>
            <S.ModalInput value={folderName} />
            <Button text={btnText} size="long" buttonColor={btnColor} />
          </S.ModalInnerBox>
        </S.ModalFrameBox>
        <img
          src={IMAGES.close}
          alt="close"
          width={20}
          height={20}
          onClick={() => setModalState(false)}
        />
      </S.ModalBox>
    </S.ModalOuterBox>
  );
};

export default Modal;
