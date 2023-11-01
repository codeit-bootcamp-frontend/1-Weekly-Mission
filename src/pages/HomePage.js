import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Linkbrary</title>
      </Helmet>
      <HomeHead>
        . 　/)⋈/)
        <br />
        　(｡•ㅅ•｡)♡
        <br />
        ┏-∪-∪━━━━┓
        <br />♡ HomePage *.。♡ <br />
        ┗━━━━━━━┛
        <br />
      </HomeHead>
      <Link style={linkBox} to="/shared">
        shared
      </Link>
      <Link style={linkBox} to="/folder">
        folder
      </Link>
    </>
  );
}

export default HomePage;

const HomeHead = styled.h1`
  font-size: 3.2rem;
`;

const linkBox = {
  margin: '10px 10px',
  padding: '10px 10px',
  border: 'solid pink 4px',
  borderRadius: '20px',
  fontSize: '24px',
};
