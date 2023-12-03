import { useEffect, useState } from 'react';
import * as S from './Sorting.style';

interface ISortingProps {
  clicked: boolean;
  text: string;
}

const Sorting = ({ clicked, text }: ISortingProps) => {
  const [isActive, setIsActive] = useState(clicked);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const fontColor = isActive ? 'white' : 'black';
  const backgroundColor = isActive ? '#6D6AFE' : 'white';

  return (
    <S.Button
      clicked={clicked}
      fontColor={fontColor}
      backgroundColor={backgroundColor}
      onClick={handleClick}
    >
      {text}
    </S.Button>
  );
};

export default Sorting;
