import React from 'react';

import * as S from './styles';

interface LinkButtonProps {
  size: string;
  link: string;
  text: string;
}

const LinkButton = ({ size: buttonWidth, link, text }: LinkButtonProps) => {
  return (
    <S.CTALink $size={buttonWidth} to={link}>
      <span>{text}</span>
    </S.CTALink>
  );
};

export default LinkButton;
