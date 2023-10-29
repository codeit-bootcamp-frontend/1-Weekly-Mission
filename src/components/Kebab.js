import styled from "styled-components";
import kebab from '../assets/kebab.svg';
import selectMenuButton from "./SelectMenuButton";


const KebabImg = styled.img`
  width: 2.1rem;
  height: 1.7rem;
`;

const KebabContainer = styled.div`
  display: flex;
  z-index: 1;
`

const kebabOptions = ['삭제하기', '폴더에 추가'];

const handleClick = (e) => {
  {kebabOptions.map((item, index) => {
    return (
      <selectMenuButton key={index}>{item}</selectMenuButton>
    );
  })}
}

const Kebab = () => {
  return (
    <KebabContainer>
      <KebabImg src={kebab} alt="더보기 아이콘" onClick={handleClick} />
    </KebabContainer>
  )
}

export default Kebab;