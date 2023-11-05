import IMAGES from '../../assets/images';
import * as S from './styles';
import Button from '../Button/Button';

const ModalDeleteLink = ({
  title,
  btnColor,
  btnText,
  description,
  setModalState,
}) => {
  return (
    <S.ModalOuterBox>
      <S.ModalBox>
        <S.ModalFrameBox>
          <h2>{title}</h2>
          <S.ModalInnerBox>
            <p>{description}</p>
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

export default ModalDeleteLink;
