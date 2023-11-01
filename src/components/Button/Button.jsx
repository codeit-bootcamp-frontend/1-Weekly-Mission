import * as S from './styles';

const Button = ({ size: buttonWidth, text }) => {
  return (
    <S.CTA size={buttonWidth}>
      <span>{text}</span>
    </S.CTA>
  );
};

export default Button;
