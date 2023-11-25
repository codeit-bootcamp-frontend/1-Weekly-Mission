import ModalBg from "./modal-styles/ModalBg";
import * as S from "./modal-styles/ModalsUnits";

interface Props {
  title?: string | undefined;
  btnName: string | undefined;
  onClose: () => void;
  inputValue?: string | undefined;
  onChange?: any;
}

function BlueShortModal({
  title,
  btnName,
  onClose,
  inputValue,
  onChange,
}: Props) {
  return (
    <ModalBg>
      <S.Wrapper>
        <S.CloseButton onClick={onClose} />
        <S.TitleWrapper>
          <S.ModalTitle>{title}</S.ModalTitle>
        </S.TitleWrapper>
        <S.ModalInput value={inputValue} onChange={onChange} />
        <S.StyledButton>{btnName}</S.StyledButton>
      </S.Wrapper>
    </ModalBg>
  );
}

export default BlueShortModal;
