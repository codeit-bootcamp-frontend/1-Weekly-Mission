import * as S from './styles';

const LinkButton = ({ size: buttonWidth, link, text }) => {
  return (
    <S.CTALink size={buttonWidth} to={link}>
      <span>{text}</span>
    </S.CTALink>
  );
};

export default LinkButton;
