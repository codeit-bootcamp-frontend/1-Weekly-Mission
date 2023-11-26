import React from 'react';

import * as S from './styles';

interface ButtonProps {
  size: string;
  text: string;
  buttonColor: string;
}

const Button = ({
  size: buttonWidth,
  text,
  buttonColor = 'blue',
}: ButtonProps) => {
  return (
    <S.CTA $size={buttonWidth} $buttoncolor={buttonColor}>
      <span>{text}</span>
    </S.CTA>
  );
};

export default Button;
