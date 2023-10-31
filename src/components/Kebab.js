import styled from "styled-components";
import kebab from '../assets/kebab.svg';
import SelectMenuButton from "./SelectMenuButton";
import { useState } from "react";


const KebabButton = styled.button`
  position: relative;
  display: inline-block;
`

const KebabImg = styled.img`
  width: 2.1rem;
  height: 1.7rem;
`;

const KebabOptionsContainer = styled.div`
  position: absolute;
  top: 2rem;
  right: 0;
  z-index: 1;
  display: block;
`

const kebabOptions = ['삭제하기', '폴더에 추가'];

const Kebab = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleClick = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <KebabButton>
      <KebabImg src={kebab} alt="더보기 아이콘" onClick={handleClick} />
      {isMenuVisible && (
        <KebabOptionsContainer>
          {kebabOptions.map((item, index) => (
            <SelectMenuButton key={index}>{item}</SelectMenuButton>
          ))}
        </KebabOptionsContainer>
      )}
    </KebabButton>
  )
}

export default Kebab;