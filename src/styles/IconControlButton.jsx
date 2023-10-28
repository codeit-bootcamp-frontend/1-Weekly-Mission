import styled from 'styled-components';

function IconControlButton({icon}) {

  return (
    <IconControlButtonContainer>
      <IconImage src={icon.iconImage} alt={icon.name}/>
      <p>{icon.name}</p>
    </IconControlButtonContainer>
  )
}

export default IconControlButton;

const IconControlButtonContainer = styled.button`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: #9FA6B2;
  font-family: Pretendard, sans-serif;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`
const IconImage = styled.img`
  width: 1.8rem;
  height: 1.8rem;
`
