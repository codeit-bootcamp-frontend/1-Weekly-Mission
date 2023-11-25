import link_icon from '../../assets/svg/link.svg';
import styled from 'styled-components';
import { Button } from '../../styles/Button';

function LinkAddBar() {
  return (
    <LinkAddBarStyle>
      <LinkInputContainer>
        <LinkIcon src={link_icon} alt='링크 추가 아이콘' />
        <LinkInput type='search' placeholder='링크를 추가해보세요.' />
      </LinkInputContainer>
      <Button>추가하기</Button>
    </LinkAddBarStyle>
  )
}

export default LinkAddBar;

const LinkAddBarStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

const LinkInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  
  @media (min-width: 768px) {
    gap: 1.2rem;
  }
`;

const LinkIcon = styled.img`
  width: 1.6rem;
  height: 1.6rem;
  
  @media (min-width: 768px) {
    width: 2rem;
    height: 2rem;
  }
`;

const LinkInput = styled.input`
  display: flex;
  width: 100%;
  border: 0;
  color: #9fa6b2;
  font-family: Pretendard, sans-serif;
  font-style: normal;
  font-weight: 400;
  
  &:focus::placeholder {
    color: transparent;
  }
  
  @media (min-width: 768px) {
    font-size: 1.6rem;
    line-height: 2.4rem;
  }
`;
