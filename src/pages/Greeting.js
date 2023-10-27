import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import GlobalStyle from '../global/globalStyles';

const LinkContainer = styled.div`
width: 100vm;
justify-content: center;
display: flex;
gap: 5rem;
margin: 10rem;
`

const Button = styled.button`
display: flex;
padding: 1rem 1.6rem;
justify-content: center;
align-items: center;
gap: 1rem;
border-radius: 0.8rem;
background: var(--graBlueToSkyBlue);
color: var(--grayLight);
font-size: 1.4rem;
font-weight: 600;
border: 0;

&:hover {
  text-decoration: underline;
}
`

const Greeting = () => {

  const navigate = useNavigate();
  const handleClick = (domain) => navigate(domain);

  return (
    <>
      <GlobalStyle />
      <LinkContainer>
          <Button onClick={() => handleClick('/shared')}>Shared</Button>
          <Button onClick={() => handleClick('/folder')}>Folder</Button>
      </LinkContainer>
    </>
  )
}

export default Greeting;