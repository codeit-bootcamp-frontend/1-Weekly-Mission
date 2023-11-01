import * as S from './styles';

const LinkButton = ({ size, link, text }) => {
  return (
    <S.CTALink size={size} to={link}>
      <span>{text}</span>
    </S.CTALink>
  );
};

export default LinkButton;
