import * as S from './styles';

const Button = ({ size: buttonWidth, text, buttonColor }) => {
  return (
    <S.CTA size={buttonWidth} buttoncolor={buttonColor}>
      <span>{text}</span>
    </S.CTA>
  );
};

export default Button;
